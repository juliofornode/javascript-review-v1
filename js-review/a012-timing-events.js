/*

TIMING EVENTS
-------------
setTimeout() and setInterval() are both methods of the HTML DOM Window object.

Can be written without the 'window.' prefix.


SET TIME OUT: DO AFTER X SECONDS
--------------------------------
setTimeout(function, milliseconds)

Executes a function, after waiting a specified number of milliseconds.

     <button onclick="setTimeout(myFunction, 3000)">Try it</button>

     <script>
         function myFunction() {
            alert('Hello');
         }
     </script>


clearTimeout() method stops the execution of setTimeout().

     myVar = setTimeout(function, milliseconds);
     clearTimeout(myVar);



SET INTERVAL: REPEAT EVERY X SECONDS
------------------------------------
setInterval(function, milliseconds)

Same as setTimeout(), but repeats the execution of the function continuously.

The clearInterval() method stops setInterval().


 */