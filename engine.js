//api and url
const api = "c1cd908872dbeaef6ce4f1888936dbe0";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.querySelector(".search input");
const button = document.querySelector(".search button");
const icon = document.querySelector(".weather-icon");

async function checkWeather(city){
    //fetch / calling the api
    const response = await fetch(url + city + `&appid=${api}`)
    let data = await response.json();



    console.log(data);
    
    //getting needed data from the api
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + "km/h"; 
    document.querySelector(".pressure").innerHTML = data.main.pressure + "mmHg";

    //to change icons relating weather conditions  
    if(data.weather[0].main == "Clouds"){
        icon.src = "img/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        icon.src = "img/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        icon.src = "img/rain.png";
    }
    else if(data.weather[0].main == "Snow"){
        icon.src = "img/snow.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        icon.src = "img/drizzle.png";
    }
    else if(data.weather[0].main == "Storm"){
        icon.src = "img/storm.png";
    }
} 

//activate search button
button.addEventListener("click", () => {
    checkWeather(search.value);
})

