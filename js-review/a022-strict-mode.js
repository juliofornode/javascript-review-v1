//the strict mode is a feature to prevent errors in ES5

//declaration: remember to declare it as a sting
'use strict';

//common errors prevented
name = 'Julio' //error: have to declare name (with var)
delete name  //error: cannot delete variables or functions
var let = 'Yada' //error: cannot use JS keywords as var names
eval('var x =1') //x will not affect the outer scope of eval
