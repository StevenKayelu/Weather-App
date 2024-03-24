
// const APIKEY="aed207f4441627c40931632851cdbd03";
let weather_Icon=document.querySelector(".weather-icon");
let City_="Kitwe";
//Function Call 
CheckWeather(City_);
//Button event listener that grabs the input value and stores it in City_ then Validates it
document.querySelector("button").addEventListener("click",()=>{ 
    City_=document.querySelector("input").value
    CheckWeather(City_);
})
//Enter Key event listener that grabs the input value and stores it in City_ then Validates it
document.querySelector("input").addEventListener("keypress", (e)=>{
    if(e.key=="Enter"){     
        City_=document.querySelector("input").value
        CheckWeather(City_);
    }
    else{
        document.querySelector(".Content").style.display="block";
    }
})

//Function to validate data searched from API
async function CheckWeather(City){
    // Stores link to API that provides data
    const APLURL="https://api.openweathermap.org/data/2.5/weather?q="+City+"&appid=aed207f4441627c40931632851cdbd03&units=metric";

    // Perform an asynchronous HTTP request to the specified API endpoint
    const response=await fetch(APLURL)

    // Parse the response body as JSON and wait for the result
    let data = await response.json();
    //If data is not found 
    if(response.status==404)
    {   //No weather content should be displayed on the site
        document.querySelector(".Content").style.display="none";
        //Display Eror on the site
        document.querySelector(".error").style.display="Block";
    }else{
        //Displays Name of City from JSON
        document.querySelector(".city").innerHTML=data.name;
        //Displays Name of Tempreture from JSON
        let tempreture =document.querySelector(".tempreture").innerHTML=Math.round(data.main.temp)+"°C";
        //Displays Name of Humidty from JSON
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        //Displays Name of Windy from JSON
        document.querySelector(".wind").innerHTML=data.wind.speed+" km/h"
   //Checks data i json formart if the to diplay difernt images based on weather
    if(data.weather[0].main=="Clouds"){
        //Displays cloudy weather img
        weather_Icon.src="images/clouds.png";
    }
    else if(data.weather[0].main=="Clear")
    {   //Displays Clear weather img
        weather_Icon.src="images/clear.png";
    }
    else if(data.weather[0].main=="Rain")
    {    //Displays Rainy weather img
        weather_Icon.src="images/rain.png";
    }
    else if(data.weather[0].main=="Drizzle")
    {    //Displays Drizzling weather img
        weather_Icon.src="images/drizzle.png";
    }
    else{    //Displays mist weather img
        weather_Icon.src="images/mist.png";
    }
    //Diplay the Content on the site if city is found
    document.querySelector(".Content").style.display="Block";
    //Diplays an error message
    document.querySelector(".error").style.display="none";
    }
}
function updateClock() {
    // Get the current date and time
    const current_datetime = new Date();
  
    // Define arrays for day names
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    // Extract day, hour, minute, and second
    const day = dayNames[current_datetime.getDay()];
    const hours = current_datetime.getHours();
    const minutes = current_datetime.getMinutes();
    const seconds = current_datetime.getSeconds();
  
    // Display the current day and time in the desired format
    const digitalClockElement = document.querySelector(".datetime");
    digitalClockElement.innerHTML = `${day}, ${hours}:${(minutes)}:${formatTimeComponent(seconds)}`;
  }
  
  function formatTimeComponent(time) {
    // Add leading zero if time component is less than 10
    return time < 10 ? `0${time}` : time;
  }
  // Update clock every second
  setInterval(updateClock, 1000);
  // Initial call to display clock immediately
  updateClock();
  