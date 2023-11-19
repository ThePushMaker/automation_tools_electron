const { app, BrowserWindow } = require('electron')
const express = require('express');
// include the Node.js 'path' module at the top of your file
const path = require('node:path')
// Para ESM

const expressApp = express();
const expressPort = 3000;

// Configurar el servidor Express
expressApp.get('/', (req, res) => {
  res.send('¡Hola desde Express en Electron!');
});

// Iniciar el servidor Express
const expressServer = expressApp.listen(expressPort, () => {
  console.log(`Servidor Express en http://localhost:${expressPort}`);
});



// modify your existing createWindow() function
const createWindow = () => {
  const win = new BrowserWindow({
    width: 1100,
    height: 900,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })
  
  win.loadFile('index.html')
  
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
