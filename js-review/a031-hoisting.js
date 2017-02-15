//hoisting: JS puts functions and variable declarations on top

//variable hoisting
//hoisting: var a;
console.log(a); //undefined, not 'not defined'
var a = 10;


//function hoisting
//hoisting: function declaration
myFunction(); //'it works!'
function myFunction() {
  console.log('it works!');
}


//IMPORTANT: function expressions are not hoisted
//var myFunction;
myFunction(); //undefined - myFunction is not a function
var myFunction = function() {
  console.log('it works!');
}
