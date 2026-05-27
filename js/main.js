import { Navigation } from './components/Navigation.js';
import { Countdown } from './components/Countdown.js';

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Inicializar Navegación entre Pantallas
    new Navigation('btn-ingresar', 'pantalla-bienvenida', 'invitacion');

    // 2. Definir la fecha objetivo de la boda (Modifica la fecha y hora aquí)
    const FECHA_BODA = "Oct 17, 2026 21:00:00";
    
    // Mapas de los IDs del DOM para el contador
    const contadorIds = {
        dias: 'dias',
        horas: 'horas',
        minutos: 'minutos',
        segundos: 'segundos'
    };

    // 3. Inicializar y arrancar el contador
    const miContador = new Countdown(FECHA_BODA, contadorIds);
    miContador.start();

});