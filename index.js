'use strict';

const electron = require('electron');

var menuTemplate = [{
  label: "EEG Correlation",
  submenu: [
    { label: "About Application", selector: "orderFrontStandardAboutPanel:" },
    { type: "separator" },
    { label: "Quit", accelerator: "CmdOrCtrl+Q", click: function () { app.quit(); } }
  ]
}, {
  label: "Edit",
  submenu: [
    { label: "Undo", accelerator: "CmdOrCtrl+Z", selector: "undo:" },
    { label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:" },
    { type: "separator" },
    { label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:" },
    { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:" },
    { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" },
    { label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:" }
  ]
}
];

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let mainWindowIcon = __dirname + '/resources/images/icon';
let mainWindow;

if (process.platform == 'darwin') {
  mainWindowIcon = mainWindowIcon + ".icns";
} else if (process.platform == 'win') {
  mainWindowIcon = mainWindowIcon + ".ico";
} else {
  mainWindowIcon = mainWindowIcon + ".png";
}

app.on('window-all-closed', function() {
  app.quit();
  //if(process.platform != 'darwin') {
  //  app.quit();
  //}
});

app.on('ready', function () {
  mainWindow = new BrowserWindow({
    title: 'EEG Correlation Viewer - KAUST Biostatistics Group',
    width: 800,
    height: 600,
    minWidth: 400,
    minHeight: 300,
    icon: mainWindowIcon,
    acceptFirstMouse: true,
    //titleBarStyle: 'hidden',
    //frame: false,
  });


  //mainWindow.setMenu(electron.Menu.buildFromTemplate(menuTemplate));
  mainWindow.setMenu(null);
  mainWindow.loadURL('file://' + __dirname + '/resources/viewer.html?{"dirname": "' + __dirname + '"}');
  
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
  mainWindow.maximize();
  //
  //
  mainWindow.toggleDevTools();
});

app.on('error', function () {
  console.log("Error starting the application")
});


