export class ScrollAnimations {
    constructor(selector) {
        this.elements = document.querySelectorAll(selector);
        
        // Configuramos el observador
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15 // Se activa cuando el 15% del elemento es visible
        };

        this.observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Opcional: Descomenta la siguiente línea si solo quieres que se anime una vez
                    // observer.unobserve(entry.target);
                } else {
                    // Si comentas esta línea, los elementos no se volverán a ocultar al subir
                    entry.target.classList.remove('is-visible');
                }
            });
        }, observerOptions);
    }

    init() {
        this.elements.forEach(el => this.observer.observe(el));
    }
}