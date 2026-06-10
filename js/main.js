import { Navigation } from './components/Navigation.js';
import { Countdown } from './components/Countdown.js';
import { Modal } from './components/Modal.js';
import { ScrollAnimations } from './components/Animations.js';
import { listaInvitados } from './data/invitados.js';

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navegación
    const navegacion = new Navigation('btn-ingresar', 'pantalla-bienvenida', 'invitacion');

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

    // 4. LÓGICA DE BÚSQUEDA Y RSVP DINÁMICO
    // Función para quitar acentos, espacios extra y pasar a minúsculas
    function normalizarTexto(texto) {
        return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
    }

    const btnBuscar = document.getElementById('btn-buscar');
    const inputNombre = document.getElementById('input-nombre');
    const mensajeError = document.getElementById('mensaje-error');

    btnBuscar.addEventListener('click', () => {
        const nombreLimpio = normalizarTexto(inputNombre.value);
        
        // Buscar invitado en el arreglo
        const invitadoEncontrado = listaInvitados.find(invitado => 
            normalizarTexto(invitado.id) === nombreLimpio
        );

        if (invitadoEncontrado) {
            mensajeError.style.display = 'none'; // Ocultar error
            
            // --- PERSONALIZAR LA VISTA RSVP ---
            document.getElementById('mensaje-bienvenida-rsvp').innerText = 
                `Hola ${invitadoEncontrado.nombreMostrar}, nos haría muy felices contar con tu presencia. Tienes ${invitadoEncontrado.pases} pase(s) asignado(s).`;
            
            document.getElementById('nombre-invitado').value = invitadoEncontrado.nombreMostrar;

            // Generar el menú desplegable (Select) según los pases
            const selectPases = document.getElementById('cantidad-pases');
            selectPases.innerHTML = ''; // Limpiar opciones previas
            
            for (let i = 1; i <= invitadoEncontrado.pases; i++) {
                let option = document.createElement('option');
                option.value = i;
                option.text = i === 1 ? '1 persona' : `${i} personas`;
                selectPases.appendChild(option);
            }

            // --- EJECUTAR TRANSICIÓN ---
            navegacion.switchScreen();

        } else {
            mensajeError.style.display = 'block'; // Mostrar error si no coincide
        }
    });

    // 5. EVENTO PARA ENVIAR WHATSAPP
    document.getElementById('btn-enviar-rsvp').addEventListener('click', () => {
        const nombreConfirmado = document.getElementById('nombre-invitado').value;
        const pasesConfirmados = document.getElementById('cantidad-pases').value;
        
        // Armar el mensaje
        const mensaje = `¡Hola! Soy ${nombreConfirmado} y confirmo la asistencia de ${pasesConfirmados} persona(s) a la boda.`;
        
        // Redirigir a WhatsApp
        const numeroWhatsApp = "526391744293";
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
        
        window.open(urlWhatsApp, '_blank');
    });

});