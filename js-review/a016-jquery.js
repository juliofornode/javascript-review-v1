/*

JQUERY
------
Basic syntax is: $(selector).action()

To prevent jQuery from running before the document is finished loading:
     $(document).ready(function(){
        // jQuery methods go here...
     });

Or the short version:
     $(function(){
        // jQuery methods go here...
     });


SPECIAL JQUERY SELECTORS
------------------------
 http://www.w3schools.com/jquery/jquery_selectors.asp

     $("ul li:first")
     $("tr:odd")


JQUERY EVENTS
-------------
     $("p").click(function(){
        // action goes here!!
     });


THE ON() METHOD
---------------
The on() method attaches one or more event handlers for the selected elements.

     $("p").on({
         mouseenter: function(){
            $(this).css("background-color", "lightgray");
         },
         mouseleave: function(){
            $(this).css("background-color", "lightblue");
         },
         click: function(){
            $(this).css("background-color", "yellow");
         }
     });


JQUERY EFFECTS
--------------
Method Chaining

$(selector).hide(speed,callback);
show
toggle

$(selector).fadeIn(speed,callback);
fadeOut
fadeToggle
fadeTo

$(selector).slideDown(speed,callback);
slideUp()
slideToggle()

$(selector).animate({params},speed,callback);


JQUERY DOM MANIPULATION
-----------------------
Get Content - text(), html(), and val()
$("#test").html()

Set Content - text(), html(), and val()
$("#test").html("<b>Hello world!</b>")

Add New HTML Content
append() - Inserts content at the end of the selected elements
prepend() - Inserts content at the beginning of the selected elements
after() - Inserts content after the selected elements
before() - Inserts content before the selected elements

Remove Elements/Content
remove() - Removes the selected element (and its child elements)
empty() - Removes the child elements from the selected element

Manipulating CSS
css() - sets or returns one or more style properties for the selected elements
addClass() - Adds one or more classes to the selected elements
removeClass() - Removes one or more classes from the selected elements
toggleClass() - Toggles between adding/removing classes from the selected elements
css() - Sets or returns the style attribute

Dimensions


JQUERY TRAVERSING
-----------------
jQuery traversing, which means "move through", are used to "find" (or select)
HTML elements based on their relation to other elements.

parent()
children()
siblings()
first()


JQUERY AJAX
-----------
AJAX is the art of exchanging data with a server, and updating parts
of a web page - without reloading the whole page.

load() loads data from a server and puts the returned data into the selected element

     <div id="div1">Let jQuery AJAX Change This Text</div>
     <button>Get External Content</button>

     <script>
             $("button").click(function(){
                $("#div1").load("demo_test.txt");
             });
     </script>


get() used to request data from the server with an HTTP GET request

     <button>Send an HTTP GET request to a page and get the result back</button>

     <script>
         $(document).ready(function(){
             $("button").click(function(){
                 $.get("demo_test.asp", function(data, status){
                    alert("Data: " + data + "\nStatus: " + status);
                 });
             });
         });
     </script>



post() used to send data to the server with an HTTP POST request


    <button>Send an HTTP POST request to a page and get the result back</button>

     <script>
         $(document).ready(function(){
             $("button").click(function(){
                 $.post("demo_test_post.asp",
                 {
                     name: "Donald Duck",
                     city: "Duckburg"
                 },
                 function(data,status){
                    alert("Data: " + data + "\nStatus: " + status);
                 });
             });
         });
     </script>








 */



















