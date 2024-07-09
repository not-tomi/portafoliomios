document.addEventListener('DOMContentLoaded', function () {
    let projectsContainer = document.querySelector("#projects"); // Cambia a projectsContainer
    let projectList = [
        {
            imageUrl: "./assets/IMG/project1.jpg",
            title: "Proyecto 1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lore",
            technologies: ["HTML", "CSS", "JavaScript"]
        },
        {
            imageUrl: "./assets/IMG/project1.jpg",
            title: "Proyecto 2",
            description: "Breve descripción del Proyecto 2.",
            technologies: ["HTML", "CSS", "JavaScript"]
        },
        {
            imageUrl: "./assets/IMG/project1.jpg",
            title: "Proyecto 3",
            description: "Breve descripción del Proyecto 3.",
            technologies: ["HTML", "CSS", "JavaScript", "React"]
        }
    ];

    projectsContainer.innerHTML = projectList
        .map(function (project) {
            return (
                `<div class='project-card'>` +
                `<p class='project-title'>${project.title}</p>` +
                `<img src='${project.imageUrl}' alt='${project.title}' class='project-image'>` +
                `<div class='project-info'>` +
                `<p class='project-description'>${project.description}</p>` +
                `<ul class='technologies-list'>` +
                project.technologies.map(tech => `<li>${tech}</li>`).join("") +
                `</ul>` +
                `</div>` +
                `</div>`
            );
        })
        .join("");
});
