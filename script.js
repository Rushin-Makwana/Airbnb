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
document.body.onload =  userLocation ();

var showLocation = document.getElementById("storeLocation");
function userLocation () {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    showLocation.innerHTML = "Your browser does not support this feature.";
  }
}

function showPosition (data) {
  // showLocation.innerHTML = "Latitude: " + position.coords.latitude +
  // "<br> Longitude: " + position.coords.longitude;
  console.log(data);

}