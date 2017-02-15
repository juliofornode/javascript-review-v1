/*


 ENCAPSULATE FUNCTIONALITY: MODULE PATTERN
 -----------------------------------------
 * Public API, private functions

     var createWorker = function() {

         // These are the private components
         var workCount = 0;

         var task1 = function() {
            workCount += 1;
            console.log("task1 " + workCount);
         };

         var task2 = function() {
            workCount += 1;
            console.log("task2 " + workCount);
         };

         // This is the public API
         return {
            job1: task1,
            job2: task2
         };

     };


     var worker = createWorker();
     worker.job1();
     worker.job2();


 CONSTRUCTOR FUNCTION VS FACTORY FUNCTION
 ----------------------------------------
 http://stackoverflow.com/questions/8698726/constructor-function-vs-factory-functions


 * The basic difference is that a constructor function is used with the new keyword (which causes JavaScript to
 automatically create a new object, set this within the function to that object, and return the object):

    var objFromConstructor = new ConstructorFunction();



 * A factory function is called like a "regular" function:

    var objFromFactory = factoryFunction();



 * But for it to be considered a "factory" it would need to return a new instance of some object: you wouldn't call it
 a "factory" function if it just returned a boolean or something. This does not happen automatically like with new,
 but it does allow more flexibility for some cases.


     function ConstructorFunction() {
         this.someProp1 = "1";
         this.someProp2 = "2";
     }

     ConstructorFunction.prototype.someMethod = function() {  whatever  };


    function factoryFunction() {
        var obj = {
            someProp1 : "1",
            someProp2 : "2",
            someMethod: function() {  whatever  }
        };

        // other code to manipulate obj in some way here

        return obj;
    }


 SOURCES
 =======
 * Ejemplos para entender las design patterns:
 http://youtu.be/0jjNjXcYmAU


 TOP DESIGN PATTERNS
 ===================
 Creational
 * Prototype: initial setup of a chess game
 * Builder: comida (1r plato, 2o plato, postre)
 * Singleton: presidente del pais
 * Factory: If Person is male, create Warrior, else create Princess

 Structural
 * Proxy: credit card represents the bank
 * Decorator: 10 types of pizza combined with 3 toppings (params)
 * Facade: event mgr coordinate all aspects of the event
 * Adapter: USA/EU power adapter
 * Flyweight: re-use objects with small modifications

 Behavioral
 * Chain of responsibility: loan approval process (clerk, mgr, director)
 * Iterator: next-previous buttons in TV remote
 * State: wall fan controls (off, low, medium, high)
 * Strategy
 * Observer: online auction (I get notified if new bet higher than mine)
 * Visitor: client (visitor) and cab driver
 * Template: common blueprint used to build several houses
 * Command: restaurant order (waiter, chef)
 * Memento: undo & re-do operations
 * Mediator: air controller is the mediator to all flying planes


 */
