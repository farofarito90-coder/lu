document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // BOTÓN ABRIR
    // =========================

    const abrirBtn = document.getElementById("abrirBtn");
    const inicio = document.getElementById("inicio");
    const contenido = document.getElementById("contenido");

    if (abrirBtn) {
        abrirBtn.addEventListener("click", () => {

            inicio.classList.add("ocultando");

            setTimeout(() => {
                inicio.style.display = "none";
                contenido.classList.remove("oculto");

                window.scrollTo({
                    top: 0,
                    behavior: "instant"
                });
            }, 800);

        });
    }


    // =========================
    // MÚSICA
    // =========================

    const musica = document.getElementById("musica");
    const musicaBtn = document.getElementById("musicaBtn");

    if (musica && musicaBtn) {

        musicaBtn.addEventListener("click", () => {

            if (musica.paused) {

                musica.play()
                    .then(() => {
                        musicaBtn.innerHTML = "♫";
                    })
                    .catch(() => {
                        musicaBtn.innerHTML = "🔇";
                    });

            } else {

                musica.pause();
                musicaBtn.innerHTML = "🔇";

            }

        });

    }


    // =========================
    // CONTADOR
    // =========================

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

        const diasElemento = document.getElementById("dias");
        const horasElemento = document.getElementById("horas");
        const minutosElemento = document.getElementById("minutos");
        const segundosElemento = document.getElementById("segundos");

        if (diasElemento) {
            diasElemento.textContent = dias;
        }

        if (horasElemento) {
            horasElemento.textContent =
                String(horas).padStart(2, "0");
        }

        if (minutosElemento) {
            minutosElemento.textContent =
                String(minutos).padStart(2, "0");
        }

        if (segundosElemento) {
            segundosElemento.textContent =
                String(segundos).padStart(2, "0");
        }

    }

    actualizarContador();

    setInterval(actualizarContador, 1000);


    // =========================
    // CORAZONES
    // =========================

    const heartsContainer =
        document.querySelector(".hearts");

    function crearCorazon() {

        if (!heartsContainer) {
            return;
        }

        const heart = document.createElement("div");

        heart.classList.add("heart");

        const simbolos = ["♡", "♥", "✦", "♡"];

        heart.innerHTML =
            simbolos[
                Math.floor(
                    Math.random() * simbolos.length
                )
            ];

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.fontSize =
            (Math.random() * 18 + 10) + "px";

        heart.style.animationDuration =
            (Math.random() * 5 + 6) + "s";

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 12000);

    }

    setInterval(crearCorazon, 700);


    // =========================
    // ANIMACIONES AL SCROLL
    // =========================

    const elementos = document.querySelectorAll(
        ".recuerdo, .foto, .carta"
    );

    const observer = new IntersectionObserver(
        (entradas) => {

            entradas.forEach((entrada) => {

                if (entrada.isIntersecting) {

                    entrada.target.style.opacity = "1";

                    entrada.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    elementos.forEach((elemento) => {

        elemento.style.opacity = "0";

        elemento.style.transform =
            "translateY(30px)";

        elemento.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";

        observer.observe(elemento);

    });

});
