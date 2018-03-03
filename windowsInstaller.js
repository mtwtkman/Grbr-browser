const installer = require('electron-winstaller');
const fs = require('fs');
const path = require('path');

const src = './Grbr-win32-x64/';

const removeRec = name => {
    if (fs.statSync(name).isDirectory()) {
        fs.readdirSync(name).forEach(x => removeRec(path.join(name, x)))
        fs.rmdirSync(name);
    } else {
        fs.unlinkSync(name);
    }
}

installer.createWindowsInstaller({
    appDirectory: src,
    outputDirectory: './Grbr-win-x64/',
    authors: 'mtwtkman',
    description: 'Browser for Granbluefantasy',
    exe: 'Grbr.exe',
})
.then(() => {
    removeRec(src);
})
.catch(e => console.log(e.message));
