import { getJson } from "./utility.js"

const temperatureElement = document.querySelector("#temperature")
const windElement = document.querySelector("#wind")
const descriptionElement = document.querySelector("#description")

async function updateWeatherData() {
  const url = "https://goweather.herokuapp.com/weather/bergen"
  const data = await getJson(url)

  temperatureElement.textContent = data.temperature
  windElement.textContent = data.wind
  descriptionElement.textContent = data.description
}

updateWeatherData()

const movieUrl = "https://ghibliapi.vercel.app/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49"
const movieData = await getJson(movieUrl)
console.log(movieData)
