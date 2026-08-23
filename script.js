document.addEventListener("DOMContentLoaded", function () {

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

            error.textContent = "Mmm... esa no es, Mochi 😭❤️";

            input.value = "";

        }

    });

});
