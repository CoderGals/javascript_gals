/*
    Functions in JavaScript possess all the capabilities of objects and
    are thus treated like any other object in the language.

    - Functions are first-class objects, which can also be:
*/

// created via literals

function ninjaFunction() { }

// Assigned to variables, array entries, and properties of other objects

var ninjaFunction = function () { }; // Assigns a new function to a variable
ninjaArray.push(function () { }); // adds a new function to an array
ninja.data = function () { }; // Assigns a new function as a property of another object

// Passed as arguments to other functions

function call(ninjaFunction) {
  ninjaFunction();
}

call(function () { }); // A newly created function passed as an argument to a function

// Returned as values from functions
function returnNinjaFunction() {
  return function () { }; // Returns a new function
}

// They can possess properties that can be dynamically created and assigned:

var ninjaFunction = function () { };
ninjaFunction.name = "Hanzo"; // Adds a new property to a function


/*
    - Functions are objects, just with an additional, special capability of being
      invokable.
    - Functions can be called or invoked in order to perform an action.

    - One of characteristics of first-class objects is that they can be
      passed to functions as arguments - that means that we pass a func
      as an argument to another function that might, at a later point in 
      application execution, call the passed-in function.

      - Callback function
      
*/

