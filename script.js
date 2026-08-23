document.addEventListener("DOMContentLoaded", function () {

    /* =================================
       CONTRASEÑA
    ================================= */

    const passwordCorrecta = "23082025";

    const login = document.getElementById("login");
    const passwordInput = document.getElementById("password");
    const entrarBtn = document.getElementById("entrarBtn");
    const error = document.getElementById("error");


    entrarBtn.addEventListener("click", function () {

        const password = passwordInput.value.trim();

        if (password === passwordCorrecta) {

            error.textContent = "Sabía que eras tú. ♡";

            setTimeout(function () {

                login.style.display = "none";

            }, 700);

        } else {

            error.textContent =
                "Mmm... esa no es, Mochi 😭❤️";

            passwordInput.value = "";
            passwordInput.focus();

        }

    });


    passwordInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            entrarBtn.click();

        }

    });



    /* =================================
       BOTÓN ABRIR
    ================================= */

    const abrirBtn =
        document.getElementById("abrirBtn");

    const inicio =
        document.getElementById("inicio");

    const contenido =
        document.getElementById("contenido");


    abrirBtn.addEventListener("click", function () {

        console.log("BOTÓN ABRIR FUNCIONANDO");

        inicio.style.display = "none";

        contenido.classList.remove("oculto");

        contenido.style.display = "block";

        window.scrollTo(0, 0);

    });



    /* =================================
       MÚSICA
    ================================= */

    const musica =
        document.getElementById("musica");

    const musicaBtn =
        document.getElementById("musicaBtn");


    musicaBtn.addEventListener("click", function () {

        if (musica.paused) {

            musica.play()
                .then(function () {

                    musicaBtn.textContent = "♫";

                })
                .catch(function () {

                    console.log(
                        "No se pudo reproducir la música"
                    );

                });

        } else {

            musica.pause();

            musicaBtn.textContent = "🔇";

        }

    });



    /* =================================
       CONTADOR
    ================================= */

    const fechaInicio =
        new Date("2025-08-23T00:00:00");


    function actualizarContador() {

        const ahora = new Date();

        const diferencia =
            ahora - fechaInicio;


        const dias = Math.floor(
            diferencia /
            (1000 * 60 * 60 * 24)
        );


        const horas = Math.floor(
            (diferencia /
            (1000 * 60 * 60)) % 24
        );


        const minutos = Math.floor(
            (diferencia /
            (1000 * 60)) % 60
        );


        const segundos = Math.floor(
            (diferencia /
            1000) % 60
        );


        document.getElementById("dias").textContent =
            dias;

        document.getElementById("horas").textContent =
            String(horas).padStart(2, "0");

        document.getElementById("minutos").textContent =
            String(minutos).padStart(2, "0");

        document.getElementById("segundos").textContent =
            String(segundos).padStart(2, "0");

    }


    actualizarContador();

    setInterval(
        actualizarContador,
        1000
    );



    /* =================================
       CORAZONES
    ================================= */

    const heartsContainer =
        document.querySelector(".hearts");


    function crearCorazon() {

        const heart =
            document.createElement("div");

        heart.classList.add("heart");

        const simbolos =
            ["♡", "♥", "✦", "♡"];

        heart.textContent =
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


    setInterval(
        crearCorazon,
        700
    );

});
