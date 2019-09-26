/*

    - One of the reasons that functions and functional concepts are so
      important in JavaScript is that functions are primary modular units of execution.

    - In JavaScript, objects enjoy certain capabilities:
    
    1. They can be created via literals: {}
    2. They can be assigned to variables, array entries, and properties of other objects.


*/

var ninja = {}; // Assign a new object to a variable
ninjaArray.push({}); // Adds a new object to an array
ninja.data = {}; // Assigns a new object as a property of another object

/*
    3. They can be passed as arguments to functions:
*/

function hide(ninja) {
  ninja.visibility = false;
}

hide({});   // A newly created object passed as an argument to a function


/*
    4. They can be returned as values from functions:
*/

function returnNewNinja() {
  return {};
}

/*
    5. They can possess properties that can be dynamically created and assigned:
*/

var ninja = {};
ninja.name = "Hanzo"; // Creates a new property on an object

