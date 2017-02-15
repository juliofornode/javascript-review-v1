//in ES5, there are only two scopes: global and function
//in ES6 we have also the block scopes

//global scope:
var x = 1;
//same as saying window.x = 1;


//function scope:
function myFunction() {
  var y = 2;
}
//y does not exist out of the function


//block scope:
var i = 'fuera';

for(let i=0; i<3; i++) {
  console.log(i);
}

console.log('out of the block: ', i);
