/*

HTML DOM EVENTS
---------------
HTML events are "things" that happen to HTML elements. When JavaScript is used in HTML pages,
JavaScript can "react" on these events.

To assign events to HTML elements you can:

- use event attributes
    <button onclick="displayDate()">The time is?</button>

- use the HTML DOM
    <script>
        document.getElementById("myBtn").onclick = displayDate;
    </script>


THE KEYWORD "THIS" REFERS TO THE CURRENT ELEMENT.
-------------------------------------------------
    <h1 onclick="this.innerHTML='Ooops!'">Click on this text!</h1>


AVAILABLE EVENTS
----------------
http://www.w3schools.com/jsref/dom_obj_event.asp

- Mouse: onclick, onmouseover, onmouseout...
- Keyboark: onkeypress...
- Frame/object: onload, onunload...
- Form: onsubmit, onfocus, onchange, oninvalid...
- Touch: ontouchstart, ontouchmove...
- Drag
- Clipboard
- Print
- Media
- Animation
- Transition
- Server-sent
- Miscelanea


EVENT LISTENERS
---------------
The addEventListener() method attaches an event handler to an element
without overwriting existing event handlers.

        document.getElementById("myBtn").addEventListener("click", displayDate);


You can remove an event listener by using the removeEventListener() method.


EVENT BUBBLING AND EVENT CAPTURING
----------------------------------
There are two ways of event propagation in the HTML DOM: bubbling and capturing.

Event propagation is a way of defining the element order when an event occurs.
If you have a <p> element inside a <div> element, and the user clicks on the <p> element,
which element's "click" event should be handled first?

In bubbling, the inner most element's event is handled first and then the outer.

In capturing, the outer most element's event is handled first and then the inner.

With addEventListener() you can specify the propagation type with a third optional boolean parameter:

       addEventListener(event, function, false);


The default value is false, which will use the bubbling propagation.


 */