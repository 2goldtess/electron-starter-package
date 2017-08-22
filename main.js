const { app, BrowserWindow, Menu } = require('electron');
//main process
const path = require('path');
const url = require('url');

//global objects
let win;

//activating electron reload
require('electron-reload')(__dirname);


function createWindow() {
    win = new BrowserWindow({ width: 800, height: 600 });
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'main.html'),
        protocol: 'file',
        slashed: true
    }));

    win.on('closed', () => {
        win.null;
    });
    //activating dev tools 
    win.openDevTools();
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win == null) {
        createWindow();
    }

});