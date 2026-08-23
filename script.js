document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       MÚSICA
    ========================= */

    const musica = document.getElementById("musica");
    const musicaBtn = document.getElementById("musicaBtn");

    musicaBtn.addEventListener("click", function () {

        if (musica.paused) {

            musica.play();

            musicaBtn.textContent = "♫";

        } else {

            musica.pause();

            musicaBtn.textContent = "🔇";

        }

    });


    /* =========================
       CONTADOR
    ========================= */

    const fechaInicio = new Date("2025-08-23T00:00:00");

    function actualizarContador() {

        const ahora = new Date();

        const diferencia = ahora - fechaInicio;

        const dias = Math.floor(
            diferencia / (1000 * 60 * 60 * 24)
        );

        const horas = Math.floor(
            (diferencia / (1000 * 60 * 60)) % 24
        );

        const minutos = Math.floor(
            (diferencia / (1000 * 60)) % 60
        );

        const segundos = Math.floor(
            (diferencia / 1000) % 60
        );

        document.getElementById("dias").textContent = dias;

        document.getElementById("horas").textContent =
            String(horas).padStart(2, "0");

        document.getElementById("minutos").textContent =
            String(minutos).padStart(2, "0");

        document.getElementById("segundos").textContent =
            String(segundos).padStart(2, "0");
    }

    actualizarContador();

    setInterval(actualizarContador, 1000);


    /* =========================
       CORAZONES
    ========================= */

    const heartsContainer =
        document.querySelector(".hearts");

    function crearCorazon() {

        const heart = document.createElement("div");

        heart.classList.add("heart");

        const simbolos = ["♡", "♥", "✦", "♡"];

        heart.textContent =
            simbolos[Math.floor(Math.random() * simbolos.length)];

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.fontSize =
            (Math.random() * 18 + 10) + "px";

        heart.style.animationDuration =
            (Math.random() * 5 + 6) + "s";

        heartsContainer.appendChild(heart);

        setTimeout(function () {
            heart.remove();
        }, 12000);
    }

    setInterval(crearCorazon, 700);


    /* =========================
       ANIMACIONES
    ========================= */

    const elementos =
        document.querySelectorAll(
            ".recuerdo, .foto, .carta"
        );

    const observer =
        new IntersectionObserver(function (entradas) {

            entradas.forEach(function (entrada) {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("visible");

                }

            });

        }, {
            threshold: 0.15
        });


    elementos.forEach(function (elemento) {

        observer.observe(elemento);

    });

});
