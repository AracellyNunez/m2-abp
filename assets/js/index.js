// Datos de ingreso del usuario 
const usuarioDB = {
    email: "abc123@skywallet.com",
    password: "Contraseña123"
};

//Capturamos los elementos que vamos a utilizar
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const errorAlert = document.getElementById("errorAlert");

loginForm.addEventListener("submit", function (event) {
    // Evitar que la página se actualice automaticamente
    event.preventDefault();

    const emailIngresado = emailInput.value;
    const passwordIngresada = passwordInput.value;

    // 4. Validamos si las credenciales coinciden con las de nuestra "base de datos"
    if (emailIngresado === usuarioDB.email && passwordIngresada === usuarioDB.password) {

        // Mensaje de éxito nativo antes de redirigir
        alert("¡Inicio de sesión exitoso! Bienvenido a Sky Wallet.");

        // Redirigimos al usuario a la página de inicio
        window.location.href = "./inicio.html";

    } else {
        // 5. Si fallan las credenciales, mostramos dinámicamente una alerta de Bootstrap
        errorAlert.innerHTML = `
            <div class="alert alert-danger text-center py-2" role="alert">
                Correo o contraseña incorrectos. Por favor, inténtalo de nuevo.
            </div>
        `;
    }
});