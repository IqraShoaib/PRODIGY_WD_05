const searchInput = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const img = document.querySelector('.icon');


async function getWeather(city) {
    var res = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=942cd48f48bfc3435fbc5e8221823ac6&units=metric`);
    if(res.status == 404) {
        document.querySelector('.error').style.display = "block";
    } else {
        document.querySelector('.error').style.display = "none";
    }
    var data = await res.json();
    console.log(data);
    document.querySelector('.celcius').innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidityP').innerHTML = Math.round(data.main.humidity) + "%";
    document.querySelector('.windS').innerHTML = Math.round(data.wind.speed) + "km/h";

    if(data.weather[0].main == "Clouds") {
        img.src = "./images/cloud.png"
    } else if(data.weather[0].main == "Clear") {
        img.src = "./images/clear.png"
    } else if(data.weather[0].main == "Rain") {
        img.src = "./images/rain.png"
    } else if(data.weather[0].main =="Drizzle") {
        img.src = "./images/drizzle.png"
    } else if(data.weather[0].main == "Mist") {
        img.src = "./images/mist.png"
    }
}
searchBtn.addEventListener('click', () => {
    getWeather(searchInput.value);
})
getWeather();