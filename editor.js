window.startEditor = function () {
  const editor = monaco.editor.create(document.getElementById("editor"), {
    value: "console.log('Monaco + Electron');",
    language: "javascript",
    theme: "vs-dark"
  });

  window.editor = editor;
};
