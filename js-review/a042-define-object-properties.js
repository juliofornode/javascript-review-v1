//OBJECT PROPERTIES WITH EXTRA FEATURES
Object.defineProperty( objectName, 'propName', {propFeature: false, value: 'myValue'} )


// CUSTOMIZABLE FEATURES OF A PROPERTY
// * configurable: can be deleted, can be changed
// * writable: can be changed through assignment
         objectName.propName = ‘newValue’;

// * enumerable: can be displayed in a for…in loop

var myObjeto = {
  name: 'Julio',
  lastName: 'Iglesias'
};

Object.defineProperty(myObjeto, 'edad', {
  enumerable: true,
  writable: true,
  value: 45
});


var key;
for(key in myObjeto) {
  console.log(key);
}


myObjeto.edad = 19;
myObjeto.edad;
