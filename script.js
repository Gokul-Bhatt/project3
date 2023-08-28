const apikey = "f644a82e00cfb695121f782becca5a2b";
//    const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
   // https://api.openweathermap.org/data/2.5/weather?q=Rudrapur&appid=f644a82e00cfb695121f782becca5a2b&units=metric
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");
    //apiurl + city + '&appid=${apikey}'
    
    async function checkWeather(city){

        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid=f644a82e00cfb695121f782becca5a2b&units=metric");
        if(response.status == 404){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }
        else{
            var data = await response.json();

        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
        
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }
        document.querySelector(".error").style.display = "none";
    }
       
    
         }
         //let cty = document.getElementsById("ct");
         let cty = prompt('Enter City Name');

        checkWeather(cty);