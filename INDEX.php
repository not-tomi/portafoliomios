<!DOCTYPE html>
<html lang="en">

<head>



    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/CSS/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/557bcf2f80.js" crossorigin="anonymous"></script>
    <script src="./assets/JS/popupfb.js"></script>


    <title>Tomás Peruilh</title>

</head>

<!-- Texto Del Inicio -->
<body>

    <div class="caja_inicio">

        <h1>

            <span id="sobreMiBtn" style="color: #8d8d8d;">Hola</span>
            <span class="mensajeOculto animacion-de-texto" style="color: #a4a4a4;">Sobre mi</span>

        </h1>

        <h1>

            <span id="proyectosBtn" style="color: #b6b6b6;">Soy</span>
            <span class="mensajeOculto animacion-de-texto" style="color: #b6b6b6;">Proyectos</span>

        </h1>

        <h1>

            <span id="contactoBtn" style="color: #a4a4a4;">Tom</span>
            <span class="mensajeOculto animacion-de-texto">Contacto</span>

        </h1>
        <h6 id="joke">Cargando chiste...</h6>
    </div>

    <script>
        function fetchChuckNorrisJoke() {
            // Realizar la solicitud a la API
            fetch('https://api.chucknorris.io/jokes/random')
                .then(response => response.json())
                .then(data => {
                    // Actualizar el contenido del elemento H1
                    document.getElementById('joke').innerText = data.value;
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }

        // Realizar la primera solicitud al cargar la página
        fetchChuckNorrisJoke();

        // Actualizar cada 20 segundos
        setInterval(fetchChuckNorrisJoke, 5000);
    </script>


    <!-- ABOUT / SOBRE MI -->


    <div id="sobreMi" class="seccion">
        <h2>Sobre mi</h2>
        <p>¡Hola! Soy Tomás. Soy una persona multi-talentosa y estoy comenzando como desarrollador. Soy estudiante en la Universidad Tecnológica Nacional, estudiando tecnicatura en programacion. Me gradué en 2022 de la Escuela Técnica Número cuatro como Técnico en Procesos Químicos. Prefiero no definirme por el trabajo que hago actualmente, sino por el trabajo que aspiro a hacer. Las habilidades se pueden enseñar Prefiero seguir aprendiendo, desafiarme a mí mismo y crear experiencias laborales significativas y atractivas.</p>
        <h3 class="volver-btn" onclick="volverAlInicio()">X</h3>
    </div>

    <!-- PROYECTOS -->

    <div id="proyectos" class="seccion">
        <h2 style="color: red;">Proyectos</h2>
        <h1 class="fuente-proyecto">Ardep</h1>
        <h1 class="fuente-proyecto">Chango Facil</h1>
        <h3 class="volver-btn" onclick="volverAlInicio()">X</h3>
    </div>

    <!-- CONTACTO -->

    <div id="contacto" class="seccion">
        <div class="contenedorFormulario">
            <h1 class="hache1">Contacto</h1>
            <div class="redes-sociales">
                <a href="" target="_blank"><i class="fab fa-linkedin"></i></a>
                <a href="" target="_blank"><i class="fab fa-github"></i></a>
                <a href=""><i class="far fa-envelope"></i></a>
            </div>
            <form action="php/subscripcion_usuario.php" method="post">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="Nombre" required>

                <label for="email">Email:</label>
                <input type="email" id="email" name="Email" required>

                <label for="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="Texto" rows="4" required></textarea>

                <button class="Enviar">Enviar</button>
            </form>
        </div>
        <h3 class="volver-btn" onclick="volverAlInicio()">X</h3>
    </div>

    <!-- BOTONES MARGEN IZQUIERDO -->

    <div class="contenedorboton boton-container">
        <button class="flappybird-btn boton" onclick="abrirPopupFlappyBird()">
            <img class="imgboton" src="./assets/IMG/pngegg(3).png" alt="">
        </button>
        <script src="./assets/JS/btn-traductor.js"></script>
        <button id="cambiarIdiomaBtn" onclick="cambiarIdioma()" class="traductor-btn boton"><img class="imgboton"
                src="./assets/IMG/traductor.png" alt=""></button>
    </div>
    <script src="./assets/JS/Home.js"></script>
</body>

</html>