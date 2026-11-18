const costoEnvio = 500;
let subtotal = 0;
let cantidad = 0;
let seguirComprando = true;

while (seguirComprando) {
    const entrada = prompt('Ingresá un precio o escribí "salir" para terminar.');

    if (entrada === null || entrada.trim().toLowerCase() === "salir") {
        seguirComprando = false;
    } else {
        const precio = Number(entrada.replace(",", "."));

        if (Number.isFinite(precio) && precio > 0) {
            subtotal += precio;
            cantidad++;
        } else {
            alert("Ingresá un precio mayor que cero.");
        }
    }
}

let resumen = "No cargaste ningún producto.";

if (cantidad > 0) {
    const total = subtotal + costoEnvio;
    resumen = "Productos: " + cantidad +
        "\nSubtotal: $" + subtotal.toFixed(2) +
        "\nEnvío: $" + costoEnvio +
        "\nTotal: $" + total.toFixed(2);
}

alert(resumen);
console.log(resumen);