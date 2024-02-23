function convertirTemperatura() {
    let temperaturaCelsius;
    do {
        var entradaUsuario = prompt("Ingrese la temperatura en grados Celsius:");
        temperaturaCelsius = parseFloat(entradaUsuario);

        if (isNaN(temperaturaCelsius)) {
            console.error("Error: Por favor, ingrese un número válido.");
        }
    } while (isNaN(temperaturaCelsius));

    let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
    let temperaturaKelvin = temperaturaCelsius + 273.15;

    console.log("Grados Kelvin: " + temperaturaKelvin.toFixed(2));
    console.log("Grados Fahrenheit: " + temperaturaFahrenheit.toFixed(2));
}

convertirTemperatura();

