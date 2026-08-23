const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

// Ilovaning o'zi (mijozlar, qarz/to'lov, mahsulotlar va h.k.) to'liq
// index.html ichida — Node backend yoki IPC shart emas, chunki ma'lumotlar
// brauzer xotirasida (localStorage) saqlanadi. Bu fayl shunchaki index.html'ni
// o'z oynasida ochib beruvchi yupqa "qobiq" (shell).

function createWindow() {
  const win = new BrowserWindow({
    width: 1300,
    height: 830,
    minWidth: 900,
    minHeight: 600,
    icon: path.join(__dirname, 'build', 'icon.ico'),
    title: "Qarz Daftari", // haqiqiy sarlavha (kompaniya nomi bilan) ilova ichida dinamik o'rnatiladi
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  Menu.setApplicationMenu(null);
  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
