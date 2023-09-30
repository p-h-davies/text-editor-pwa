const butInstall = document.getElementById('buttonInstall');

let installPrompt = null;

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    installPrompt = event;
    butInstall.style.visibility = 'visible';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (!installPrompt) {
        return;
    }
    const result = await installPrompt.prompt();
    installPrompt = null;
    butInstall.setAttribute("hidden", "");
    butInstall.textContent = 'Installed!';
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    installPrompt = null;
    butInstall.setAttribute("hidden", "");
    console.log('👍', 'appinstalled', event);
});
