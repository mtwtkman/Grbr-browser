const {ipcRenderer} = require('electron');

const toggleSubmenu = () => {
    const submenu = () => document.getElementById('submenu');
    submenu().addEventListener('click', () => {
        const isOpened = submenu().getAttribute('class').indexOf('open') !== -1;
        ipcRenderer.send(`${isOpened ? 'open' : 'close'}-submenu`);
    });
};

window.go = () => {
    toggleSubmenu();
};
