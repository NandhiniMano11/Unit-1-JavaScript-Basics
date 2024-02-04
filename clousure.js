// Scenario 1: Basic Closure Example
function outerFunction() {
  // Outer function scope
  let outerVariable = "I am from outer function";

  function innerFunction() {
    // Inner function has access to outerVariable due to closure
    console.log(outerVariable);
  }

  return innerFunction; // Return inner function
}

// Assign the returned inner function to closureFunction
let closureFunction = outerFunction();

// Call the closureFunction to access outerVariable
closureFunction(); // Output: I am from outer function


// Scenario 2: Private Variables using Closures
function createCounter() {
  // Outer function scope
  let count = 0;

  function increment() {
    // Inner function can access count due to closure
    count++;
    console.log("Count:", count);
  }

  function decrement() {
    count--;
    console.log("Count:", count);
  }

  return {
    increment: increment,
    decrement: decrement
  };
}

// Create a counter object with increment and decrement functions
let counter = createCounter();
counter.increment(); // Output: Count: 1
counter.increment(); // Output: Count: 2
counter.decrement(); // Output: Count: 1


// Scenario 3: Closures in Event Handlers
function attachEvent() {
  // Outer function scope
  let count = 0;

  // Add click event listener to an HTML button
  document.getElementById("btn").addEventListener("click", function () {
    // Inner function increments count and logs it
    count++;
    console.log("Button clicked", count, "times");
  });
}

// Call the attachEvent function to attach the event handler
attachEvent();


// Scenario 4: Closures in Callback Functions
function fetchData(callback) {
  // Outer function scope
  let data = "Some data from API";

  // Simulate async behavior
  setTimeout(function () {
    // Callback function gets executed after a delay
    callback(data);
  }, 1000);
}

// Call the fetchData function with a callback function
fetchData(function (data) {
  // Log the fetched data when the callback function is executed
  console.log("Fetched data:", data);
});
