document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       CONTRASEÑA
    ========================= */

    const passwordCorrecta = "23082025";

    const boton = document.getElementById("entrarBtn");
    const input = document.getElementById("password");
    const error = document.getElementById("error");
    const login = document.getElementById("login");

    boton.addEventListener("click", function () {

        const clave = input.value.trim();

        if (clave === passwordCorrecta) {

            error.textContent = "Sabía que eras tú. ♡";

            setTimeout(function () {
                login.style.display = "none";
            }, 1000);

        } else {

            error.textContent =
                "Mmm... esa no es, Mochi 😭❤️";

            input.value = "";
            input.focus();
        }

    });


    /* =========================
   BOTÓN ABRIR
========================= */

function abrirPagina() {

    const inicio = document.getElementById("inicio");
    const contenido = document.getElementById("contenido");

    console.log("ABRIR FUNCIONANDO");

    inicio.style.display = "none";

    contenido.style.display = "block";

    contenido.classList.remove("oculto");

    window.scrollTo(0, 0);
}


    /* =========================
       MÚSICA
    ========================= */

    const musica = document.getElementById("musica");
    const musicaBtn = document.getElementById("musicaBtn");

    if (musica && musicaBtn) {

        musicaBtn.addEventListener("click", function () {

            if (musica.paused) {

                musica.play()
                    .then(function () {

                        musicaBtn.innerHTML = "♫";

                    })
                    .catch(function () {

                        musicaBtn.innerHTML = "🔇";

                    });

            } else {

                musica.pause();

                musicaBtn.innerHTML = "🔇";

            }

        });

    }


    /* =========================
       CONTADOR
    ========================= */

    const fechaInicio =
        new Date("2025-08-23T00:00:00");

    function actualizarContador() {

        const ahora = new Date();

        const diferencia =
            ahora - fechaInicio;

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

        const diasElemento =
            document.getElementById("dias");

        const horasElemento =
            document.getElementById("horas");

        const minutosElemento =
            document.getElementById("minutos");

        const segundosElemento =
            document.getElementById("segundos");


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


    /* =========================
       CORAZONES
    ========================= */

    const heartsContainer =
        document.querySelector(".hearts");

    if (heartsContainer) {

        function crearCorazon() {

            const heart =
                document.createElement("div");

            heart.classList.add("heart");

            const simbolos =
                ["♡", "♥", "✦", "♡"];

            heart.innerHTML =
                simbolos[
                    Math.floor(
                        Math.random() *
                        simbolos.length
                    )
                ];

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

    }


});
