const convertBtn = document.getElementById("convertBtn");
const resultDiv = document.getElementById("result");

convertBtn.addEventListener("click", () => {
    const temperature = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;

    if (!isNaN(temperature)) {
        let convertedTemperature = "";

        if (unit === "celsius") {
            convertedTemperature = `${(temperature * 9/5) + 32}°F`;
        } else if (unit === "fahrenheit") {
            convertedTemperature = `${(temperature - 32) * 5/9}°C`;
        } else if (unit === "kelvin") {
            convertedTemperature = `${temperature + 273.15}K`;
        }

        resultDiv.textContent = `Converted Temperature: ${convertedTemperature}`;
    } else {
        resultDiv.textContent = "Please enter a valid number.";
    }
});
