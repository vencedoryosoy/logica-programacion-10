function calcularFactorial() {
    let numeroIngresado;
    do {
        let entradaUsuario = prompt("Ingrese un número para calcular su factorial:");
        numeroIngresado = parseFloat(entradaUsuario);

        if (isNaN(numeroIngresado) || !Number.isInteger(numeroIngresado) || numeroIngresado < 0) {
            console.error("Error: Por favor, ingrese un número entero no negativo válido.");
        }
    } while (isNaN(numeroIngresado) || !Number.isInteger(numeroIngresado) || numeroIngresado < 0);

    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }

    let resultadoFactorial = factorial(numeroIngresado);

    console.log("El factorial de " + numeroIngresado + " es: " + resultadoFactorial);
}

calcularFactorial();