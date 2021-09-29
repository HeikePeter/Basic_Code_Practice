// Constant variable of a human's age. 
const myAge = 30;

// Changeable variable of the first 2 years of a dog's life. 
let earlyYears = 2;

// The value of the first 2 years count as 10.5 years each.
earlyYears *= 10.5;

// Removing the first 2 years as these are already accounted for. 
let laterYears = myAge - 2;

//Each year equates to four years.
laterYears *= 4;

//Adding the early years (*10.5) and later years of your life (*4) together to give a total. 
var myAgeInDogYears = earlyYears + laterYears;

//User's name in lower case, saved in a myName variable. 
var myName = 'Peter'.toLowerCase()

//String interpolation to display values in a string statement. 
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years in dog years.`)
