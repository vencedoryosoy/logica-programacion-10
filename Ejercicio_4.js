function generarFibonacci() {
    let numeroIngresado;
    do {
        let entradaUsuario = prompt("Ingrese un número para generar la serie de Fibonacci:");
        numeroIngresado = parseFloat(entradaUsuario);

        if (isNaN(numeroIngresado) || !Number.isInteger(numeroIngresado) || numeroIngresado < 0) {
            console.error("Error: Por favor, ingrese un número entero no negativo válido.");
        }
    } while (isNaN(numeroIngresado) || !Number.isInteger(numeroIngresado) || numeroIngresado < 0);

    function calcularFibonacci(n) {
        let serieFibonacci = [];
        for (let i = 0; i < n; i++) {
            if (i <= 1) {
                serieFibonacci.push(i);
            } else {
                serieFibonacci.push(serieFibonacci[i - 1] + serieFibonacci[i - 2]);
            }
        }
        return serieFibonacci;
    }

    let resultadoSerieFibonacci = calcularFibonacci(numeroIngresado);
    console.log(resultadoSerieFibonacci);
}

generarFibonacci();
