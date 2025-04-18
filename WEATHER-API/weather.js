
let temp =document.querySelector('.temp');
let city=document.querySelector('.city')
let humidity=document.querySelector('.humidity')
let wind=document.querySelector('.wind')
let icon=document.querySelector(".icon");

let search=document.querySelector('.search input');
let btn=document.querySelector('.search button');


let key="85d097e7744278d983124cc0b7c306a5"
let URL ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let CheckWeather =async (city)=>{
     let response = await fetch(URL +city+`&appid=${key}`);
     let data = await response.json();
     console.log(data)
     document.querySelector('.city').innerHTML=data.name;
     temp.innerText=Math.round(data.main.temp)+"°c"
     wind.innerHTML=data.wind.speed +" km/h"
     humidity.innerHTML=data.main.humidity+"%"
     console.log(data.weather[0].main)
     
     if(data.weather[0].main == "Clear"){
          icon.src="images/clear.png";
     }else if(data.weather[0].main == "Clouds"){
          icon.src="images/clouds.png";
     }else if(data.weather[0].main == "Drizzle"){
          icon.src="images/drizzle.png";
     }else if(data.weather[0].main == "Mist"){
          icon.src="images/mist.png";
     }else if(data.weather[0].main == "Rain"){
          icon.src="images/rain.png";
     }else if(data.weather[0].main == "Snow"){
          icon.src="images/snow.png";
     }
}

btn.addEventListener("click",()=>{
     CheckWeather(search.value);

})