// Declaración variables
let balanceDB = 100_000;

const balanceEl = document.getElementById("balance");
balanceEl.innerText = balanceDB.toLocaleString("es-CL");

const transacciones = [
    { id: 1, glosa: "Compra en línea", monto: 5000, ingreso: false },
    { id: 2, glosa: "Depósito", monto: 100000, ingreso: true },
    { id: 3, glosa: "Transferencia recibida", monto: 30000, ingreso: true },
    { id: 4, glosa: "Compra en Mercado Libre", monto: 26000, ingreso: false }
];


// Capturamos el cuerpo de la tabla 
const cuerpoTablaTransacciones = document.getElementById("cuerpoTablaTransacciones");

for (const transaccion of transacciones) {

    // Crear fila para cada transacción
    const trElement = document.createElement("tr");

    let montoString = transaccion.monto.toLocaleString("es-CL");
    let signo = transaccion.ingreso ? "+" : "-";

    // Agregar contenido tablas
    trElement.innerHTML = `
        <td>${transaccion.glosa}</td>
        <td class="text-end fw-bold">${signo} $ ${montoString}</td>
    `;

    // Asignar color dependiendo si es ingreso o no
    if (transaccion.ingreso) {

        trElement.classList.add("table-success");
    } else {

        trElement.classList.add("table-danger");
    }

    cuerpoTablaTransacciones.appendChild(trElement);
};