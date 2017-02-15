//mixin: add a pack of external properties and functions to an object

//this is how it is usually done in ES5:
function mixin(sourceObject, targetObject) {
  for (var prop in sourceObject) {
    targetObject[prop] = sourceObject[prop];
  }
}

mixin(sourceObject, targetObject);


//ejemplo:
var juan = {
  andar: function() {
    return 'anda!';
  }
}

var pepe = {}

function mixin(sourceObject, targetObject) {
  for(var prop in sourceObject) {
    targetObject[prop] = sourceObject[prop];
  }
}

mixin(juan, pepe);

pepe.andar(); //'anda!'
