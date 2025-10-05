import { createClient } from '@/lib/supabase-server';

export interface User {
  id: string;
  email?: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  author_id: string;
  created_at: string;
}

export interface UpsertPostParams {
  id?: string;
  title: string;
  content: string;
  slug: string;
}

/**
 * Supabase Service - Data layer for authentication and post operations
 *
 * @remarks
 * This service provides methods for user authentication and CRUD operations on posts.
 * All methods are SSR-safe and handle errors appropriately.
 */
export const supabaseService = {
  /**
   * Get current authenticated user (SSR-safe)
   *
   * @returns Promise resolving to the current User object or null if not authenticated
   *
   * @example
   * ```typescript
   * const user = await supabaseService.getUser();
   * if (user) {
   *   console.log('Logged in as:', user.email);
   * }
   * ```
   */
  async getUser(): Promise<User | null> {
    const supabase = await createClient();
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();
    if (error) console.error('getUser error:', error.message);
    return user ?? null;
  },

  /**
   * Fetch a single post by slug
   *
   * @param slug - The unique slug identifier for the post
   * @returns Promise resolving to Post object or null if not found
   *
   * @example
   * ```typescript
   * const post = await supabaseService.getPostBySlug("my-awesome-post");
   * if (post) {
   *   console.log(post.title);
   * }
   * ```
   */
  async getPostBySlug(slug: string): Promise<Post | null> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('posts')
      .select('id, title, slug, content, author_id, created_at')
      .eq('slug', slug)
      .single();

    if (error) console.error('getPostBySlug error:', error.message);
    return data ?? null;
  },

  /**
   * Fetch all public posts (for blog index)
   *
   * @returns Promise resolving to array of Post objects (empty array if no posts or error)
   *
   * @remarks
   * Posts are ordered by creation date in descending order (newest first)
   *
   * @example
   * ```typescript
   * const posts = await supabaseService.getAllPosts();
   * posts.forEach(post => {
   *   console.log(post.title, post.created_at);
   * });
   * ```
   */
  async getAllPosts(): Promise<Post[]> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('posts')
      .select('id, title, slug, created_at, author_id')
      .order('created_at', { ascending: false });

    if (error) console.error('getAllPosts error:', error.message);
    return data ?? [];
  },

  /**
   * Create or update a post (Protected operation)
   *
   * @param params - Object containing post data
   * @param params.id - Optional post ID for updates (creates new post if omitted)
   * @param params.title - Post title
   * @param params.content - Post content
   * @param params.slug - URL-friendly post identifier
   * @returns Promise resolving to the created/updated Post object
   * @throws Error if unauthorized or operation fails
   *
   * @remarks
   * This method requires an authenticated user. The current user's ID will be set as author_id.
   * If id is provided, it will update the existing post; otherwise creates a new post.
   *
   * @example
   * ```typescript
   * // Create new post
   * try {
   *   const post = await supabaseService.upsertPost({
   *     title: "New Post",
   *     content: "Post content here",
   *     slug: "new-post"
   *   });
   *   console.log("Post created:", post.id);
   * } catch (error) {
   *   console.error("Failed to create post:", error.message);
   * }
   *
   * // Update existing post
   * try {
   *   const updatedPost = await supabaseService.upsertPost({
   *     id: "existing-post-id",
   *     title: "Updated Title",
   *     content: "Updated content",
   *     slug: "updated-post"
   *   });
   *   console.log("Post updated:", updatedPost.id);
   * } catch (error) {
   *   console.error("Failed to update post:", error.message);
   * }
   * ```
   */
  async upsertPost({ id, title, content, slug }: UpsertPostParams): Promise<Post> {
    const supabase = await createClient();
    const user = await this.getUser();
    if (!user) throw new Error('Unauthorized');

    const { data, error } = await supabase
      .from('posts')
      .upsert({
        id,
        title,
        content,
        slug,
        author_id: user.id,
      })
      .select()
      .single();

    if (error) throw new Error(error.message);
    return data;
  },
};
