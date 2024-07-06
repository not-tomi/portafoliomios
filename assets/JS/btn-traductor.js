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
    "Send": "Enviar",
};

// CREAMOS LA FUNCIÓN PARA CAMBIAR EL IDIOMA
function cambiarIdioma() {
    const elementos = document.querySelectorAll(".hache1, h1 span, h2, p, span, label, .Enviar, button");

    // Recorrer todos los elementos del documento HTML
    elementos.forEach((elemento) => {
        // Obtener el texto del elemento
        const textoOriginal = elemento.textContent.trim();
        // Obtener el texto traducido
        const nuevoTexto = traducciones[textoOriginal] || textoOriginal;
        // Cambiar el texto del elemento
        elemento.textContent = nuevoTexto;
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
