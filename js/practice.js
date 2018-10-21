// Initialize and add the map
function initMap() {
// The location of Uluru
var Odegaard = {lat: 47.6565, lng: -122.31};
// The map, centered at Uluru
var map = new google.maps.Map(
  document.getElementById('map'), {zoom: 17, center: Odegaard});
// The marker, positioned at Uluru
var marker = new google.maps.Marker({position: Odegaard, map: map});
}

// Initialize and add the map
function initMap2() {
// The location of Uluru
var csBuilding = {lat: 47.653401, lng: -122.305957};
// The map, centered at Uluru
var map = new google.maps.Map(
  document.getElementById('map'), {zoom: 17, center: csBuilding});
// The marker, positioned at Uluru
var marker = new google.maps.Marker({position: csBuilding, map: map});
}


(function() {
let info = ["Zach Pruitt", "Math 308", "Odegaard Library", "Math 308 Study Sesh"];

window.onload = function() {
  document.getElementById("username").innerText = info[0];
  document.getElementById("class").innerText = info[1];
  document.getElementById("location").innerText = info[2];
  document.getElementById("title").innerText = info[3];
}
})();
