export class Modal {
    constructor(triggerBtnId, modalId, closeBtnId){
        this.triggerBtn = document.getElementById(triggerBtnId);
        this.modal = document.getElementById(modalId);
        this.closeBtn = document.getElementById(closeBtnId);

        this.initEvents();
    }
    
    initEvents(){
        if (!this.triggerBtn || !this.modal || !this.closeBtn) return;

        //Abrir modal
        this.triggerBtn.addEventListener('click', () => {
            this.modal.classList.remove('hidden');
        });

        //Cerrar modal con la x
        this.closeBtn.addEventListener('click', () => {
            this.modal.classList.add('hidden');
        });

        //Cerrar modal al hacer clic en el fondo oscuro
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.modal.classList.add('hidden');
            }
        });
    }

}