let map = L.map("map").setView([51.2509, 4.4489], 12);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
var circle = L.circle([51.2509, 4.4489], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);
let apMarker = L.marker([51.23009, 4.41616])
  .addTo(map)
  .bindPopup("<b>AP-Hogeschool</b><br>Ellermanstraat 33");