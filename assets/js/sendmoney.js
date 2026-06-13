
let balanceDB = 100_000;

// Tu lista de contactos original (la base de datos simulada)
const contactos = [
    {
        id: 1,
        nombre: "Juan Pérez",
        cbu: "123456789",
        alias: "Juanito",
        banco: "ABC Bank",
    },
    {
        id: 2,
        nombre: "Cosme Fulanito",
        cbu: "987654321",
        alias: "Cosmito",
        banco: "XYZ Bank",
    },
];

// Capturamos elementos fijos de la pantalla
const balanceEl = document.getElementById("balance");
const contactoEl = document.getElementById("contacto"); // El buscador
const formTransferencia = document.getElementById("formTransferencia");
const montoEnviarInput = document.getElementById("montoEnviar");

// Capturamos elementos del modal de nuevo contacto
const formNuevoContacto = document.getElementById("formNuevoContacto");
const nuevoNombre = document.getElementById("nuevoNombre");
const nuevoCbu = document.getElementById("nuevoCbu");
const nuevoAlias = document.getElementById("nuevoAlias");
const nuevoBanco = document.getElementById("nuevoBanco");

// Mostramos el balance inicial
balanceEl.innerText = balanceDB.toLocaleString("es-CL");


//Dibujar contactos en la lista
function dibujarContactos(listaContactos) {
    let elementosLista = "";

    for (const contacto of listaContactos) {
        let { id, nombre, cbu, alias, banco } = contacto;

        elementosLista += `
        <li class="list-group-item">
            <input class="form-check-input me-1" type="radio" name="contacto" value="${nombre}" id="contacto${id}">
            <label class="form-check-label" for="contacto${id}">
            ${nombre}, CBU: ${cbu}, Alias: ${alias}, Banco: ${banco}
            </label>
        </li>
    `;
    }

    const listaContactosEl = document.getElementById("listaContactos");
    listaContactosEl.innerHTML = elementosLista;
}

// Función inicial para arrancar la app
function main() {
    dibujarContactos(contactos);
}
main();


//Buscador contactos
contactoEl.addEventListener("input", function (event) {
    let textoContacto = contactoEl.value.toLowerCase().trim();

    const contactosFiltrados = contactos.filter(contacto => {
        let { nombre, alias, cbu, banco } = contacto;

        nombre = nombre.toLowerCase();
        alias = alias.toLowerCase();
        banco = banco.toLowerCase();

        let reglaNombre = nombre.includes(textoContacto);
        let reglaAlias = alias.includes(textoContacto);
        let reghaCbu = cbu.includes(textoContacto);
        let reglaBanco = banco.includes(textoContacto);

        if (reglaNombre || reglaAlias || reghaCbu || reglaBanco) {
            return true;
        } else {
            return false;
        }
    });

    // Se envia a coleccion
    dibujarContactos(contactosFiltrados);
});


//Agregar nuevo contacto
formNuevoContacto.addEventListener("submit", function (event) {
    event.preventDefault();

    // 1. Creamos el nuevo objeto de contacto con los datos del modal
    const nuevoContacto = {
        id: contactos.length + 1, // Le genera un ID automático correlativo (3, 4, 5...)
        nombre: nuevoNombre.value.trim(),
        cbu: nuevoCbu.value.trim(),
        alias: nuevoAlias.value.trim(),
        banco: nuevoBanco.value.trim()
    };

    contactos.push(nuevoContacto);

    // Volver a cargar lista actualizada
    dibujarContactos(contactos);

    alert(`¡Contacto "${nuevoContacto.nombre}" agregado con éxito!`);
    formNuevoContacto.reset();

    // crear formulario
    const modalElement = document.getElementById('formulariolContacto');
    const modalBootstrap = bootstrap.Modal.getInstance(modalElement);
    modalBootstrap.hide();
});


//Restar saldo 
formTransferencia.addEventListener("submit", function (event) {
    event.preventDefault();

    const montoATransferir = parseInt(montoEnviarInput.value);

    // Buscar el boton seleccionado
    const contactoSeleccionado = document.querySelector('input[name="contacto"]:checked');

    if (!contactoSeleccionado) {
        alert("Por favor, selecciona un contacto de la lista.");
        return;
    }

    if (montoATransferir > balanceDB) {
        alert("¡Error! Fondos insuficientes.");
    } else if (montoATransferir <= 0 || isNaN(montoATransferir)) {
        alert("Por favor, ingresa un monto válido.");
    } else {
        balanceDB -= montoATransferir;
        balanceEl.innerText = balanceDB.toLocaleString("es-CL");

        alert(`¡Transferencia exitosa!\nSe enviaron $${montoATransferir.toLocaleString("es-CL")} a ${contactoSeleccionado.value}.`);
        montoEnviarInput.value = "";
    }
});