const apiKey = "e04bcba5588977a5d3d0cb9471698eed"
const weatherForm = document.querySelector(".weatherForm")
const cityInput = document.querySelector(".cityInput")
const details = document.getElementById("details")

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
    const {name: city, main: {feels_like, temp, humidity}, weather: [{description, id}], wind: {speed}} = data

    const displayCity = document.getElementById("displayCity")
    const displayTemp = document.getElementById("displayTemp")
    const displayHumidity = document.getElementById("displayHumidity")
    const displayFeels_like = document.getElementById("displayFeels_like")
    const displayWind = document.getElementById("displayWind")
    const displayDescription = document.getElementById("displayDescription")


    displayCity.textContent = city
    displayTemp.textContent = (temp - 273.15).toFixed(0) + "°C" 
    displayHumidity.textContent = humidity
    displayFeels_like.textContent = (feels_like - 273.15).toFixed(0) + "°C" 
    displayWind.textContent = (speed * 3.6).toFixed(2) + "km/h" 
    displayDescription.textContent = description   

    
}

function displayError() {
    console.log("There is an error. Please type proper city name!")
}