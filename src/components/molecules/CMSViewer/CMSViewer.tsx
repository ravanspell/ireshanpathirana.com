'use client';

import { useEffect, useRef } from 'react';

interface CMSViewerProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

export default function CMSViewer({ data }: CMSViewerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!data || !ref.current) return;

    let editor: { destroy: () => void } | undefined;
    let cancelled = false;

    // Loaded lazily: Editor.js reaches for `window` at import time, so it can
    // only be pulled in once this effect runs in the browser.
    void import('@editorjs/editorjs').then(({ default: EditorJS }) => {
      if (cancelled || !ref.current) return;

      editor = new EditorJS({
        holder: ref.current,
        readOnly: true,
        data,
      });
    });

    return () => {
      cancelled = true;
      editor?.destroy();
    };
  }, [data]);

  return <div ref={ref} />;
}
