var map = L.map("mapid", {
  center: [52.3720, 4.8945],
  zoom: 14,
  gestureHandling: true
});


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
}).addTo(map);


var marker1 = L.marker([52.378322, 4.899838], {}).addTo(map).bindPopup("<h3>Amsterdam Centraal Station</h3>").on('click', clickZoom);
var marker2 = L.marker([52.373107, 4.891829], {}).addTo(map).bindPopup("<h3>Dam Square</h3>").on('click', clickZoom);
var marker3 = L.marker([52.384158, 4.902311], {}).addTo(map).bindPopup("<h3>This is Holland</h3>").on('click', clickZoom);
var marker4 = L.marker([52.359981, 4.885338], {}).addTo(map).bindPopup("<h3>Rijksmuseum</h3>").on('click', clickZoom);
var marker5 = L.marker([52.376254, 4.911565], {}).addTo(map).bindPopup("<h3>Hannekes Boom</h3>").on('click', clickZoom);
var circle1 = L.circle([52.373475, 4.897542], 200, {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
}).addTo(map).bindPopup("<h3>De Wallen</h3>").on('click', clickZoom);


function clickZoom(e) {
  map.setView(e.target.getLatLng(), 15);
}


var ticket = document.getElementById("button");
ticket.addEventListener("click", function() {

  map.setView(marker1.getLatLng(), 14);
  marker1.bindPopup("<h2>Central Station</h2><div class='infoBox'>The start of almost every journey as a tourist. Have a moment in front of the impressive station building and feel the liveliness of the city.</div>").openPopup();

  window.setTimeout(function() {
    map.setView(marker2.getLatLng(), 14);
    marker2.bindPopup("<h2>Dam Square</h2><div class='infoBox'>The most important town square and historical heart of Amsterdam. Right next to it is the royal palace. The rumor goes that the king lives here ;)</div>").openPopup();
  }, 7000)

  window.setTimeout(function() {
    map.setView(marker3.getLatLng(), 14);
    marker3.bindPopup("<h2>This is Holland</h2><div class='infoBox'>If you want fun, you have to go here. It is a 5D flight simulation with wind and water effects over famous Dutch landmarks. Every cent worth!</div>").openPopup();
  }, 14000)

  window.setTimeout(function() {
    map.setView(marker4.getLatLng(), 14);
    marker4.bindPopup("<h2>Rijksmuseum</h2><div class='infoBox'>Dutch national museum dedicated to arts and history in Amsterdam. Perfect for the culture lovers.</div>").openPopup();
  }, 21000)

  window.setTimeout(function() {
    map.setView(marker5.getLatLng(), 14);
    marker5.bindPopup("<h2>Hannekes Boom</h2><div class='infoBox'>Fancy bar/restaurant with beach bar flair. Enjoy warm summer evenings in the cozy outside area with cold beer and view on the water.</div>").openPopup();
  }, 26000)

  window.setTimeout(function() {
    map.setView(circle1.getLatLng(), 14);
    circle1.bindPopup("<h2>De Wallen</h2><div class='infoBox'>For the curious among us. It is the red-light district of Amsterdam. Definitly worth a visit in the evening when the area comes to life.</div>").openPopup();
  }, 33000)

  window.setTimeout(function() {
    map.closePopup();
  }, 40000)
});
