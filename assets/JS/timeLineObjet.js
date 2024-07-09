document.addEventListener('DOMContentLoaded', function () {
    let steps = document.querySelector("#steps");
    let wizards = [
        {
            complete: false,
            number: "*",
            title: "Técnico en Procesos Quimicos",
            text:
                "Me gradué como Técnico Químico en E.E.S.T IV Antártida de Bahía Blanca, donde adquirí sólidos conocimientos sobre análisis en laboratorios, manejo de equipos y procesos productivos a nivel micro e industrial."    
        },
        {
            complete: false,
            number: "*",
            title: "Técnico Universitario en Programación",
            text:
            "Estoy a algunas materias de terminar la carrera de Técnico Universitario en Programación en la UTN, donde adquirí sólidos conocimientos sobre programación, lenguajes de programación, bases de datos, entre otros."
        },
        {
            complete: false,
            number: "*",
            title: "Freelancer",
            text:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat pariatur minima nemo? Facilis veniam reprehenderit quaerat aspernatur, quis voluptas voluptate."
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
