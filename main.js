const {app, BrowserWindow} = require('electron');

const createWindow = () => {
    let win = new BrowserWindow({
        width: 1920,
        height: 1080,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('index.html');
}

app.on('ready', createWindow);