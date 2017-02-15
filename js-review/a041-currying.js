//currying: use closure to reduce the arguments in a function call
function say(saludo) {
  return function(algo) {
    return(saludo + ' ' + algo);
  }
}

var sayHola = say('hola');

sayHola('mamonazo!');
