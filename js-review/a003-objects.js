/*

OBJECTS
=======

PROPERTIES
.prototype
.__proto__
.constructor


COPY
assign({}, objCopied)


INHERITANCE
Object.create(prototypeObject) // more versatile than the "new" keyword lets you initialize object properties
                               // using its second argument
 // Superclass Person
 // Subclass Employee
        // Person.call(this); // call super constructor.

 // subclass extends superclass
        // Employee.prototype = Object.create(Person.prototype);
        // Employee.prototype.constructor = Employee;


// differences: call and apply call an external function, while bind creates a function that calls an external function.
// https://codeplanet.io/javascript-apply-vs-call-vs-bind/

     var julio = {
         name: 'julio',
         lastName: 'colomer'
     };

     function fullname(prefix) {
        return prefix + ' ' + this.name + ' ' + this.lastName;
     }


     console.log(fullname.apply(julio, ['super'])); //super julio colomer
     console.log(fullname.call(julio, 'super')); //super julio colomer

     var bindFunction = fullname.bind(julio);
     console.log(bindFunction('super')); //super julio colomer


call() // to call external functions from an obj

    define obj
        this.name

    define external f(p1,p2)
        this.name + 2

    f.call(obj, p1, p2)


     var julio = {
         name: 'Julio',
         lastname: 'Colomer',
         fullname: function(tratamiento) {
            return tratamiento + ' ' + this.name + ' ' + this.lastname;
         }
     };

     var mariau = {
         name: 'Mariau',
         lastname: 'Colomer'
     };

    var result = julio.fullname.call(mariau, 'Ms.');



apply() //same as call() but params passed as array

    define obj
        this.name

    define external f(p1,p2)
        this.name + 2

    f.apply(obj, [p1, p2])


bind() //like call, but creates this.bound()

    define obj
        this.name

    define external f(p1,p2)
        this.name + 2

    var bound = f.bind(obj)
    console.log(bound(p1,p2))



CUSTOM PROPERTIES

 Object.defineProperty is mainly used to set properties with specific property descriptors (e.g. read-only (constants), enumerability (to not show a property in a for (.. in ..) loop, getters, setters).

 "use strict";

 var myObj = {}; // Create object

 // Set property (+descriptor)
 Object.defineProperty(myObj, 'myprop', {
    value: 5,
    writable: false
 });

 console.log(myObj.myprop);// 5
 myObj.myprop = 1;         // In strict mode: TypeError: myObj.myprop is read-only



 Object.defineProperty()

     Object.defineProperty(objName, 'propName', {
        get: function() { return bValue; },                //opt.The function returned will be used as the value of property.
        set: function(newValue) { bValue = newValue; },    //opt.
        enumerable: true,                                  //shows up during enumeration of properties (for(var prop in objName))
        configurable: true,                                //may be changed
        writable: true,                                    //the value may be changed with an assignment operator
        value: 'customValue'                               //any valid JavaScript value
     });


 Object.defineProperties()


PROTECTION
 Object.freeze() //avoids any change
 Object.isFrozen()
 Object.preventExtensions() //avoids adding new properties
 Object.isExtensible()
 Object.seal()
 Object.isSealed()


LOOPS
 for(var key in myObj) {
   return key;
 }

Object.keys(objeto).map(key => {
   return (key + ': ' + objeto[key]);
})


INFORMATION
 Object.getOwnPropertyNames(objectName)
 Object.keys(objectName)
 Object.values(objectName) //ECMA 7
 Object.valueOf(objectName)
 _.keys(objectName)
 _.functions(objectName)
 _.findKey(objectName, f(condition))
 _.forIn(objectName, f(value, key))
 _.has(objectName, 'keyName')
 _.mapKeys(objectName, f(value, key))
 _.mapValues(objectName, f(condition))


TRANSFORMATION
 _.invert(objectName) //inverts keys and values
 _.omit(objectName, valuesToOmit)
 _.pick(objectName, propertiesToPick)
 _.pickBy(objectName, condition)


MERGE
 _.merge(obj1, obj2)



CONVERT DATA TYPE
 Object.toString(objectName)





 */
