let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
let numero3 = parseFloat(prompt("Ingrese el tercer número:"));

var numMayor, numCentro, numMenor;

if (numero1 >= numero2 && numero1 >= numero3) {
    numMayor = numero1;
    if (numero2 >= numero3) {
        numCentro = numero2;
        numMenor = numero3;
    } else {
        numCentro = numero3;
        numMenor = numero2;
    }
} else if (numero2 >= numero1 && numero2 >= numero3) {
    numMayor = numero2;
    if (numero1 >= numero3) {
        numCentro = numero1;
        numMenor = numero3;
    } else {
        numCentro = numero3;
        numMenor = numero1;
    }
} else {
    numMayor = numero3;
    if (numero1 >= numero2) {
        numCentro = numero1;
        numMenor = numero2;
    } else {
        numCentro = numero2;
        numMenor = numero1;
    }
}

console.log("Ordenados de mayor a menor: " + numMayor + ", " + numCentro + ", " + numMenor);
console.log("Ordenados de menor a mayor: " + numMenor + ", " + numCentro + ", " + numMayor);

if (numero1 === numero2 && numero1 === numero3) {
    console.log("Los números son iguales.");
} else {
    console.log("Los números no son iguales.");
}
