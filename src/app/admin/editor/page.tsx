import { notFound } from 'next/navigation';
import Editor from '@molecules/BlogEditor/BlogEditor';
import { resolve } from '@/lib/di/container';
import { PostController } from '@controllers/post.controller';

/**
 * Editor page.
 *
 * A Server Component so an existing post can be loaded before render — the only
 * client-side piece is the editor itself. `?id=` switches it from "new post" to
 * editing an existing one; without it, a blank draft.
 */
export default async function EditorPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const { id } = await searchParams;

  if (!id) {
    return (
      <div className="mt-10">
        <h1 className="text-foreground mb-4 text-2xl font-bold">New Post</h1>
        <Editor />
      </div>
    );
  }

  // Drafts included — this read requires a session, which middleware has
  // already enforced for /admin, and PostService re-checks regardless.
  const result = await resolve(PostController).getPostById(id);

  if (!result.success || !result.data) {
    notFound();
  }

  const post = result.data;

  return (
    <div className="mt-10">
      <h1 className="text-foreground mb-4 text-2xl font-bold">
        {post.published ? 'Edit Post' : 'Edit Draft'}
      </h1>
      <Editor
        articleId={post.id}
        initialTitle={post.title}
        initialSlug={post.slug}
        initialPublished={post.published}
        initialData={post.content}
      />
    </div>
  );
}
