/*

FREQUENT PROBLEMS WITH OBJECTS

factory vs constructor



FACTORY VS CONSTRUCTOR

var myConstrunctor = function(name, lastName) {
  this.name = name;
  this.lastName = lastName;
}

var julio = new myConstructor('julio', 'colomer');


var myFactory = function(name, lastName) {

  var myName = name;
  var myLastName = lastName;

  return {
    myName: myName,
    myLastName: myLastName
  }

}

var mariau = myFactory('mariau', 'colomer');








 */