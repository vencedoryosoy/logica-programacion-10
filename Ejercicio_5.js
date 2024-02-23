
function adivinarNumeroSecreto() {
    var numeroSecreto = Math.floor(Math.random() * 100) + 1;
    var numerosIngresados = [];
    function validarEntrada(entrada) {
        var numero = parseFloat(entrada);
        return !isNaN(numero) && Number.isInteger(numero) && numero >= 1 && numero <= 100;
    }
    do {
        var entradaUsuario = prompt("Intenta adivinar el número secreto (entre 1 y 100):");
        if (validarEntrada(entradaUsuario)) {
            var numeroIntento = parseInt(entradaUsuario);
            numerosIngresados.push(numeroIntento);
            if (numeroIntento === numeroSecreto) {
                console.log("¡Felicidades, adivinaste el número secreto!");
                console.log("Lista de números ingresados: " + numerosIngresados.join(", "));
                break; 
            } else {
                console.log("Ups, el número secreto es incorrecto, vuelve a intentarlo.");
            }
        } else {
            console.error("Error: Por favor, ingrese un número entero válido entre 1 y 100.");
        }
    } while (true);
}


adivinarNumeroSecreto();
