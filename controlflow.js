// Variable declaration and initialization
let age = 20;

// Check if the age is greater than or equal to 18
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// Looping constructs
// Iterate from 0 to 4
for (let i = 0; i < 5; i++) {
  console.log("Iteration: " + i);
}

// Define an object representing a person
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

// Iterate over the properties of the person object
for (let key in person) {
  console.log(key + ':', person[key]);
}

// Define an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Iterate over each element of the numbers array using forEach method
numbers.forEach(function (number, index) {
  console.log('Index:', index, 'Value:', number);
});

// Initialize a counter variable
let counter = 0;

// Execute the block of code while the counter is less than 3
while (counter < 3) {
  console.log("Count: " + counter);
  counter++;
}
