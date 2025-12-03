const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 900,
    title: "Aloe Editor", 
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false,
    },
  });

  // 개발 시 로컬 파일을 로드하려면 아래와 같이 사용
  // win.loadURL('http://localhost:8080');

  // 프로덕션에서는 dist/index.html을 로드
  win.loadFile(path.join(__dirname, "..", "dist", "index.html"));
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0)
      createWindow()       
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
