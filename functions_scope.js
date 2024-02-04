// Function declaration
function greet() {
  console.log("Hello, world!");
}

// Call the function
greet();


// Function declaration with parameters and return statement
function add(a, b) {
  return a + b;
}

// Call the function with arguments and store the result
let result = add(5, 3);
console.log("Result of addition:", result);

// Function expression
let multiply = function (a, b) {
  return a * b;
};

// Call the function and log the result
console.log("Result of multiplication:", multiply(4, 6));

// Arrow function
let subtract = (a, b) => {
  return a - b;
};

// Call the arrow function and log the result
console.log("Result of subtraction:", subtract(10, 4));

// Function with default parameters
function greetPerson(name = "Guest") {
  console.log("Hello, " + name + "!");
}

// Call the function with and without parameter
greetPerson(); // Output: Hello, Guest!
greetPerson("John"); // Output: Hello, John!

// Function with rest parameters
function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

// Call the function with different number of arguments
console.log("Sum:", sum(1, 2, 3)); // Output: Sum: 6
console.log("Sum:", sum(1, 2, 3, 4, 5)); // Output: Sum: 15
