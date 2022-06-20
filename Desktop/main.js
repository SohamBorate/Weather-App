const { app, BrowserWindow } = require("electron");
const path = require("path");
const iconPath = path.join(__dirname, "favicon.ico");

const createWindow = (width, height) => {
    const win = new BrowserWindow({
        width: width,
        height: height,
        minWidth: 900,
        minHeight: 600,
        center: true,
        autoHideMenuBar: true,
        icon: iconPath,
    });
    win.loadFile("index.html");
    win.maximize();
}

app.whenReady().then(() => {
    const { screen } = require("electron")
    const primaryDisplay = screen.getPrimaryDisplay()
    const { width, height } = primaryDisplay.workAreaSize

    createWindow(width, height);
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