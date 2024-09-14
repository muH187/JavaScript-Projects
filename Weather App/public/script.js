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
    const {name: city, main: {temp, humidity}, weather: [{description, id}]} = data

    const displayCity = document.getElementById("displayCity")


    displayCity.textContent = city
    
}

function displayError() {
    console.log("There is an error. Please type proper city name!")
}