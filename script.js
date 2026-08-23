document.addEventListener("DOMContentLoaded", function () {

    /* =================================
       MÚSICA
    ================================= */

    const musica = document.getElementById("musica");
    const musicaBtn = document.getElementById("musicaBtn");

    let musicaIniciada = false;

    function reproducirMusica() {

        if (!musica) return;

        musica.volume = 0.7;

        const promesa = musica.play();

        if (promesa !== undefined) {

            promesa
                .then(function () {

                    musicaIniciada = true;

                    if (musicaBtn) {
                        musicaBtn.textContent = "♫";
                    }

                })
                .catch(function () {

                    console.log("El navegador bloqueó el autoplay.");

                });
        }
    }


    /* 
       En celular el navegador necesita una interacción.
       Cualquier primer toque en la página intenta iniciar
       la música.
    */

    document.addEventListener(
        "touchstart",
        function iniciarMusica() {

            if (!musicaIniciada) {
                reproducirMusica();
            }

        },
        { once: true }
    );


    document.addEventListener(
        "click",
        function iniciarMusicaClick() {

            if (!musicaIniciada) {
                reproducirMusica();
            }

        },
        { once: true }
    );


    /* BOTÓN DE MÚSICA */

    if (musicaBtn) {

        musicaBtn.addEventListener("click", function (event) {

            event.stopPropagation();

            if (musica.paused) {

                musica.play()
                    .then(function () {

                        musicaIniciada = true;
                        musicaBtn.textContent = "♫";

                    })
                    .catch(function () {

                        console.log("No se pudo reproducir la música.");

                    });

            } else {

                musica.pause();

                musicaBtn.textContent = "🔇";

            }

        });

    }


    /* =================================
       CONTADOR
    ================================= */

    /*
       23 de agosto de 2025
       00:00:00
    */

    const fechaInicio = new Date(
        2025,
        7,
        23,
        0,
        0,
        0
    );


    function actualizarContador() {

        const ahora = new Date();

        let diferencia = ahora.getTime() - fechaInicio.getTime();


        if (diferencia < 0) {
            diferencia = 0;
        }


        const segundo = 1000;
        const minuto = segundo * 60;
        const hora = minuto * 60;
        const dia = hora * 24;


        const dias = Math.floor(diferencia / dia);

        const horas = Math.floor(
            (diferencia % dia) / hora
        );

        const minutos = Math.floor(
            (diferencia % hora) / minuto
        );

        const segundos = Math.floor(
            (diferencia % minuto) / segundo
        );


        const elementoDias =
            document.getElementById("dias");

        const elementoHoras =
            document.getElementById("horas");

        const elementoMinutos =
            document.getElementById("minutos");

        const elementoSegundos =
            document.getElementById("segundos");


        if (elementoDias) {
            elementoDias.textContent = dias;
        }

        if (elementoHoras) {
            elementoHoras.textContent =
                String(horas).padStart(2, "0");
        }

        if (elementoMinutos) {
            elementoMinutos.textContent =
                String(minutos).padStart(2, "0");
        }

        if (elementoSegundos) {
            elementoSegundos.textContent =
                String(segundos).padStart(2, "0");
        }

    }


    actualizarContador();

    setInterval(actualizarContador, 1000);


    /* =================================
       CORAZONES
    ================================= */

    const heartsContainer =
        document.querySelector(".hearts");


    function crearCorazon() {

        if (!heartsContainer) return;


        const heart =
            document.createElement("div");


        heart.className = "heart";


        const simbolos =
            ["♡", "♥", "✦", "♡"];


        heart.textContent =
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


        setTimeout(function () {

            heart.remove();

        }, 12000);

    }


    setInterval(crearCorazon, 700);


    /* =================================
       ANIMACIONES AL HACER SCROLL
    ================================= */

    const elementos =
        document.querySelectorAll(
            ".recuerdo, .foto, .carta"
        );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                function (entradas) {

                    entradas.forEach(
                        function (entrada) {

                            if (entrada.isIntersecting) {

                                entrada.target.classList.add(
                                    "visible"
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.1
                }
            );


        elementos.forEach(function (elemento) {

            observer.observe(elemento);

        });

    } else {

        elementos.forEach(function (elemento) {

            elemento.classList.add("visible");

        });

    }

});
