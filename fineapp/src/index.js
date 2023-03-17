function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`;
  }
  
  function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
    return days[day];
  }

function displayTemperature(response){
    console.log(response.data.temperature.current)
    let temperatureElemnt=document.querySelector("#temperature")
    let cityElement=document.querySelector("#city")
    let descriptionElement=document.querySelector("#description")
    let humidityElement=document.querySelector("#humidity")
    let windElement=document.querySelector("#wind")
    let dateElement=document.querySelector("#date")
    let iconElement=document.querySelector("#icon")
    
    temperatureElemnt.innerHTML=Math.round(response.data.temperature.current);
    cityElement.innerHTML=response.data.city
    descriptionElement.innerHTML=response.data.condition.description
    humidityElement.innerHTML=response.data.temperature.humidity
    windElement.innerHTML=Math.round(response.data.wind.speed)
    dateElement.innerHTML= formatDate(response.data.time* 1000)

    celsiusTemperature=response.data.temperature.current

    iconElement.setAttribute("src",
    "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-night.png",
    )
    iconElement.setAttribute("alt", "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-night.png",)
}

function handleSubmit(event) {
    event.preventDefault();
    let cityInputElement = document.querySelector("#city-input");
    search=(cityInputElement.value);
  }

let city="kampala"
let apiKey="1ao5f3637673303d891284bf6td06560";
let apiUrl="https://api.shecodes.io/weather/v1/current?query=kampala&key=1ao5f3637673303d891284bf6td06560&units=metric"
  

let apiForecast="https://api.shecodes.io/weather/v1/forecast?=lodonlat=38.71667&lon=-9.13333&key=1ao5f3637673303d891284bf6td06560&units=metric"

console.log(apiUrl)
console.log(apiForecast)
axios.get(apiUrl).then(displayTemperature)

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

function displayfahrenheitTemperature(event){
  event.preventDefault()
  let fahrenheitTemperature=(celsiusTemperature * 9)/ 5 + 32;
  alert(fahrenheitTemperature)
  let temperatureElemnt=document.querySelector("#temperature")
  temperatureElemnt.innerHTML=Math.round(fahrenheitTemperature)
}
function displaycelsuisTemperature(event){
  event.preventDefault()
  let celsiusElement=document.querySelector("#temperature")
  celsiusElement.innerHTML=celsiusTemperature;
}

let celsiusTemperature=null;

let fahrenheitlink=document.querySelector("#fahrenheit-link");
fahrenheitlink.addEventListener("click", displayfahrenheitTemperature)

let celsiuslink=document.querySelector("#celsius-link")
celsiusTemperature.addEventListener("click", displaycelsuisTemperature)


search=("city")