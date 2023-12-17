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

Markers, circles, and polygons
Besides tile layers, you can easily add other things to your map, including markers, polylines, polygons, circles, and popups. Let’s add a marker:

var marker = L.marker([51.5, -0.09]).addTo(map);
Adding a circle is the same (except for specifying the radius in meters as a second argument), but lets you control how it looks by passing options as the last argument when creating the object:

var circle = L.circle([51.508, -0.11], {
color: 'red',
fillColor: '#f03',
fillOpacity: 0.5,
radius: 500
}).addTo(map);
Adding a polygon is as easy:

var polygon = L.polygon([
[51.509, -0.08],
[51.503, -0.06],
[51.51, -0.047]
]).addTo(map);

Working with popups

Popups are usually used when you want to attach some information to a particular object on a map. Leaflet has a very handy shortcut for this:

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");
Try clicking on our objects. The bindPopup method attaches a popup with the specified HTML content to your marker so the popup appears when you click on the object, and the openPopup method (for markers only) immediately opens the attached popup.

You can also use popups as layers (when you need something more than attaching a popup to an object):

var popup = L.popup()
.setLatLng([51.513, -0.09])
.setContent("I am a standalone popup.")
.openOn(map);
Here we use openOn instead of addTo because it handles automatic closing of a previously opened popup when opening a new one which is good for usability.

// object oriented programming

Constructor functions and prototypes
// Constructor Function
function Car(make, model, year) {
this.make = make;
this.model = model;
this.year = year;
}

// Prototype method
Car.prototype.displayInfo = function () {
console.log(`${this.year} ${this.make} ${this.model}`);
};

// Creating instances
let car1 = new Car('Toyota', 'Camry', 2022);
let car2 = new Car('Honda', 'Civic', 2023);

// Using prototype method
car1.displayInfo();
car2.displayInfo();

ES6 Classes
// Constructor Function
function Car(make, model, year) {
this.make = make;
this.model = model;
this.year = year;
}

// Prototype method
Car.prototype.displayInfo = function () {
console.log(`${this.year} ${this.make} ${this.model}`);
};

// Creating instances
let car1 = new Car('Toyota', 'Camry', 2022);
let car2 = new Car('Honda', 'Civic', 2023);

// Using prototype method
car1.displayInfo();
car2.displayInfo();

Encapsulation and inheritance
// Base class
class Shape {
constructor(color) {
this.color = color;
}

// Method to get the area (to be overridden by subclasses)
getArea() {
return 0;
}
}

// Subclass extending Shape
class Circle extends Shape {
constructor(color, radius) {
super(color);
this.radius = radius;
}

// Override the getArea method
getArea() {
return Math.PI \* Math.pow(this.radius, 2);
}
}

// Subclass extending Shape
class Rectangle extends Shape {
constructor(color, width, height) {
super(color);
this.width = width;
this.height = height;
}

// Override the getArea method
getArea() {
return this.width \* this.height;
}
}

// Create instances of the subclasses
const redCircle = new Circle('Red', 5);
const blueRectangle = new Rectangle('Blue', 4, 6);

// Access properties and call methods
console.log(`Circle Area: ${redCircle.getArea()}`);
console.log(`Rectangle Area: ${blueRectangle.getArea()}`);

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Local Storage Example 1</title>
</head>
<body>

<script>
  // Storing a value in local storage
  localStorage.setItem('myKey', 'Hello, Local Storage!');

  // Retrieving a value from local storage
  const retrievedValue = localStorage.getItem('myKey');

  // Displaying the retrieved value
  alert(retrievedValue);
</script>

</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Local Storage Example 2</title>
</head>
<body>

<script>
  // Creating an object to store in local storage
  const user = {
    name: 'John Doe',
    age: 25,
    email: 'john@example.com'
  };

  // Stringifying and storing the object in local storage
  localStorage.setItem('userObject', JSON.stringify(user));

  // Retrieving the stringified object from local storage
  const retrievedObject = localStorage.getItem('userObject');

  // Parsing the stringified object back to a JavaScript object
  const parsedObject = JSON.parse(retrievedObject);

  // Displaying the parsed object
  console.log(parsedObject);
</script>

</body>
</html>

// handling local storage events

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Local Storage Example 3</title>
</head>
<body>

<script>
  // Setting a value in local storage
  localStorage.setItem('counter', '0');

  // Function to update and display the counter
  function updateCounter() {
    const counterValue = parseInt(localStorage.getItem('counter')) + 1;
    localStorage.setItem('counter', counterValue.toString());
    alert(`Counter: ${counterValue}`);
  }

  // Adding an event listener for local storage changes
  window.addEventListener('storage', function (event) {
    if (event.key === 'counter') {
      // Counter value changed in another tab or window
      updateCounter();
    }
  });

  // Initial display of the counter value
  updateCounter();
</script>

</body>
</html>

/////////////////////////
In JavaScript, you can reset local storage by using the localStorage.clear() method. This method clears all key-value pairs from the local storage associated with the current domain. Here's an example:
// Clear all key-value pairs from local storage
localStorage.clear();

// Optionally, you can also remove specific items by their key
// For example, if you want to remove an item with key 'exampleKey'
// localStorage.removeItem('exampleKey');

To set a value in the local storage using JavaScript, you can use the localStorage.setItem() method. Here's an example:
// Set a key-value pair in local storage
localStorage.setItem('exampleKey', 'exampleValue');

// You can also set multiple key-value pairs
localStorage.setItem('anotherKey', 'anotherValue');
