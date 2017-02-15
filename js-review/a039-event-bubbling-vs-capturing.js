//event bubbling vs. event capturing

//when an event affects several children-parent html elements, in what order
//are these elements affected?

//If the first action is triggered in the button element (the target), and then
//from there up to its parent elements, that is event bubbling (burbujas: hacia arriba)

//If the first action is triggered in the parent element (the root), and then
//from there down to its child elements until the button,
//that is event capturing (captura: de arriba a abajo)

//event bubbling (default behavior): event goes from button (target) to window object (root)

//event capturing: event goes from window object (root) to button (target)

//we select bubbling vs. capturing when we declare an eventListener
//the third parameter sets bubbling (false, default) or capturing (true)
myButton.addEventListener('click', handleClick, false);
