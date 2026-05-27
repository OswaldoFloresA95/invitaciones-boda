export class Countdown {
    constructor(targetDateString, domIds) {
        this.targetDate = new Date(targetDateString).getTime();
        this.domElements = {
            dias: document.getElementById(domIds.dias),
            horas: document.getElementById(domIds.horas),
            minutos: document.getElementById(domIds.minutos),
            segundos: document.getElementById(domIds.segundos)
        };
        this.intervalId = null;
    }

    start() {
        this.update(); // Ejecución inicial inmediata
        this.intervalId = setInterval(() => this.update(), 1000);
    }

    update() {
        const ahora = new Date().getTime();
        const diferencia = this.targetDate - ahora;

        if (diferencia <= 0) {
            clearInterval(this.intervalId);
            this.render(0, 0, 0, 0);
            return;
        }

        // Cálculos de tiempo
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        this.render(dias, horas, minutos, segundos);
    }

    render(d, h, m, s) {
        // Formateo con ceros a la izquierda (02 en lugar de 2)
        this.domElements.dias.innerText = String(d).padStart(2, '0');
        this.domElements.horas.innerText = String(h).padStart(2, '0');
        this.domElements.minutos.innerText = String(m).padStart(2, '0');
        this.domElements.segundos.innerText = String(s).padStart(2, '0');
    }
}