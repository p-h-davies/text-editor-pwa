const butInstall = document.getElementById('buttonInstall');

let installPrompt = null;

// Logic for installing the PWA
//Handler pre-install
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    installPrompt = event;
    butInstall.style.visibility = 'visible';
});

//Handler to trigger install
butInstall.addEventListener('click', async () => {
    if (!installPrompt) {
        return;
    }
    const result = await installPrompt.prompt();
    installPrompt = null;
    butInstall.setAttribute("hidden", "");
    butInstall.textContent = 'Installed!';
});

//Handler for after installation
window.addEventListener('appinstalled', (event) => {
    installPrompt = null;
    butInstall.setAttribute("hidden", "");
    console.log('👍', 'appinstalled', event);
});
