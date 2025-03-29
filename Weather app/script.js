const apiKey ="ef3bd854060f41ac70cc145f9437504e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl +city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
          weatherIcon.src = "images/cloudy.png";
    }
    else if(data.weather[0].main == "Clear"){
          weatherIcon.src = "images/sun.png";
    }
    else if(data.weather[0].main == "Rain"){
          weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
          weatherIcon.src = "images/rainy-day.png";
    }
    else if(data.weather[0].main == "Mist"){
          weatherIcon.src = "images/mist.png";
    }
    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);

})

checkWeather();