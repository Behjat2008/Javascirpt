const apiKey = "606dfefc4b3d49bc1a039ef3f5ce6ab6";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metri&q=";

  const searchBox = document.querySelector('.search input')
  const searchBtn = document.querySelector('.search button')
  const weatherIcon = document.querySelector('weather-icon')


  async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + km/h;

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = 'images/clouds.png'
    }
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = 'images/clouds.png'
    }
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = 'images/clouds.png'
    }
    
  }


  searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value)
  })



  checkWeather();