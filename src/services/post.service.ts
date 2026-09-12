import { Injectable, inject } from '@lib/di/injectable';
import { BaseService } from './base.service';
import { AuthService } from './auth.service';
import { PostRepository } from '@repositories/post.repository';
import { CreatePostDto, UpdatePostDto, UpsertPostDto } from '@dtos/post.dto';
import { deriveExcerpt } from '@lib/editor-content';

/**
 * Post Service
 * Contains business logic for post operations
 */
@Injectable()
export class PostService extends BaseService {
  constructor(
    @inject(PostRepository) private postRepository: PostRepository,
    @inject(AuthService) private authService: AuthService,
  ) {
    super();
  }

  /**
   * Every write below, and every read that can see drafts, goes through this.
   *
   * Server Actions are public HTTP endpoints: the request posts to whatever
   * route the caller is on, so `middleware.ts` — which authorises by pathname —
   * is not a boundary for them. An action invoked from a public page reaches
   * this service with no session. Authorisation therefore lives here, next to
   * the data, and the author id comes from the session rather than from an
   * argument a caller could set.
   */
  private async requireAuthorId(): Promise<string> {
    const user = await this.authService.getCurrentUser();
    if (!user) this.unauthorized();
    return user.id;
  }

  /**
   * `publishedAt` is stamped the first time a post goes live and kept
   * thereafter, so unpublishing and republishing doesn't rewrite its date.
   */
  private publishedAtFor(published: boolean, existing: Date | null): Date | null {
    if (!published) return existing;
    return existing ?? new Date();
  }

  // ---------- Public reads ----------

  /**
   * Published posts, newest first. Used by the public blog index, which
   * renders from `excerpt` and so doesn't need the block documents.
   */
  async getPublishedPosts() {
    return this.postRepository.findAll({ publishedOnly: true, includeContent: false });
  }

  /**
   * A single published post. Drafts are filtered out in the query, so an
   * unpublished slug is a 404 to the public rather than a leak.
   */
  async getPublishedPostBySlug(slug: string) {
    const post = await this.postRepository.findBySlug(slug, { publishedOnly: true });

    if (!post) {
      this.notFound('Post');
    }

    return post;
  }

  // ---------- Authenticated reads (drafts included) ----------

  /**
   * Every post including drafts — the admin list. Requires a session, because
   * unpublished content is not public.
   */
  async getAllPosts(options?: { includeContent?: boolean }) {
    await this.requireAuthorId();

    return this.postRepository.findAll({
      includeContent: options?.includeContent ?? false,
      orderBy: 'desc',
    });
  }

  /** A post by slug, drafts included. Requires a session. */
  async getPostBySlug(slug: string) {
    await this.requireAuthorId();

    const post = await this.postRepository.findBySlug(slug);

    if (!post) {
      this.notFound('Post');
    }

    return post;
  }

  /** A post by id, drafts included. Requires a session. */
  async getPostById(id: string) {
    await this.requireAuthorId();

    const post = await this.postRepository.findById(id);

    if (!post) {
      this.notFound('Post');
    }

    return post;
  }

  // ---------- Writes ----------

  /**
   * Create a new post
   * Validates slug uniqueness before creating
   */
  async createPost(data: CreatePostDto) {
    const authorId = await this.requireAuthorId();

    if (await this.postRepository.slugExists(data.slug)) {
      this.conflict('A post with this slug already exists');
    }

    return this.postRepository.create({
      ...data,
      authorId,
      excerpt: deriveExcerpt(data.content),
      publishedAt: this.publishedAtFor(data.published, null),
    });
  }

  /**
   * Update an existing post
   * Validates slug uniqueness if slug is being updated
   */
  async updatePost(id: string, data: Partial<UpdatePostDto>) {
    await this.requireAuthorId();

    const existing = await this.postRepository.findById(id);
    if (!existing) {
      this.notFound('Post', id);
    }

    if (data.slug && (await this.postRepository.slugExists(data.slug, id))) {
      this.conflict('A post with this slug already exists');
    }

    const published = data.published ?? existing.published;

    return this.postRepository.update(id, {
      ...data,
      // Only recompute the preview when the content actually changed.
      ...(data.content ? { excerpt: deriveExcerpt(data.content) } : {}),
      publishedAt: this.publishedAtFor(published, existing.publishedAt),
    });
  }

  /**
   * Upsert a post (create or update)
   * What the editor calls: create on first save, update on every save after.
   */
  async upsertPost(data: UpsertPostDto) {
    if (data.id) {
      const { id, ...rest } = data;
      return this.updatePost(id, rest);
    }

    return this.createPost(data);
  }

  /**
   * Delete a post
   */
  async deletePost(id: string) {
    await this.requireAuthorId();

    return this.postRepository.delete(id);
  }
}
