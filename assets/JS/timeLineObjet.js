document.addEventListener('DOMContentLoaded', function () {
    let steps = document.querySelector("#steps");
    let wizards = [
        {
            complete: false,
            number: "1°",
            title: "Técnico en Procesos Quimicos",
            text:
                "Me gradué como Técnico Químico en E.E.S.T IV Antártida de Bahía Blanca, donde adquirí sólidos conocimientos sobre análisis en laboratorios, manejo de equipos y procesos productivos a nivel micro e industrial."    
        },
        {
            complete: false,
            number: "2°",
            title: "Técnico Universitario en Programación",
            text:
            "Estoy a algunas materias de terminar la carrera de Técnico Universitario en Programación en la UTN, donde adquirí sólidos conocimientos sobre programación, lenguajes de programación, bases de datos, entre otros."
        },
        {
            complete: false,
            number: "3°",
            title: "Freelancer",
            text:
                    "Participe de un proyecto de una aplicacion web para un consultorio médico, donde con ayuda gpt se lograba mas rapido un seguimiendo a los pacientes. Me encargue de optimizar funciones, mejorar aspectos visuales, resolver algunos bugs visuales."
        },
    ];

    steps.innerHTML = wizards
        .map(function (wizard) {
            return (
                `<div class='step'>` +
                `<div class='number ${wizard.complete ? 'completed' : ''}'>` +
                (wizard.complete ? tickIcon : wizard.number) +
                `</div>` +
                `<div class='info'>` +
                `<p class='title'>${wizard.title}</p>` +
                `<p class='text'>${wizard.text}</p>` +
                "</div>" +
                "</div>"
            );
        })
        .join("");
});
