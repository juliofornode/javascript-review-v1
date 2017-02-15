//In JS, objects are passed by reference
//That means that when we pass an object to a function, if we change the object
//within the function, that changes affect the original object.

//That does not happen with all the other data types, that are passed by value.

var PassedByValue = 'Julio';

function myFunction(PassedByValue) {
  //we are passing a copy of PassedByValue, not PassedByValue
  PassedByValue = 'Belen';
}

myFunction();
console.log(PassedByValue);
//The outer value has not changed: 'Julio'
//because the var used inside the function was a copy of the original var,
//not the original var.


var PassedByReference = {name: 'Julio'};

function yourFunction(PassedByReference) {
  PassedByReference.name = 'Belen';
}

yourFunction();
console.log(PassedByReference.name);
//The outer object has changed: {name: 'Belen'}
//because there is only one instance of the object
