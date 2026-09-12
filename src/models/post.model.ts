import type { Post as PostRow, Tag as TagRow } from '@generated/prisma/client';
import type { EditorContent } from '@dtos/post.dto';
import { Tag } from './tag.model';

/**
 * Shape the repository actually selects: a post row, optionally with its join
 * rows included, and with `content` absent on list queries that skip it.
 */
export type PostRowWithTags = Omit<PostRow, 'content'> & {
  content?: PostRow['content'];
  tags?: { tag: TagRow }[];
};

/**
 * Post Domain Model
 * Represents a blog post entity
 */
export class Post {
  id: string;
  title: string;
  slug: string;
  /**
   * Absent on list queries built with `includeContent: false` — the blog index
   * renders from `excerpt` instead. Guard before rendering.
   */
  content?: EditorContent;
  /** Plain-text preview derived from the content on save. */
  excerpt: string | null;
  published: boolean;
  publishedAt: Date | null;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
  /** Flattened from the `PostTag` join rows. Empty when tags weren't included. */
  tags: Tag[];

  constructor(data: PostRowWithTags) {
    this.id = data.id;
    this.title = data.title;
    this.slug = data.slug;
    // Prisma types a `Json` column as `JsonValue`; the shape was validated by
    // `editorContentSchema` on the way in.
    this.content = data.content as EditorContent | undefined;
    this.excerpt = data.excerpt;
    this.published = data.published;
    this.publishedAt = data.publishedAt;
    this.authorId = data.authorId;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.tags = data.tags?.map((pt) => new Tag(pt.tag)) ?? [];
  }
}
