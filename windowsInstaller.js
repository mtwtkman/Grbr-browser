const installer = require('electron-winstaller');

installer.createWindowsInstaller({
    appDirectory: './Grbr-win32-x64/',
    outputDirectory: './Grbr-win-x64/',
    authors: 'mtwtkman',
    description: 'Browser for Granbluefantasy',
    exe: 'Grbr.exe',
})
.then(() => console.log('done'))
.catch(e => console.log(e.message));
