function allowOnlyNumbers(input) {

    let value = input.value;

    // Allow only digits and one decimal point
    value = value.replace(/[^0-9.-]/g, "");

    // Allow minus only at beginning
    if (value.indexOf("-") > 0) {
        value = value.replace(/-/g, "");
    }

    // Allow only one decimal point
    let parts = value.split(".");

    if (parts.length > 2) {
        value = parts[0] + "." + parts.slice(1).join("");
    }

    input.value = value;
}


function convertTemperature() {

    let input = document.getElementById("celsius").value.trim();
    let result = document.getElementById("result");

    if (input === "") {
        result.innerHTML = "Please enter a temperature.";
        return;
    }

    // Check valid number format
    if (!/^-?\d+(\.\d+)?$/.test(input)) {
        result.innerHTML = "Please enter a valid number.";
        return;
    }

    let celsius = Number(input);

    // Range validation
    if (celsius < -50 || celsius > 150) {
        result.innerHTML = "Temperature must be between -50°C and 150°C.";
        return;
    }

    // Celsius to Fahrenheit formula
    let fahrenheit = (celsius * 9 / 5) + 32;

    result.innerHTML =
        celsius + "°C = " + fahrenheit.toFixed(2) + "°F";
}