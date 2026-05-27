export class Navigation {
    constructor(buttonId, welcomeScreenId, mainContentId) {
        this.button = document.getElementById(buttonId);
        this.welcomeScreen = document.getElementById(welcomeScreenId);
        this.mainContent = document.getElementById(mainContentId);
        
        this.initEvents();
    }

    initEvents() {
        if (this.button) {
            this.button.addEventListener('click', () => this.switchScreen());
        }
    }

    switchScreen() {
        // Agregamos transiciones o simplemente alternamos visibilidad
        this.welcomeScreen.classList.add('hidden');
        this.mainContent.classList.remove('hidden');
        
        // Desplazar automáticamente al inicio del contenido
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}