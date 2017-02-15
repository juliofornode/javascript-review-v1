/*

THE BOM OBJECT
--------------

THE WINDOW OBJECT
-----------------
All global JavaScript objects, functions, and variables are members of the window object.

The window object represents the browser's window.

The DOM is a property of the window object.

 window.document.getElementById("header");
 is the same as:

 document.getElementById("header");


WINDOW PROPERTIES AND METHODS
-----------------------------
* Size in pixels:
     window.innerHeight
     window.innerWidth

* The window.screen object contains information about the user's screen.
     window.screen.width
     window.screen.height
     window.screen.availWidth
     window.screen.availHeight
     window.screen.colorDepth
     window.screen.pixelDepth

* The window.location object can be used to get the current page address (URL)
and to redirect the browser to a new page.
     window.location.href returns the href (URL) of the current page
     window.location.hostname returns the domain name of the web host
     window.location.pathname returns the path and filename of the current page
     window.location.protocol returns the web protocol used (http:// or https://)
     window.location.assign loads a new document

* The window.history object contains the browsers history.
     window.history.back() - same as clicking back in the browser
     window.history.forward() - same as clicking forward in the browser

* The window.navigator object contains information about the visitor's browser.
     window.navigator.cookieEnabled;
     window.navigator.appName
     window.navigator.appCodeName
     window.navigator.platform


* Window methods:
     window.open() - open a new window
     window.close() - close the current window
     window.moveTo() -move the current window
     window.resizeTo() -resize the current window

 */