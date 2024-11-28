const path = require('path')
const { app, BrowserWindow } = require('electron')
require('./ipcmain.js')

if (require('electron-squirrel-startup')) {
    app.quit()
}

const createWindow = async () => {
    const options = {
        width: 1280,
        height: 960,
        webPreferences: {
            partition: String(new Date().getTime()),
            webSecurity: true,
            nodeIntegration: false,
            enableRemoteModule: true,
            preload: path.join(__dirname, 'preload.js'),
        }
    }
    const mainWindow = new BrowserWindow(options)
    if (!app?.isPackaged) {
        mainWindow.loadURL('http://localhost:5173')
        mainWindow.webContents.openDevTools()
    } else {
        mainWindow.loadFile(path.join(__dirname, '../dist', 'index.html'))
    }
    
}

app.whenReady().then(async () => {
    await createWindow()
    app.on('activate', async () => {
        if (BrowserWindow.getAllWindows().length === 0) {
           await createWindow()
        }
    })
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})