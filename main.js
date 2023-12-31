const { app, BrowserWindow } = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  const indexPath = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, 'build/index.html')}`;
  mainWindow.loadURL(indexPath)

  if (isDev) {
    mainWindow.webContents.openDevTools()
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
