//bind, call and apply have to do with the "this" keyword

const objeto = {
  name: 'Julio',
  lastName: 'Iglesias'
};

function fullName(hola) {
  return (hola + ' ' + this.name + ' ' + this.lastName);
}

//bind declares a function, but does not invoke it
const myFull = fullName.bind(objeto, 'hola');
myFull(); //'hola Julio Iglesias'

//call and apply do the same, the only difference is how they handle the params
fullName.call(objeto, 'hello'); //'hello Julio Iglesias'
fullName.apply(objeto, ['hi']); //'hi Julio Iglesias'


//How to do it when instead of using a function that is in the global scope,
//we want to use a function of other object:
function Persona(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}

Persona.prototype.nombreCompleto = function() {
  return (this.nombre + ' ' + this.apellido);
}

function Empleado(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}

var rufina = new Empleado('Rufina', 'Garcia');
Persona.prototype.nombreCompleto.call(rufina);
Persona.prototype.nombreCompleto.apply(rufina);
var rufinaCompleto = Persona.prototype.nombreCompleto.bind(rufina);
rufinaCompleto();
