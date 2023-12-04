

let fetchButton = document.getElementById('fetch-btn')

function getWeather() {
    let requestUrl = "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}";

fetch(requestUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            let date = document.createElement('h3')
            let lowTemp = document.createElement('')
            let highTemp = document.createElement('')
            let currentTemp = document.createElement('')
            date.textContent = data[i].date
            lowTemp.textContent = data[i].lowTemp
            highTemp.textContent = data[i].highTemp
            currentTemp.textContent = data[i].currentTemp
            weatherContainer.append(date);
            weatherContainer.append(lowTemp);
            weatherContainer.append(highTemp);
            weatherContainer.append(currentTemp);
        }
    });
};

fetchButton.addEventListener('click', getWeather);