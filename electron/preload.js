const { contextBridge } = require('electron');


// 필요하면 메인과 렌더러 간 안전한 통신을 노출합니다.
contextBridge.exposeInMainWorld('electron', {
platform: process.platform
});