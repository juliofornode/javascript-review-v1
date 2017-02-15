//constructor and factory are alternative ways to create child objects
//in ES5

//constructor: use this and new
function Persona(name, lastname) {
  this.name = name;
  this.lastname = lastname;
}

var julio = new Persona('Julio', 'Iglesias');


//factory: function defines an object and returns is

function creaAnimal(raza, color) {
  var animal = {
    raza: raza,
    color: color
  };

  return animal;
}

var yogui = creaAnimal('oso', 'marron');
