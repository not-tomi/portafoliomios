let idiomaActual = "es"; // Variable para almacenar el idioma actual

// CREAMOS EL OBJETO TRADUCCIONES
const traducciones = {
    "Hola": "Hello",
    "Hello": "Hola",
    "Sobre mi": "About",
    "About": "Sobre mi",
    "Soy": "I'm",
    "I'm": "Soy",
    "Contacto": "Contact",
    "Proyectos": "Projects",
    "Projects": "Proyectos",
    "Contact": "Contacto",
    "Nombre:": "Name:",
    "Email:": "Email:",
    "Volver": "Return",
    "Return": "Volver",
    "Mensaje:": "Message:",
    "Enviar": "Send",
    "Send:": "Enviar:",
    "Message:": "Mensaje:",
    "Name:": "Nombre:",
    "First Name": "Nombre:",
    "Surname": "Apellido:",
    "Email": "Correo electrónico:",
    "Phone": "Teléfono:",
    "Message": "Mensaje:",
    "Submit": "Enviar",
};

// CREAMOS LA FUNCIÓN PARA CAMBIAR EL IDIOMA
function cambiarIdioma() {
    const elementos = document.querySelectorAll(".caja_inicio h1 span, #titleAbout, #aboutText, .volver-btn, .custom-form-container label, .custom-form-container input[type='submit'], #contacto h1, .redes-sociales a");

    // Recorrer todos los elementos del documento HTML
    elementos.forEach((elemento) => {
        // Obtener el texto del elemento
        let textoOriginal = elemento.textContent.trim();

        // Manejar el texto según el tipo de elemento
        if (elemento.tagName === 'INPUT') {
            textoOriginal = elemento.getAttribute('placeholder').trim();
        } else if (elemento.tagName === 'A') {
            textoOriginal = elemento.getAttribute('aria-label').trim();
        }

        // Obtener el texto traducido
        const nuevoTexto = traducciones[textoOriginal] || textoOriginal;

        // Cambiar el texto del elemento
        if (elemento.tagName === 'A') {
            elemento.setAttribute('aria-label', nuevoTexto);
        } else if (elemento.tagName === 'INPUT') {
            elemento.setAttribute('placeholder', nuevoTexto);
        } else {
            elemento.textContent = nuevoTexto;
        }
    });

    // Cambiar el idioma actual después de traducir
    idiomaActual = idiomaActual === "es" ? "en" : "es";
}

// Llamar a la función cambiarIdioma() al iniciar y después de cada traducción
function inicializarIdioma() {
    const selector = document.getElementById('idioma');
    selector.value = idiomaActual;  // Establecer el valor del selector de idioma
    if (idiomaActual === "en") {
        cambiarIdioma();
    }
    selector.addEventListener('change', cambiarIdioma);
}

window.onload = inicializarIdioma;
