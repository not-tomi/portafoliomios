document.addEventListener("DOMContentLoaded", () => {
    // Obtén referencias a las secciones y botones
    const cajaInicio = document.querySelector('.caja_inicio');
    const sobreMiSection = document.getElementById('sobreMi');
    const proyectosSection = document.getElementById('proyectos');
    const contactoSection = document.getElementById('contacto');

    const sobreMiButton = document.querySelector('.caja_inicio h1:nth-child(1) span:nth-child(2)');
    const proyectosButton = document.querySelector('.caja_inicio h1:nth-child(2) span:nth-child(2)');
    const contactoButton = document.querySelector('.caja_inicio h1:nth-child(3) span:nth-child(2)');

    // Función para mostrar una sección y ocultar las demás
    function mostrarSeccion(seccion) {
        // Oculta la caja de inicio
        cajaInicio.style.display = 'none';

        // Oculta todas las secciones
        sobreMiSection.classList.remove('seccion-activa');
        proyectosSection.classList.remove('seccion-activa');
        contactoSection.classList.remove('seccion-activa');

        // Muestra la sección seleccionada
        seccion.classList.add('seccion-activa');
    }

    // Eventos de clic para cambiar de sección
    sobreMiButton.addEventListener('click', () => mostrarSeccion(sobreMiSection));
    proyectosButton.addEventListener('click', () => mostrarSeccion(proyectosSection));
    contactoButton.addEventListener('click', () => mostrarSeccion(contactoSection));

    // Función para volver al inicio
    window.volverAlInicio = function() {
        // Muestra la caja de inicio
        cajaInicio.style.display = 'block';

        // Oculta todas las secciones
        sobreMiSection.classList.remove('seccion-activa');
        proyectosSection.classList.remove('seccion-activa');
        contactoSection.classList.remove('seccion-activa');
    };
});
