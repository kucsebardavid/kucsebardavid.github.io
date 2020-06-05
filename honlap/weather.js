var temperatures = [10, 11, 12, 13, 14, 15, 16];

function weatherWidget () {
    const day = document.querySelector('#day').value;
    const temperatureDiv = document.querySelector('#temparature');
    temperatureDiv.innerHTML = temperatures[day] + 'Celsius';
}