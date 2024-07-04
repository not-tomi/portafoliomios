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
    "Mensaje:": "Message:",
    "Enviar": "Send",
    "Send:": "Enviar:",
    "Message:": "Mensaje:",
    "Name:": "Nombre:",
    "Send": "Enviar",
    "¡Hola! Soy Tomás. Soy una persona multi-talentosa y estoy comenzando como desarrollador. Soy estudiante en la Universidad Tecnológica Nacional, estudiando tecnicatura en programacion. Me gradué en 2022 de la Escuela Técnica Número cuatro como Técnico en Procesos Químicos. Prefiero no definirme por el trabajo que hago actualmente, sino por el trabajo que aspiro a hacer. Las habilidades se pueden enseñar Prefiero seguir aprendiendo, desafiarme a mí mismo y crear experiencias laborales significativas y atractivas.": "Hi! I'm Tomás. I'm a multi-talented person and I'm starting out as a developer. I'm a student at the National Technological University, studying for a degree in Computer Engineering with a specialization in Programming Technology. I graduated in 2022 from Technical High School Number four as a Chemical Processes Technician. I prefer not to define myself by the work I currently do, but rather by the work I aspire to do. Skills can be taught; personality is inherent. I prefer to keep learning, challenge myself, and create meaningful and engaging work experiences.",
    "Hi! I'm Tomás. I'm a multi-talented person and I'm starting out as a developer. I'm a student at the National Technological University, studying for a degree in Computer Engineering with a specialization in Programming Technology. I graduated in 2022 from Technical High School Number four as a Chemical Processes Technician. I prefer not to define myself by the work I currently do, but rather by the work I aspire to do. Skills can be taught; personality is inherent. I prefer to keep learning, challenge myself, and create meaningful and engaging work experiences." : "¡Hola! Soy Tomás. Soy una persona multi-talentosa y estoy comenzando como desarrollador. Soy estudiante en la Universidad Tecnológica Nacional, estudiando tecnicatura en programacion. Me gradué en 2022 de la Escuela Técnica Número cuatro como Técnico en Procesos Químicos. Prefiero no definirme por el trabajo que hago actualmente, sino por el trabajo que aspiro a hacer. Las habilidades se pueden enseñar Prefiero seguir aprendiendo, desafiarme a mí mismo y crear experiencias laborales significativas y atractivas."
};

// CREAMOS LA FUNCIÓN PARA CAMBIAR EL IDIOMA
function cambiarIdioma() {
    const elementos = document.querySelectorAll(".hache1, h1 span, h2, p, span, label, .Enviar");

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
