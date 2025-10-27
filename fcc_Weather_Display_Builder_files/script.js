//Variables
const getWeatherBtn = document.getElementById("get-weather-btn");
const citiesSelection = document.getElementById("cities-select");
const weatherInfoContainer = document.getElementById("weather-info-container")
//Functions
const weatherDisplay = (data) =>{
  let elementsToAddString = "";
  const {weather: weatherObj, main: mainObj, visibility, wind, name} = data;
  const [{main, description, icon}] = data.weather;
  const {temp, feels_like, temp_min, temp_max, pressure, humidity} = mainObj;
  const {speed, deg, gust} = wind;
  elementsToAddString = 
  `
    <h1 id="location">${name ?? "N/A"}</h1>
    <div class="rows">
      <p id="main-temperature">${temp ?? "N/A"}°C</p>
      <div class="display-containers">
        <img id="weather-icon" src="${icon ?? "N/A"}" alt="${description ?? "N/A"}">
        <p id="weather-main">${main ?? "N/A"}</p>
      </div>
    </div>
    <hr>
    <div class="rows">
      <p id="humidity">Humidity: ${humidity ?? "N/A"}%</p>
      <p id="feels-like">Feels Like: ${feels_like ?? "N/A"}</p>
    </div>
    <hr>
    <div class="bottom-row">
      <div class="wind-row">
      <p id="wind">Wind: ${speed ?? "N/A"}m/s</p>
      <p id="wind-gust">Gusts: ${gust ?? "N/A"}</p>
    </div>
    <div class="secondary-info-bottom-right" id="compass">
      <span id="compass-arrow" style="transform: rotate(${deg}deg);">
        <span class="arrow-head"></span>
      </span>
      <span class="compass-direction north"></span>
      <span class="compass-direction east"></span>
      <span class="compass-direction south"></span>
      <span class="compass-direction west"></span>
    </div>
    </div>
    
    
    
  `
  weatherInfoContainer.innerHTML = elementsToAddString;
}

async function getWeather(city){
  try{
    let response = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Try parsing as JSON
    let data = await response.json() ;
    return data;
    /*let data = await response.json();
    console.log(`This is the data from getWeather : ${JSON.stringify(data)}`)
    return data;*/
  }catch(error){
    console.log(`This error [${error}] is from getWeather`)
  }
} 

async function showWeather(city){
  try{
    const dataCheck = await getWeather(city);
    weatherDisplay(dataCheck)
  }catch(error){
    alert("Something went wrong, please try again later");
    console.log(`This error [${error}] is from showWeather`) 
  }
}
//EventListeners
getWeatherBtn.addEventListener("click",()=>{
  if (citiesSelection.value === ""){
    return;
  } 
  const city = citiesSelection.value
  showWeather(city)
  })