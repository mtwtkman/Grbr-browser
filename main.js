const path = require('path');
const url = require('url');
const electron = require('electron');
const {app, BrowserWindow, ipcMain} = electron;

W = 470;

const createWindow = () => {
    let win = new BrowserWindow({
        width: W,
        height: electron.screen.getPrimaryDisplay().workAreaSize.height,
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true,
    }));

    win.on('closed', () => {
        win = null;
    });

    ipcMain.on('open-submenu', (ev, arg) => {
        win.setSize(arg || W + 384, win.getSize()[1]);
    });

    ipcMain.on('close-submenu', ev => {
        win.setSize(W, win.getSize()[1]);
    });
};

app.on('ready', createWindow);

app.on('activate', () => {
    if (win === null) createWindow();
});

app.on('window-all-closed', app.quit);
