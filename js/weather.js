const API_KEY = "0225ed20feb2a7c2acc697b307cd12ad";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data =>{
    const city = document.querySelector("#weather span:first-child");
    const weather = document.querySelector("#weather span:last-child");
    city.innerHTML = `You are in <span class="highlight1">${data.name}</span>!`;
    weather.innerHTML = `The weather is <span class="highlight2">${data.weather[0].main} / ${data.main.temp}℃</span>`;
    });
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
