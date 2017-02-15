/*

FUNCTIONS
=========

Hoisting: Function declaration vs functional expression
    function whatever() {}
    no hoisting: var whatever = function() {}


Recursive functions: can be replaced by loops
    Less memory usage.


Closure: child f returns params or vars of parent f

    function(name) {
        var secret = "secret";
        return function(lastName) {
            return (name + lastName + secret);
        }
    }


Function arguments: convert to array

    var args = Array.prototype.slice.call(arguments);


Currying: closure to reduce arity (number of params)

     function favoriteAnimals(a,b) {
        return "My favorite animals are " + a + "and" + b;
     }

     favoriteAnimals("dogs", "cats"); //My favorite animals are dogs and cats


     * Since the parameter "a" is usually "dogs", we curry the function:

     function favoriteAnimals(a) {
        return function(b) {
            return "My favorite animals are " + a + "and" + b;
        }
     }


     var loveDogs = favoriteAnimals("dogs");

     loveDogs("cats");  //My favorite animals are dogs and cats
     loveDogs("birds"); //My favorite animals are dogs and birds



//we need to make a closure first in order to make a curry.

     function fullname(name, lastname) {
        console.log(name + ' ' + lastname);
     }

     fullname('julio', 'colomer'); //julio colomer


     function myClosure(name) {
        return function(lastname) {
            console.log(name + ' ' + lastname);
        }
     }

     myClosure('julio')('abarca'); //julio abarca


     var myCurry = myClosure('julio');

     myCurry('sancho'); //julio sancho




// functions as parameters

 function f1(num){
 return (num + ' de la funcion 1.');
 }

 function f2(num){
 return (num + ' de la funcion 2.');
 }

 function chained(fun1, fun2, num) {
 return (fun1(num) + ' ' + fun2(num));
 }




 */
