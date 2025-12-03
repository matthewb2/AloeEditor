import React, { useRef, useEffect } from "react";
import * as monaco from "monaco-editor";

import "./renderer/styles.css";

export default function App() {
  const editorRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const editor = monaco.editor.create(containerRef.current, {
      value: '',
      language: "javascript",
      automaticLayout: true,
      theme: "vs-dark",
    });

    editorRef.current = editor;

    return () => editor.dispose();
  }, []);

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <div ref={containerRef} style={{ flex: 1 }} />
    </div>
  );
}
