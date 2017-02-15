//Inheritance in ES5: cumbersome, using prototype

function Persona(options) {
  this.name = options.name;
  this.gender = options.gender;
}

Persona.prototype.saludo = function() {
  return ('me llamo ' + this.name);
}

function Hermano(options) {
  Persona.call(this, options);
  this.lastname = 'Colomer';
}

Hermano.prototype = Object.create(Persona.prototype);
Hermano.prototype.constructor = Hermano;
Hermano.prototype.familia = function() {
  return ('me apellido ' + this.lastname);
}

const julio = new Hermano({name: 'Julio', gender: 'M'});
julio.familia();


//Inheritance in ES6: simple, using classes, constructor function and super()

class Persona {
  constructor(options) {
    this.nombre = options.nombre;
  }

  mambo() {
    return 'mambo!';
  }
}

class Valenciano extends Persona {
  constructor(options) {
    super(options);
    this.ciudad = 'Valencia';
  }

  rumba() {
    return 'rumba!';
  }
}

const julio = new Valenciano({nombre: 'Julio'});
julio.mambo();
