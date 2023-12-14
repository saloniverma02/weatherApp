async function getWeather() {
    const apiKey = '57b5022c08591e1de6550133ac321a53'; // Replace with your OpenWeatherMap API key
    const cityInput = document.getElementById('cityInput').value;
    const weatherInfoDiv = document.getElementById('weatherInfo');

    if (cityInput === '') {
        alert('Please enter a city name');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === '404') {
            alert('City not found');
            return;
        }

        const weatherDescription = data.weather[0].description;
        const temperature = data.main.temp;

        weatherInfoDiv.innerHTML = `<p>${cityInput} Weather: ${weatherDescription}</p>
                                    <p>Temperature: ${temperature} °C</p>`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
