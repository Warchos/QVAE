console.log("JS conectado");

    /* Otra cosa q si esta terminada no como lo de arriba q es un proyecto de futuro*/

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("show");
    });