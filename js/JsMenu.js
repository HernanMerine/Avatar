document.addEventListener("DOMContentLoaded", function () {
    const personajesContainer = document.querySelector(".Personajes-container");
    const personajesContent = document.querySelector(".Personajes-content");

    personajesContainer.addEventListener("click", function (event) {
        event.stopPropagation();
        if (personajesContent.style.display === "none") {
            personajesContent.style.display = "block";
            document.querySelector('.arrow').textContent = '▼'; // Cambia la flecha a abajo
        } else {
            personajesContent.style.display = "none";
            document.querySelector('.arrow').textContent = '▶'; // Cambia la flecha a derecha
        }
    });

    document.addEventListener("click", function () {
        personajesContent.style.display = "none";
        document.querySelector('.arrow').textContent = '▶'; // Cambia la flecha a derecha
    });

    personajesContent.addEventListener("click", function (event) {
        event.stopPropagation();
    });
});
