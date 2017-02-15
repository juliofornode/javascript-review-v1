/*

THE HTML DOM
------------
When a web page is loaded, the browser creates a Document Object Model of the page.

The HTML DOM model is constructed as a tree of Objects:
- document
- html
- body
- div
- p


Using the DOM, JavaScript can:
- change HTML elements
- change HTML attributes
- change CSS styles
- remove HTML elements and attributes
- add new HTML elements and attributes
- react to all existing HTML events in the page
- create new HTML events in the page


THE DOCUMENT OBJECT
-------------------
The document object represents your web page. If you want to access any element
in an HTML page, you always start with accessing the document object.


DOM METHODS
-----------
* Singular:
document.getElementById()
document.querySelectorAll("p.intro")

To add a new element to the HTML DOM, you must create the element (element node) first,
and then append it to an existing element.

    var p1 = document.createElement("p");
    var text1 = document.createTextNode("This is new.");

    p1.appendChild(text1);

    var div1 = document.getElementById("div1");

    div1.appendChild(p1);


To replace an element to the HTML DOM, use the replaceChild() method.

* Plural:
document.getElementsByClassName()
document.getElementsByTagName()


DOM ELEMENT PROPERTIES
----------------------
document.getElementById('demo').innerHTML = new html content
document.getElementById('demo').attribute = new value
document.getElementById('demo').style.color = "blue";


GET ELEMENTS OF AN DOM ARRAY
----------------------------
var myForm = document.forms["form1"];
var text = "";
for(var i = 0; i < myForm.length; i++) {
    text += myForm.elements[i].value + "<br>";
}

document.getElementById("demo").innerHTML = text;


NAVIGATING THROUGH THE DOM
--------------------------
The nodes in the DOM tree have a hierarchical relationship to each other.
- the top node is called root
- a node can have children
- siblings are nodes with the same parent

You can use the following node properties to navigate between nodes:
- parentNode
- childNodes[nodenumber]
- firstChild
- lastChild
- nextSibling
- previousSibling

<title>DOM Tutorial</title>,
the element node <title> does not contain text, it contains a text node with the value "DOM Tutorial".
The value of the text node can be accessed by the node's innerHTML property, or the nodeValue.

 */