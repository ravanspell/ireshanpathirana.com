"use client";

import {
    useCallback,
    useEffect,
    useRef,
    useState,
    useTransition
} from "react";
import { saveArticleAction } from "@/app/actions/artical";
import type { OutputData, ToolConstructable} from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import CodeTool from "@editorjs/code";
import List from "@editorjs/list";
import { useIsMounted } from "@/utils/hooks/useMounted";
import { Button } from "@/components/ui/button";
import TagInput from "@molecules/TagInput/TagInput";
import { slugify } from "@lib/slug";

// Custom interface for Editor.js instance
interface EditorJSInstance {
    destroy: () => void;
    save: () => Promise<OutputData>;
    render: (data: OutputData) => Promise<void>;
    // Add other methods as needed (e.g., clear, focus)
}

interface EditorClientProps {
    /** Present when editing an existing post; absent when drafting a new one. */
    articleId?: string;
    initialTitle?: string;
    initialSlug?: string;
    initialPublished?: boolean;
    /** Tag names already on the post. */
    initialTags?: string[];
    /** Every tag that exists, for autocomplete. */
    tagSuggestions?: string[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    initialData?: any;
}

export default function EditorClient({
    articleId,
    initialTitle = "",
    initialSlug = "",
    initialPublished = false,
    initialTags = [],
    tagSuggestions = [],
    initialData,
}: EditorClientProps) {
    const isMounted = useIsMounted();
    const editorRef = useRef<EditorJSInstance | null>(null);
    const [isPending, startTransition] = useTransition();
    const [status, setStatus] = useState<"idle" | "saving" | "done" | "error">("idle");
    const [saveError, setSaveError] = useState<string | null>(null);
    const [title, setTitle] = useState(initialTitle);
    const [slug, setSlug] = useState(initialSlug);
    const [tags, setTags] = useState<string[]>(initialTags);
    // Stops deriving from the title once the author edits the slug by hand, so
    // renaming a published post doesn't silently change its URL.
    const [slugTouched, setSlugTouched] = useState(Boolean(initialSlug));

    const onTitleChange = (value: string) => {
        setTitle(value);
        if (!slugTouched) setSlug(slugify(value));
    };

    // Memoised on `initialData` alone: every other value it closes over is a
    // module import or a ref. Without this the function identity changed on
    // each render, so listing it as an effect dependency would tear down and
    // rebuild the editor continuously.
    const initiateEditorJs = useCallback(async () => {
        const EditorJS = (await import("@editorjs/editorjs")).default;
        const ImageTool = (await import("@editorjs/image")).default;

        const editor = new EditorJS({
            holder: "editorjs",
            autofocus: true,
            placeholder: "Start writing your story...",
            data: initialData,
            tools: {
                list: List,
                header: {
                    class: Header as unknown as ToolConstructable,
                    inlineToolbar: true,
                },
                paragraph: {
                    class: Paragraph as unknown as ToolConstructable,
                    inlineToolbar: true
                },
                image: {
                    class: ImageTool,
                    config: {
                        uploader: {
                            uploadByFile(file: File) {
                                console.log("file ---->", file);
                                return new Promise((resolve) => {
                                    setTimeout(() => {
                                        resolve({
                                            success: 1,
                                            file: { url: "https://placekitten.com/400/300" },
                                        });
                                    }, 800);
                                });
                            },
                        },
                    },
                },
                code: CodeTool,
            },
            onReady: () => {
                editorRef.current = editor;
            },
        });
    }, [initialData]);

    useEffect(() => {
        if (!isMounted) return;

        if (!editorRef.current) {
            initiateEditorJs()
        }

        return () => {
            editorRef.current?.destroy();
            editorRef.current = null;
        };
    }, [initiateEditorJs, isMounted]);

    const save = async (published: boolean) => {
        const trimmedTitle = title.trim();
        const finalSlug = (slug || slugify(trimmedTitle)).trim();

        if (!trimmedTitle || !finalSlug) {
            setSaveError("Title and slug are both required.");
            setStatus("error");
            return;
        }

        try {
            const outputData = await editorRef.current?.save();
            if (!outputData) return;

            setStatus("saving");

            // call the server action (runs on server)
            startTransition(async () => {
                const result = await saveArticleAction({
                    id: articleId,
                    title: trimmedTitle,
                    slug: finalSlug,
                    content: outputData,
                    published,
                    tagNames: tags,
                });

                if (!result?.success) {
                    // Field errors come back from Zod, `error` from a domain failure.
                    const message = result?.errors
                        ? Object.values(result.errors).join(", ")
                        : result?.error;
                    console.error("Saving failed:", message);
                    setSaveError(message ?? "Unknown error");
                    setStatus("error");
                    return;
                }

                setSaveError(null);
                // Both come back normalised by the server — the slug may have
                // been derived, and tag names resolve to whatever spelling the
                // existing tag rows use.
                setSlug(result.data.slug);
                setTags(result.data.tags.map((tag) => tag.name));
                setStatus("done");
            });
        } catch (error) {
            console.error("Saving failed:", error);
            setSaveError(error instanceof Error ? error.message : "Unknown error");
            setStatus("error");
        }
    };

    return (
        <div className="w-full space-y-4">
            <div className="space-y-2">
                <label className="block text-sm font-medium" htmlFor="post-title">
                    Title
                </label>
                <input
                    id="post-title"
                    value={title}
                    onChange={(e) => onTitleChange(e.target.value)}
                    placeholder="Post title"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-lg"
                />
            </div>

            <div className="space-y-2">
                <label className="block text-sm font-medium" htmlFor="post-slug">
                    Slug
                </label>
                <div className="flex items-center gap-2">
                    <span className="text-muted-foreground text-sm">/blog/</span>
                    <input
                        id="post-slug"
                        value={slug}
                        onChange={(e) => {
                            setSlugTouched(true);
                            setSlug(slugify(e.target.value));
                        }}
                        placeholder="post-slug"
                        className="flex-1 rounded-md border border-input bg-background px-3 py-2 font-mono text-sm"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="block text-sm font-medium" htmlFor="post-tags">
                    Tags
                </label>
                <TagInput
                    id="post-tags"
                    value={tags}
                    onChange={setTags}
                    suggestions={tagSuggestions}
                    disabled={isPending}
                />
            </div>

            <div
                id="editorjs"
                className="bg-card text-card-foreground rounded-md border border-input p-2"
            />

            <div className="flex items-center gap-2">
                <Button disabled={isPending} onClick={() => save(true)}>
                    {isPending ? "Saving..." : initialPublished ? "Update" : "Publish"}
                </Button>
                <Button variant="outline" disabled={isPending} onClick={() => save(false)}>
                    Save draft
                </Button>
            </div>

            {status === "done" && <p className="text-green-600">✅ Saved successfully!</p>}
            {status === "error" && (
                <p className="text-destructive">❌ Save failed{saveError ? `: ${saveError}` : "."}</p>
            )}
        </div>
    );
}
