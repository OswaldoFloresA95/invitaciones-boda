import { Navigation } from './components/Navigation.js';
import { Countdown } from './components/Countdown.js';
import { Modal } from './components/Modal.js';
import { ScrollAnimations } from './components/Animations.js';

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navegación
    new Navigation('btn-ingresar', 'pantalla-bienvenida', 'invitacion');

    // 2. Contador
    const FECHA_BODA = "Oct 17, 2026 21:00:00";
    const contadorIds = { dias: 'dias', horas: 'horas', minutos: 'minutos', segundos: 'segundos' };
    const miContador = new Countdown(FECHA_BODA, contadorIds);
    miContador.start();

    // 3. Inicializar Modal de Regalos
    new Modal('btn-regalos', 'modal-regalos', 'close-modal');

    // 4. Inicializar Animaciones de Scroll
    const animaciones = new ScrollAnimations('.animate-on-scroll');
    animaciones.init();

});