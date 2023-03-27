// time
let time = new Date();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let today = days[time.getDay()];
let hours = time.getHours();
let mins = time.getMinutes();

let h2 = document.querySelector("h2");
h2.innerHTML = `${today} ${hours}:${mins}`;

//Add a search engine, when searching for a city (i.e. Paris), display the city name on the page after the user submits the form.

function showSearch(event) {
  event.preventDefault();
  let cityName = document.querySelector("h1");
  cityName.innerHTML = `${city.value}`;
  let apiKey = "caa883a4a60d93878755b08a933f74ea";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}
function showTemp(response) {
  let maintemp = document.querySelector("#temp");
  maintemp.innerHTML = `${response.data.main.temp}`;
}
let search = document.querySelector("#search-form");
search.addEventListener("submit", showSearch, showTemp);
let city = document.querySelector("#input-search-city");

function currentPositionTemp(position) {
  let lon = position.coords.longitude;
  let lat = position.coords.latitude;
  let apiKeylocation = "57b2c40fdae71a6ba41d72685e3226e2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKeylocation}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}
let currentPosition = document.querySelector("#current-location");
currentPosition.addEventListener(
  "click",
  navigator.geolocation.getCurrentPosition(currentPositionTemp)
);

//Display a fake temperature (i.e 17) in Celsius and add a link to convert it to Fahrenheit.
///When clicking on it, it should convert the temperature to Fahrenheit. When clicking on Celsius, it should convert it back to Celsius.
//let CelsiusTemp = 21;
//let FahrenheitTemp = Math.round(CelsiusTemp * 1.8 + 32);

//function changeUnitC(event) {event.preventDefault();let tempC = document.querySelector("#temp"); tempC.innerHTML = `${CelsiusTemp}`;}
//let celsius = document.querySelector("#c-unit");
//celsius.addEventListener("click", changeUnitC);

//function changeUnitF(event) { event.preventDefault(); let tempF = document.querySelector("#temp");tempF.innerHTML = `${FahrenheitTemp}`;}
//let Fahrenheit = document.querySelector("#f-unit");
//Fahrenheit.addEventListener("click", changeUnitF);
