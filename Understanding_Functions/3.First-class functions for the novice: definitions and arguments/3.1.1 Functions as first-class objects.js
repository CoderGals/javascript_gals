/*
    1. Functions in JavaScript possess all the capabilities of objects
    and are thus treated like any other object in the language.

    */
   
//  2. We say that functions are first-class objects, which can also be:
//    - Created via literals:
var ninjaArray = [];
var ninja = {};
function ninjaFunction() { }

//    - Assigned to variables, array entries, and properties of other objects

var ninjaFunction = function () { }; // Assign a new function to a variable
ninjaArray.push(function () { }); // Adds a new function to an array
ninja.data = function () { }; // Assigns a new function as a property of another object

//    - Passed as arguments to other functions

function call(ninjaFunction) {
  ninjaFunction();
}

call(function () { }); // A newly created function passed as an argument to a function

//    - Returned as values from functions

function returnNewNinjaFunction() {
  return function (){};  // Returns a new function
}

//    - They can possess properties that can be dynamically created and assigned:

var ninjaFunction = function () { };
ninjaFunction.name = "Albi";

/*
    - Whatever we can do with objects, we can do with functions as well.
    - Functions are objects, just with an additional, special capability of being 
      invokable: Functions can be called or invoked in order to perform an action.
*/

/*
    - One of the characteristics of first-class objects is that they can be
      passed to functions as arguments. In the case of functions, this means
      that we pass a function as an argument to another function. 
      - general concept known as a callback function.
*/