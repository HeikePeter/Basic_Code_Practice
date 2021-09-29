// Today's temperature format in Kelvin, as a constant variable. 
const kelvin = 296;

// Today's Kelvin temperature variable converted to Celsius.
const celsius = kelvin - 273;

// Equation for calculating fahrenheit saved in a changeable variable. 
let fahrenheit = celsius * (9/5) + 32;

// Rounding down the decimal output to an integer.
fahrenheit = Math.floor(fahrenheit);

//String interpolation to display temperature in a string. 
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit, or ${celsius} degrees Celsius.`)
