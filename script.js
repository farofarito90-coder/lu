document.addEventListener("DOMContentLoaded", function () {

    const passwordCorrecta = "23082025";

    const boton = document.getElementById("entrarBtn");
    const input = document.getElementById("password");
    const error = document.getElementById("error");
    const login = document.getElementById("login");

    console.log("SCRIPT CARGADO");

    boton.addEventListener("click", function () {

        console.log("BOTON PRESIONADO");

        if (input.value === passwordCorrecta) {

            error.textContent = "Sabía que eras tú. ♡";
            error.style.color = "green";

            setTimeout(function () {
                login.style.display = "none";
            }, 1000);

        } else {

            error.textContent = "Contraseña incorrecta 😭";
            error.style.color = "red";

        }

    });

});

