function changeMode() {

     mybody = document.getElementById("mylight");
     mybody.classList.toggle('mydark');
    // const element = document.getElementById("mylight");
    // if (element.className == "header") {
    //   element.className = "mydark";
    // } else {
    //   element.className = "mydark";
    // }
  }
 window.onload =  function (){userLocation ();}

var showLocation = document.getElementById("storeLocation");
function userLocation () {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    showLocation.innerHTML = "Your browser does not support this feature.";
  }
}

function showPosition (data) {
  // storeLocation.innerHTML = "Latitude: " + data.coords.latitude +
  // "<br> Longitude: " + data.coords.longitude;
  console.log(data);
let latitude = data.coords.latitude;
let longitude = data.coords.longitude;

const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;

fetch(url, {method:'GET'})
.then((res)=>res.json())
.then((data)=>{
  let cityName =data.city.name
  let weather = data.list[0].temp.day                 
  storeLocation.innerHTML = "Weather of your City is " +weather+ "°C" 
})

}