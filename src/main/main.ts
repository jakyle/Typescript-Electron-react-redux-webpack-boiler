import { app, BrowserWindow, ipcMain } from 'electron';
import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer';
import Store from 'electron-store';
import * as path from 'path';
import * as url from 'url';
import chalk from 'chalk';
import './ipcs';
import { ApplicationState } from '../renderer/store';
import { ExampleState } from '../renderer/store/example/types';

// jimmy : James' path
const username = 'jimmy';

let mainWindow: Electron.BrowserWindow;
export const electronStore = new Store();

const ctx = new chalk.constructor({enabled: true, level: 3});

console.log(ctx.green.bold.underline('Starting Electron App...\n'));

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800,
    });

    // and load the index.html of the app.
    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, './index.html'),
            protocol: 'file:',
            slashes: true,
        })
    );

    // Open the DevTools.
    mainWindow.webContents.openDevTools();

    // Emitted when the window is closed.
    mainWindow.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('ready', () => {
    BrowserWindow.addDevToolsExtension(
        `C:\\Users\\${username}\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\fmkadmapgofadopljbjfkapdkoienihi\\3.2.3_0`);
    [REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS].forEach(extension => {
        installExtension(extension)
            .then((name) => console.log(ctx.blue('Added Extension: ', name)))
            .catch((err) => console.log(ctx.red('Error adding extension - ', err)));
    });
});

app.on('before-quit', () => {
    mainWindow.webContents.send('request-state');
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
