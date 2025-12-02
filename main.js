// main.js

const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  // 새 브라우저 창을 생성합니다.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // 렌더러 프로세스에서 Node.js API를 사용할 수 있도록 설정합니다.
      // 실제 프로덕션 앱에서는 보안을 위해 Context Isolation을 활성화하는 것이 좋습니다.
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // index.html 파일을 로드합니다.
  mainWindow.loadFile('index.html');

  // 개발자 도구를 엽니다. (선택 사항)
  // mainWindow.webContents.openDevTools();
}

// Electron이 준비되었을 때 창을 생성합니다.
app.whenReady().then(() => {
  createWindow();

  // macOS에서 Dock 아이콘을 클릭했을 때 창을 다시 여는 처리
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// 모든 창이 닫혔을 때 앱을 종료합니다.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});