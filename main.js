const { app, BrowserWindow } = require("electron");
const path = require("path");
require('electron-reload')(__dirname);

function createWindow() {
  const win = new BrowserWindow({
    resizable: true,
    center: true,
    /* autoHideMenuBar: false, */
    width: 1440,
    height: 1024,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("index.html");
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
