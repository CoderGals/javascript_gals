/*
    - We set up a function to be called at a later time, whether by the 
      browser in the event-handling phase or by other code, we're
      setting up a callback.

    - We're establishing a function that other code will later "call back"
      at an appropriate point of execution.
*/


var text = "Demo arigato!";
report("Before defining functions");

// Defines a function that takes a callback function
// and immediately invokes it

function useless(ninjaCallback) {
  report("In useless function");
  return ninjaCallback();
}

function getText() {
  report("In getText function");
  return text;
}

report("Before making all the calls");

// Calls our useless function with the getText function
// as a callback

assert(useless(getText) === text, "The useless function works! " + text);

report("After the calls have been made");

// We can rewrite our code in the following manner

var text1 = "Demo arigato 2!";

function useless2(ninjaCallback) {
  return ninjaCallback();
}

// Degines a callback function directly as an argument
assert(useless2(function() { return text1; }) === text1, "The useless2 function works!", + test1);


