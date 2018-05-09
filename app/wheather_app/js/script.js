const zachodniopomorskie = document.getElementById("zachodniopomorskie");
const swietokrzyskie = document.getElementById("swietokrzyskie");
const mazowieckie = document.getElementById("mazowieckie");
const warminskie = document.getElementById("warminsko");
const pomorskie = document.getElementById("pomorskie");
const podlaskie = document.getElementById("podlaskie");
const podkarpackie = document.getElementById("podkarpackie");
const opolskie = document.getElementById("opolskie");
const lubuskie = document.getElementById("lubuskie");
const lubelskie = document.getElementById("lubelskie");
const dolnyslask = document.getElementById("dolnoslaskie");
const lodzkie = document.getElementById("lodzkie");
const malopolskie = document.getElementById("malopolskie");
const kujawsko = document.getElementById("kujawsko");
const wielkopolska = document.getElementById("wielkopolskie");
const slaskie = document.getElementById("slaskie");

const svg = document.getElementById("Warstwa_1");



mazowieckie.addEventListener("click", function(){
    getWeather("Warszawa");
});

lubelskie.addEventListener("click", function(){
    getWeather("Lublin");
});

zachodniopomorskie.addEventListener("click", function(){
    getWeather("Szczecin");
});

swietokrzyskie.addEventListener("click", function(){
    getWeather("Kielce");
});

warminskie.addEventListener("click", function(){
    getWeather("Olsztyn");
});

pomorskie.addEventListener("click", function(){
    getWeather("Gdansk");
});

podlaskie.addEventListener("click", function(){
    getWeather("Bialystok");
});

podkarpackie.addEventListener("click", function(){
    getWeather("Rzeszow");
});

opolskie.addEventListener("click", function(){
    getWeather("Opole");
});

lubuskie.addEventListener("click", function(){
    getWeather("Zielona Gora");
});

dolnyslask.addEventListener("click", function(){
    getWeather("Wroclaw");
});

lodzkie.addEventListener("click", function(){
    getWeather("Lodz");
});


kujawsko.addEventListener("click", function(){
    getWeather("Torun");
});

wielkopolska.addEventListener("click", function(){
    getWeather("Poznan");
});

slaskie.addEventListener("click", function(){
    getWeather("Katowice");
});


malopolskie.addEventListener("click", function(){
    getWeather("Krakow");
});

function getWeather(city) {
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city},pl&units=metric&appid=6be7ad8b086865d0af3e64edee68f7be`;

  //https://stackoverflow.com/questions/12460378/how-to-get-json-from-url-in-javascript
  fetch(url)
  .then(res => res.json())
  .then((out) => {
    // console.log('Checkout this JSON! ', out);
    document.getElementById("click-header").innerHTML = `Who cares but in area of ${city}...<br> ${out.weather[0].description} <br> temperature: ${out.main.temp}&#176;C <br> humidity: ${out.main.humidity}% <br> wind: ${out.wind.speed}km/h`;
  })
  .catch(err => { throw err });
}
