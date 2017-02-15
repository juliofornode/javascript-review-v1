//Using Object.defineProperty() we can create setter and getter functions


var miObjeto = {};

Object.defineProperty( miObjeto, 'propName', {

    //the setter function is called when the property is set
    //In its simpler form, it assigns the input value to the property
    set: function(value){
             propName = value;
         },

    //the getter function is called when the property is called
    //In its simpler form, it returns the property
    get: function(){ 
             return propName;
         }
} );

miObjeto.propName = 'Valencia';

document.getElementById('app').innerHTML = miObjeto.propName;
