/*
    All JavaScript arrays have access to the sort method
    that requires us only to define a comparison algorithm that
    tells the sort algorithm how the values should be ordered.
    

    - 
 */

var values = [0, 3, 2, 5, 7, 4, 8, 1];

values.sort(function(value1, value2) {
  return value1 - value2;
});

console.log(values)

/*
    The functional approach allows us to create a function as a standalone entity,
    just as we can any other object type, and to pass it as an argument
    to a method, just like any other object type, which can accept it as a
    parameter, just like any other object type.
 */