// Variable declaration and initialization
let message = "Hello, World!";
let count = 10;
let isActive = true;

// Basic operators
let sum = 5 + 3; // Addition
let difference = 10 - 5; // Subtraction
let product = 4 * 6; // Multiplication
let quotient = 12 / 3; // Division

// String concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // Concatenation

// Variable declaration using var, let, and const keywords
var globalVariable = "I'm a global variable"; // Declared using var (function scoped)
let localVariable = "I'm a local variable"; // Declared using let (block scoped)
const constantVariable = "I'm a constant variable"; // Declared using const (block scoped)

// Various data types that variables can hold
var numberVariable = 10; // Number data type
var stringVariable = "Hello, world!"; // String data type
var booleanVariable = true; // Boolean data type
var arrayVariable = [1, 2, 3, 4, 5]; // Array data type
var objectVariable = { name: "John", age: 30 }; // Object data type

// Output the values of variables to the console
console.log("Global variable:", globalVariable);
console.log("Local variable:", localVariable);
console.log("Constant variable:", constantVariable);
console.log("Number variable:", numberVariable);
console.log("String variable:", stringVariable);
console.log("Boolean variable:", booleanVariable);
console.log("Array variable:", arrayVariable);
console.log("Object variable:", objectVariable);

// Demonstrating scope of variables
function scopeTest() {
  var functionScopedVar = "I'm a function-scoped variable";
  if (true) {
    let blockScopedVar = "I'm a block-scoped variable";
    console.log("Inside block:", blockScopedVar); // Accessible inside the block
    console.log("Inside function:", functionScopedVar); // Accessible inside the function
  }
  // console.log("Outside block:", blockScopedVar); // Error: blockScopedVar is not defined
  console.log("Outside function:", functionScopedVar); // Accessible outside the block
}

// Calling the function to demonstrate scope
scopeTest();

// console.log("Outside function:", functionScopedVar); // Error: functionScopedVar is not defined
