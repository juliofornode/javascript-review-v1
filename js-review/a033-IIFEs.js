//IIFE (immediately invoked function expression) is used to avoid
//that JS files in ES5 create global variables.
//IIFES are not necessary in ES6, since we use modules with export and import.

//this is the problem we are trying to solve:
//index.html is calling one.js and two.js

//one.js is defining var x;
var x = 'white';
console.log(x);

//two.js is also defining var x;
var x = 'black';
console.log(x);

//therefore, x from two.js will overwrite x from one.js
//if we ask for x in index.html we will get 'black';


//IIFE uses function scope to keep variables out of the global scope
//one.js
function one() {
  var x = 'white';
  console.log(x);
}
one();
//x is not accessible out of one()


//two.js does the same thing with an IIFE:
//we wrap the anonymous function in () to make it invocable
(function() {
  var x = 'black';
  console.log(x);
})();
//x is not accessible out of the anonymous function
//if we ask for x in index.html we will get 'undefined';
