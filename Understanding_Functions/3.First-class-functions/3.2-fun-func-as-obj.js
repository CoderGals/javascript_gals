var assert = require('assert') 


var ninja = {};  creates an obj and assigns a new prop to it
ninja.name = 'Albi';

var wieldSword = function() {};
wieldSword.swordType = 'katana';

console.log(wieldSword.swordType)

/*
  - Storing functions in a collection allows us to easily manage related
    functions - for example, callbacks that have to be invoked when something
    of interest occurs.
  - Memoization allows the function to remember previously computed values,
    thereby improving the performance of subsequent invocations.
*/

// Storing functions

/*
    When we want to store collections of unique functions.
    - when adding functions to such a collection, a challenge we can
      face is determining  which functions are new to the collection
      and should be added, and which are already resident and shouldn't be added.


*/

var store = {
  nextId: 1,     Keeps track of the next available ID to be assigned 
  cache: {},     Creates an object to serve as a cache in which we'll store functions
  add: function(fn) {
    if(!fn.id) {
      fn.id = this.nextId++;
      this.cache[fn.id] = fn;
      return true;
    }
  }
};

function ninja() {}
assert(store.add(ninja), "Function was safely added.");
assert(!store.add(ninja), "But it was only added once."); -->