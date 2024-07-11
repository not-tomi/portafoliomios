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
    "Contact": "Contacto",
    "Proyectos": "Projects",
    "Projects": "Proyectos",
    "Nombre:": "Name:",
    "Name:": "Nombre:",
    "Email:": "Email:",
    "Volver": "Return",
    "Return": "Volver",
    "Mensaje:": "Message:",
    "Message:": "Mensaje:",
    "First Name": "Nombre:",
    "Nombre": "Name",
    "Surname": "Apellido:",
    "Apellido": "Surname",
    "Phone": "Teléfono:",
    "Teléfono": "Phone",
    "Enviar": "Submit",
    "Submit": "Enviar",
    "Técnico en Procesos Quimicos" : "Chemical Process Technician",
    "Chemical Process Technician" : "Técnico en Procesos Quimicos",
    "Técnico Universitario en Programación" : "Computer Science Technician",
    "Computer Science Technician" : "Técnico Universitario en Programación",
    "Freelancer" : "Freelancer",
    "My name is Tomás, my friends call me Tom. I may not have very creative friends, but I strive to be creative myself and improve day by day.": "Me llamo Tomás, mis amigos me dicen Tom, no tendré amigos muy creativos pero yo trato de serlo y mejorarlo día a día.",
    "Me llamo Tomás, mis amigos me dicen Tom, no tendré amigos muy creativos pero yo trato de serlo y mejorarlo día a día.": "My name is Tomás, my friends call me Tom. I may not have very creative friends, but I strive to be creative myself and improve day by day.",
    "Me gusta enseñar, doy clases particulares de matemática, química y programación a ingresantes de carreras universitarias y nivel secundario":"I enjoy teaching; I give private classes in mathematics, chemistry, and programming to university students and secondary school students.",
    "I enjoy teaching; I give private classes in mathematics, chemistry, and programming to university students and secondary school students.": "Me gusta enseñar, doy clases particulares de matemática, química y programación a ingresantes de carreras universitarias y nivel secundario",
    "I am an entrepreneurial and self-taught person. Currently, I am specializing in Backend development, though I am always willing to learn and adapt to new areas of work and technologies.":"Soy una persona emprendedora y autodidacta. Actualmente me estoy especializando en el desarrollo Backend, aunque estoy siempre dispuesto a aprender y adaptarme a nuevas áreas de trabajo y tecnologías.",
    "Soy una persona emprendedora y autodidacta. Actualmente me estoy especializando en el desarrollo Backend, aunque estoy siempre dispuesto a aprender y adaptarme a nuevas áreas de trabajo y tecnologías.": "I am an entrepreneurial and self-taught person. Currently, I am specializing in Backend development, though I am always willing to learn and adapt to new areas of work and technologies.",

}
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
