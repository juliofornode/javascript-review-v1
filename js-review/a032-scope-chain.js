//scope chain: if JS does not find a variable in the current scope,
//it tries to find it in the parent scope.


//IMPORTANT: THE SCOPE CHAIN STARTS IN THE FUNCTION DECLARATION,
//NOT IN THE FUNCTION INVOCATION.
//careful, the scope chain can be tricky. This will not work as expected:

//since x is not defined inside the function declaration, JS looks for
//it in the parent scope. It does not find it there either,
//and that is why it gives us an error.
function child() {
  console.log(x);
}

function parent() {
  var x = 'secret';
  child();
}

parent();


//this will work:
function parent() {
  var x = 'secret';
  function child() {
    console.log(x);
  }
  child();
}

parent();
