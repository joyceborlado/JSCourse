Project Planning

1. User Story - description of the application from the user's perspective.
2. Features - based on the user stories
3. Flowchart
4. Architecture

// Leaflet Quick Start Guide

Preparing your page
Include Leaflet CSS file in the head section of your document:

 <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
     integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
     crossorigin=""/>

Include Leaflet JavaScript file after Leaflet’s CSS:

 <!-- Make sure you put this AFTER Leaflet's CSS -->
 <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
     integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
     crossorigin=""></script>

Put a div element with a certain id where you want your map to be:

 <div id="map"></div>
Make sure the map container has a defined height, for example by setting it in CSS:

#map { height: 180px; }

Setting up the map
First we’ll initialize the map and set its view to our chosen geographical coordinates and a zoom level:

var map = L.map('map').setView([51.505, -0.09], 13);

Next, we’ll add a tile layer to add to our map, in this case it’s a OpenStreetMap tile layer. Creating a tile layer usually involves setting the URL template for the tile images, the attribution text, and the maximum zoom level of the layer. OpenStreetMap tiles are fine for programming your Leaflet map, but read the Tile Usage Policy of OpenStreetMap if you’re going to use the tiles in production.

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
Make sure all the code is called after the div and leaflet.js inclusion. That’s it! You have a working Leaflet map now.
