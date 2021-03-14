// Variables and Primitive Data Types

// The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself?
// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
let numberChildren = 2;
let partnerName = "Shamshoun and Marengo";
let geographicLocation = "Boston";
let jobTitle = "Vet";
console.log("You will be a " + jobTitle + " in " + geographicLocation + ", and married to " + partnerName + " with " + numberChildren + " Kids.");



// The Age Calculator
// Forgot how old someone is? Calculate it!
// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.
let currentYear = 2019;
let birthYear = 1990;
let age1 = currentYear - birthYear;
let age2 = age1 - 1;
console.log("They are either " + age1 + " or " + age2 + ",substituting the values.");



// The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
// Bonus: Get the current year using JavaScript!
let currentAge = 29;
let maximumAge = 70;
let amountPerday = 3;
let total = (maximumAge - currentAge) * (366 * amountPerday);
console.log("You will need " + total + " to last you until the ripe old age of " + maximumAge + "");



// The Geometrizer
// Calculate properties of a circle, using the definitions here.
// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

let radius = 20;
let circumference = (2 * radius) * 3.14;
console.log("The circumference is " + circumference + "");
let area = (radius * radius) * 3.14;
console.log("The area is " + area + "");


// The Temperature Converter
// It's hot out! Let's make a converter based on the steps here.
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
const celsiusTemp = 3;
const fahrenheitTemp = 5;

const convertedCelsius = (fahrenheitTemp - 32) * (5 / 9);
const convertedFahrenheit = celsiusTemp * (9 / 5) + 32;

console.log(celsiusTemp + "°C is " + convertedFahrenheit + "°F.");
console.log(fahrenheitTemp + "°F is " + convertedCelsius + "°C.")