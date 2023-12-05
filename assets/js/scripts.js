let cityInputEl = document.getElementById('city-input');

let fetchButton = document.getElementById('fetch-btn')
// const APIKey = '48428fb78e045d81cb3a78148a22a8a9'

function getData() {
    let requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=austin&appid=48428fb78e045d81cb3a78148a22a8a9';
    // api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
    // api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
    let cityName = cityInputEl.value;
  
fetch (requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        // for (var i = 0; i < data.length; i++) {
            let date = document.createElement('p');
            let lowTemp = document.createElement('p');
            let highTemp = document.createElement('p');
            let description = document.createElement('p');
            date.textContent = data.city;
            lowTemp.textContent = data.main.temp_min;
            highTemp.textContent = data.main.temp_max;
            description.textContent = data.description;
            day1.append(date);
            day1.append(lowTemp);
            day1.append(highTemp);
            day1.append(description);
        // }
    })
}

fetchButton.addEventListener('click', getData);