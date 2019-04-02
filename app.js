const celciusInput = document.querySelector('#celcius');
const fahrenheitInput = document.querySelector('#fahrenheit');
const kelvinInput = document.querySelector('#kelvin');

function roundNum(num){
    return Math.round(num * 100)/100;
}

function convertCelcius(){
    const celcTemp = parseFloat(celciusInput.value);
    const fahrTemp = (celcTemp * 9/5) + 32;
    const kelvTemp = celcTemp + 273.15;

    fahrenheitInput.value = roundNum(fahrTemp);
    kelvinInput.value = roundNum(kelvTemp);
}

function convertFahrenheit(){
    const fahrTemp = parseFloat(fahrenheitInput.value);
    const celcTemp = (fahrTemp - 32) * 5/9;
    const kelvTemp = (fahrTemp - 32) * 5/9 + 273.15;

    celciusInput.value = roundNum(celcTemp);
    kelvinInput.value = roundNum(kelvTemp);
}

function convertKelvin(){
    const kelvTemp = parseFloat(kelvinInput.value);
    const celcTemp = kelvTemp - 273.15;
    const fahrTemp = (kelvTemp - 273.15) * 9/5 + 32;

    celciusInput.value = roundNum(celcTemp);
    fahrenheitInput.value = roundNum(fahrTemp);
}

celciusInput.addEventListener('input', convertCelcius);
fahrenheitInput.addEventListener('input', convertFahrenheit);
kelvinInput.addEventListener('input', convertKelvin);