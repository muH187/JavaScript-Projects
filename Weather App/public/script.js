const apiKey = "e04bcba5588977a5d3d0cb9471698eed"

const weatherForm = document.querySelector(".weatherForm")
const cityInput = document.querySelector(".cityInput")

weatherForm.addEventListener('submit', async event => {
    event.preventDefault()

    const city = cityInput.value

    if(city) {
        try{
            const weatherData = await getWeatherData(city)
            displayWeatherInfo(weatherData)

        } catch(error) {
            console.error(error)
            displayError()
        }
    } else {
        displayError()
    }
})

async function getWeatherData(city) {
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    const response = await fetch(apiUrl)
    
    if(!response.ok) {
        throw new Error("Could not fetch weather data.")
    }

    return await response.json()
}

function displayWeatherInfo(data) {
    console.log(data)
    const {name: city, main: {feels_like, temp, humidity}, weather: [{description}], wind: {speed}, visibility} = data

    
    document.getElementById("displayCity").textContent = city;
    document.getElementById("displayTemp").textContent = (temp - 273.15).toFixed(0) + "°C";
    document.getElementById("displayHumidity").textContent = humidity;
    document.getElementById("displayFeels_like").textContent = (feels_like - 273.15).toFixed(0) + "°C";
    document.getElementById("displayWind").textContent = (speed * 3.6).toFixed(2) + " km/h";
    document.getElementById("displayDescription").textContent = description;
    document.getElementById("displayVisibility").textContent = `Visibility in ${city} is ` + (visibility / 1000) + "km"

    
}

function displayError() {
    console.log("There is an error. Please type proper city name!")
}