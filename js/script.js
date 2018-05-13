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

const circle = document.getElementsByClassName("circle")[0];

circle.addEventListener("click", function() {
  circle.style.display = "none";
});

mazowieckie.addEventListener("click", function(e) {
  getWeather("Warszawa", e.clientX, e.clientY);
});

lubelskie.addEventListener("click", function(e) {
  getWeather("Lublin", e.clientX, e.clientY);
});

zachodniopomorskie.addEventListener("click", function(e) {
  getWeather("Szczecin", e.clientX, e.clientY);
});

swietokrzyskie.addEventListener("click", function(e) {
  getWeather("Kielce", e.clientX, e.clientY);
});

warminskie.addEventListener("click", function(e) {
  getWeather("Olsztyn", e.clientX, e.clientY);
});

pomorskie.addEventListener("click", function(e) {
  getWeather("Gdansk", e.clientX, e.clientY);
});

podlaskie.addEventListener("click", function(e) {
  getWeather("Bialystok", e.clientX, e.clientY);
});

podkarpackie.addEventListener("click", function(e) {
  getWeather("Rzeszow", e.clientX, e.clientY);
});

opolskie.addEventListener("click", function(e) {
  getWeather("Opole", e.clientX, e.clientY);
});

lubuskie.addEventListener("click", function(e) {
  getWeather("Zielona Gora", e.clientX, e.clientY);
});

dolnyslask.addEventListener("click", function(e) {
  getWeather("Wroclaw", e.clientX, e.clientY);
});

lodzkie.addEventListener("click", function(e) {
  getWeather("Lodz", e.clientX, e.clientY);
});

kujawsko.addEventListener("click", function(e) {
  getWeather("Torun", e.clientX, e.clientY);
});

wielkopolska.addEventListener("click", function(e) {
  getWeather("Poznan", e.clientX, e.clientY);
});

slaskie.addEventListener("click", function(e) {
  getWeather("Katowice", e.clientX, e.clientY);
});

malopolskie.addEventListener("click", function(e) {
  getWeather("Krakow", e.clientX, e.clientY);
});

function getWeather(city, x, y) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},pl&units=metric&appid=6be7ad8b086865d0af3e64edee68f7be`;

  //https://stackoverflow.com/questions/12460378/how-to-get-json-from-url-in-javascript
  fetch(url)
    .then(res => res.json())
    .then(out => {
      // Circle margin from all screen edges
      let circleMargin = 10;
      // By default circle size is equal to screen width - 20px for margins
      let circleSize = window.innerWidth - 2 * circleMargin;

      // But if screen width is greater than 420px circle size is set to 400px
      if (window.matchMedia("(min-width: 420px)").matches) {
        circleSize = 400;
      }

      // Calculate circle left and top based on mouse click (x,y)
      let circleLeft = x - circleSize / 2;
      let circleTop = y - circleSize / 2;

      // If circle left is smaller than 0, behine left screen edge
      if (circleLeft < 0) {
        // force it to be on left edge (0) + circleMargin
        circleLeft = circleMargin;
        // if circle right side is behind right screen edge
      } else if (circleLeft + circleSize > window.innerWidth) {
        // force circle position to fit in screen
        circleLeft = window.innerWidth - (circleSize + circleMargin);
      }

      // Like for circleLeft ;)
      if (circleTop < 0) {
        circleTop = circleMargin;
      } else if (circleTop + circleSize > window.innerHeight) {
        circleTop = window.innerHeight - (circleSize + circleMargin);
      }

      // Set circle display, top left and width and height
      circle.style.display = "flex";
      circle.style.position = "fixed";
      circle.style.top = circleTop + "px";
      circle.style.left = circleLeft + "px";
      circle.style.width = circleSize + "px";
      circle.style.height = circleSize + "px";

      document.getElementById(
        "click-header"
      ).innerHTML = `Who cares but in area of ${city}...<br> ${
        out.weather[0].description
      } <br> temperature: ${out.main.temp}&#176;C <br> humidity: ${
        out.main.humidity
      }% <br> wind: ${out.wind.speed}km/h`;
    })
    .catch(err => {
      throw err;
    });
}
