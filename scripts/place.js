document.getElementById("lastModified").textContent = document.lastModified

const today = new Date();
document.getElementById("currentyear").textContent = today.getFullYear();
const currentyear = today.getFullYear();

let temperature = 4; // Celsius
let windSpeed = 5; // Km/h
let conditions = "Partly Cloudy";

function calculateWindChill(temperature, windSpeed) {
    if (temperature > 10) {
        let windChill = "N/A";
        console.error("Temperature must be less than 10 degrees Celsius to calculate wind chill.");
        return windChill = "N/A";
    }
    else if (windSpeed < 0) {
        console.error("Wind speed must be a positive number.");
        return;
    }
    else {
        const windChill = Math.round(13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16)));
        return windChill;
    }
}

let windChill = calculateWindChill(temperature, windSpeed);
document.getElementById("temperature").textContent = temperature + "°C";
document.getElementById("windSpeed").textContent = windSpeed + " Km/h";
document.getElementById("conditions").textContent = conditions;
document.getElementById("windChill").textContent = windChill + "°C";
