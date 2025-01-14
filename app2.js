function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;
  }
  
  function searchCity(city) {
    let apiKey = "b2a5adcct04b33178913oc335f405433";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(refreshWeather);
  }
  
  function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
  
    searchCity(searchInput.value);
  }
  function refreshWeather(response) {
    let temperatureElement = document.querySelector(".weather-app-temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind-speed");
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);
    let iconElement = document.querySelector("#icon");
  
    cityElement.innerHTML = response.data.city;
    timeElement.innerHTML = formatDate(date);
    temperatureElement.innerHTML = Math.round(temperature);
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
  
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;

    getForecast(response.data.city);
    
  }
  
  function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
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
  
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    return `${day} ${hours}:${minutes}`;
  }
  
  function searchCity(city) {
    let apiKey = "b2a5adcct04b33178913oc335f405433";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(refreshWeather);
  }
  
  function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
  
    searchCity(searchInput.value);
  }

  function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[date.getDay()];
  }

  function getForecast(city){
    let apiKey = "b2a5adcct04b33178913oc335f405433";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios(apiUrl).then(displayForcast);
  }

  function displayForecast(response){
    let forecastHtml = "";

    response.data.daily.forEach(function (day,index){
    if (index < 5) {
      forecastHtml =
        forecastHtml +
        `
      <div class = "
    }
  }
  
  let searchFormElement = document.querySelector(".search-form");
  searchFormElement.addEventListener("submit", handleSearchSubmit);
  
  searchCity("Paris");