/**
 * This is a sample Electron app written in TypeScript.
 */

// import { app, BrowserWindow } from 'electron';
const { app, shell, BrowserWindow, Menu, MenuItem } = require('electron');
const path = require('path');

// open each link in a new browser window
// app.on('web-contents-created', (e, contents) => {
//   contents.on('new-window', (e, url) => {
//     e.preventDefault();
//     shell.openExternal(url);
//   });
// });



const loadWindow = (url) => {
  window = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    icon: path.join(__dirname + './sonetel.ico'),
  });
  window.loadURL(url);

}

const mainMenu = new Menu();
mainMenu.append(new MenuItem({
  label: 'Sonetel',
  submenu: [
    {
      label: 'Quit',
      accelerator: process.platform === 'darwin' ? 'Command+Q' : 'Ctrl+Q',
      click: () => {
        shell.beep();
        app.quit();
      }
    },
    {
      label: 'About',
      click: () => {
        loadWindow('https://sonetel.com/en/about/');
      }
    },
    {
      label: 'Help',
      click: () => {
        loadWindow('https://sonetel.com/en/help/help-topics/');
      },
      accelerator: process.platform === 'darwin' ? 'Command+H' : 'Ctrl+H',
    }
  ]
}));

mainMenu.append(new MenuItem({
  label: 'Help',
  submenu: [
    {
      label: 'About',
      click: () => {
        loadWindow('https://github.com/aashish-joshi/sonetel_desktop');
      }
    }
  ],
}))

Menu.setApplicationMenu(mainMenu)

const createWindow = () => {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  // and load the index.html of the app.
  win.loadURL('https://app.sonetel.com/messages/conversations')

  // win.webContents.executeJavaScript('localStorage.getItem("accessToken");', true)
  // .then(result => {
  //   console.log(result);
  // });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
