//closure is to return an anonymous function inside of another function

//closures behave in a weird way: if they include variables from the
//parent function, the variables take theis value in the moment the
//closure is invoked, not in the moment the closure was declared.
//for example:


var myArrray = [];
for (var i=0; i<10; i++) {
  //this is a closure, because it uses a variable from its outer scope
  myArray[i] = function() {
    return i;
  }
}

console.log(myArray[0]());
//it returns 10 and not 0, because when it is INVOKED the for loop has
//ended and therefore the value of the var i is 10.

console.log(myArray[1]());
//it returns 10 and not 1, because when it is INVOKED the for loop has
//ended and therefore the value of the var i is 10.

//etc.


//We can solve this using an IIFE:
var myArrray = [];
for (var i=0; i<10; i++) {
  (function() {
    var y = i;
    myArray[i] = function() {
      return y;
    }
  })();
  //this is a closure, because it uses a variable from its outer scope

}
