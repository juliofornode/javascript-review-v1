/*

HOW TO MEASURE PERFORMANCE OF JS PROGRAMS
-----------------------------------------

CONSOLE.TIME()
--------------
console.time('julio');

...code to measure...

console.timeEnd('julio');


PERFORMANCE.NOW()
-----------------
var t1 = performance.now();

...code to measure...

var t2 = performance.now();
console.log('performance 1: ' + (t2-t1));


REDUCE ACTIVITY IN LOOPS
------------------------
Each statement in a loop, including the for statement, is executed for each iteration of the loop.

Bad Code:
    for (i = 0; i < arr.length; i++) {

Better Code:
    l = arr.length;
    for (i = 0; i < l; i++) {


REDUCE ACCESS TO DOM
--------------------
Accessing the HTML DOM is very slow, compared to other JavaScript statements.
If you expect to access a DOM element several times, access it once, and use it as a local variable:

     obj = document.getElementById("demo");
     obj.innerHTML = "Hello";


REDUCE DOM SIZE
---------------
Keep the number of elements in the HTML DOM small.
This will always improve page loading, and speed up rendering (page display), especially on smaller devices.


AVOID UNNECESSARY VARIABLES
---------------------------
Often you can replace code like this:

    var fullName = firstName + " " + lastName;
    document.getElementById("demo").innerHTML = fullName;

With this:

    document.getElementById("demo").innerHTML = firstName + " " + lastName


LOAD JS AT THE BOTTOM OF THE <BODY>
-----------------------------------




 */