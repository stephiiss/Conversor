function conversor() {
    const celsiusInput = document.getElementById('celsius').value;
    const celsius = parseFloat(celsiusInput);

    if (isNaN(celsius)) {
        alert("Valor inválido")
        return; 
    }

    const fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
    document.getElementById('resultado').textContent = `${celsius}°C equivalem a ${fahrenheit.toFixed(2)}°F`;
}
