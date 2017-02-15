/*


 REVIEW 113015
 =============

 PLAN
 ====
 * global review
 * focus on angular: karpov




 ==========
 JAVASCRIPT
 ==========




 BASIC DATA TYPES
 ================
 * primitive: A primitive (primitive value, primitive data type) is data that is not an object and has no methods. In JavaScript there are 5 primitive types: undefined, null, boolean, string and number. Everything else is an object.

 var stringPrimitive = String("this is a primitive string");


 * problem: if the string was created as a String Object instance, the typeof will be "object"

 * BEST PRACTICE: use literals to instantiate variables.

 * string.indexOf(character, beginning)

 * string.substring(start, end)

 * array.forEach(callback(element, index, array))

 * refactor: chaining

 * escape sequences. example: copyright symbol: \u00A9

 * string.replace() with RegExp

 * parseInt(string): string to number

 * use an ES6 shim to enable support for ES6

 * there are other shims and libraries called polyfills


 STRING PROPERTIES
 =================
 * length: number of characters.


 STRING METHODS
 ==============
 * indexOf and search (more versatile with RegExp)

 * slice, substring (no negative values) and substr (uses length as 2nd param)

 * charAt
 * match: regexp vs string
 * replace
 * split: to array
 * toLowerCase & toUpperCase
 * toString
 * trim, trimLeft, trimRight
 * valueOf


 * concat: concats two strings
 * includes: wheter a string includes other string
 * lastIndexOf
 * repeat
 * HTML wrapper methods (most of them deprecated)



 ARRAYS
 ======

 myArray.concat.apply([], myArray): FLATTENING AN ARRAY
 ------------------------------------------------------
 * use myArray.concat.apply([], myArray)
 > we could have done it just using concat() to add each array item, but apply() allows us to apply one function to all array items.


 SPLICE: REMOVING OR REPLACING ARRAY ELEMENTS
 --------------------------------------------
 * splice: "empalmar" (la traduccion no se compadece con el significado en js: recortar o reemplazar)

 * use array.splice(array.indexOf(element), items, substitute)


 SLICE: EXTRACTING A PORTION OF AN ARRAY
 ---------------------------------------
 * slice: "slice de pizza", porcion

 * use array.slice(start, end)
 > ATENCION: slice crea una SHALLOW COPY del array object, por lo que cualquier cambio en el objeto se vera reflejado en todas sus copias.


 FOREACH vs MAP: APPLYING A FUNCTION AGAINST EACH ARRAY ELEMENT
 --------------------------------------------------------------
 * use array.forEach(callback(element, index, array))
 > DO NOT return a value in the callback


 * use array.map(callback(element, index, array))
 > DO return a value in the callback


 FILTER: CREATING A FILTERED ARRAY
 ---------------------------------
 * use array.filter(callback)


 EVERY AND SOME: VALIDATING ARRAY CONTENTS
 -----------------------------------------
 * use array.every() to validate that ALL items match one condition

 * use array.some() to validate that ANY items match one condition



 ARRAY METHODS
 =============
 * toString and join (you can add a separator)

 * remove/add to the end: pop and push
 * remove/add to the begining: shift and unshift
 * remove/add anywhere: splice(pos, items to remove, opt: items to add)

 * slice(start, optional:end all by default)

 * alphabetical sorting: sort
 * numerical sorting: array.sort(function(a,b) { return a-b });

 function mySort(myArray) {
 return myArray.sort(function(a,b) {
 if (a>b) return 1;
 if (b>a) return -1;
 if (b===a) return 0;
 })
 }



 * filter
 * every and some: validation
 * delete
 * reverse
 * concat



 function cl(whatever) {
 console.log(whatever);
 }


 //forEach

 var numbers = [1,2,3];

 var output = numbers.forEach(function(element, index, array) {
 cl(element * 2);
 });

 cl(output);



 //map

 var numbers = [1,2,3];
 var doubles = numbers.map(function(element, index, array) {
 return element * 2;
 });

 cl(doubles);



 ///.map(Number);

 var example = ["1", "2"];

 var toNumbers = example.map(Number);

 cl(toNumbers); // [1,2]



 //reduce

 var numbers = [1,2,3];
 var doubles = numbers.reduce(function(prevElement, currentElement, currentIndex) {
 return (prevElement + currentElement);
 });

 cl(doubles);



 //flattening

 var nonFlat = [[1,2],[3,4],[5,6]];

 var flattened = nonFlat[0].concat(nonFlat[1]).concat(nonFlat[2]);

 cl(flattened);

 var smarter = nonFlat.concat.apply([], nonFlat);

 cl(smarter);



 FUNCTIONS
 =========
 * functions are first-class objects in js, which means they can be treated as an object, or as a statement.


 HOISTING DOES NOT APPLY TO FUNCTIONAL EXPRESSIONS
 -------------------------------------------------
 * function declaration vs functional expression:

 function whatever() {}

 var whatever = function() {}


 FUNCTIONAL PROGRAMMING
 ----------------------
 * functional programming is to use functions instead of complicated loops or conditional statements.
 > for example, array.reduce() is the functional programming way to replace a for loop.


 RECURSIVE FUNCTIONS VS LOOPS: MEMORY USAGE
 ------------------------------------------
 * recursive functions can be replaced by loops. They can be shorter and faster, but they use a lot of memory. ECMAScript 6 will try to fix that problem.


 CLOSURE: A FUNCTION THAT REMEMBERS ITS STATE
 --------------------------------------------
 * a child function that returns parameters or variables of her parent function


 CONVERTING FUNCTION ARGUMENTS INTO AN ARRAY
 -------------------------------------------
 * var args = Array.prototype.slice.call(arguments);


 APPLY vs CALL: ARGUMENTS AS STRING vs AS ARRAY
 ----------------------------------------------
 * call() and apply() do the same: make possible that different objects use properties and methods that were initially defined to be used just for one particular object.


 function fullname(one, two) {
 return this.name + " " + this.lastname + one + two;
 };

 var Cow = function(name, lastname) {
 this.name = name;
 this.lastname = lastname;
 }

 var vaca = new Cow("Paca", "Vazquez");

 fullname.call(vaca, "toca", "pelotas");
 fullname.apply(vaca, ["toca", "pelotas"]);



 CLOSURE, PARTIAL APPLICATION (BIND) AND CURRYING
 ------------------------------------------------
 * quick definitions:
 > closure: inner f returns var/param of outer f
 > partial app/bind: to avoid params repetition
 > currying: closure to avoid 1 param repetition


 * CLOSURE: a closure is to return an inner function that make use of parameters or variables of the outer function.


 function name(nombre) {
 return function(apellido) {
 return nombre + apellido;
 }
 }

 name("julio")("colomer"); //juliocolomer



 * PARTIAL APPLICATION (BIND): when we are frequently repeating the values assigned to some parameters, it is worthy to create a new function that automatizes that repetition for us.


 function entreNueves(nueve1, nueve2, palabra) {
 return nueve1+palabra+nueve2
 }

 var onlyOneParameter = entreNueves.bind(undefined, 9, 9);

 console.log(onlyOneParameter("tocapelotas")); //9tocapelotas9



 * CURRYING: we use a closure to transform a function with multiple arity (number of parameters) into the same function with less arity.

 function favoriteAnimals(a,b) {
 return "My favorite animals are " + a + "and" + b;
 }

 favoriteAnimals("dogs", "cats"); //My favorite animals are dogs and cats


 * Since the parameter "a" is usually "dogs", we curry the function:

 function favoriteAnimals(a) {
 return function(b) {
 return "My favorite animals are " + a + "and" + b;
 }
 }


 var loveDogs = favoriteAnimals("dogs");

 loveDogs("cats");  //My favorite animals are dogs and cats
 loveDogs("birds"); //My favorite animals are dogs and birds



 OBJECTS
 =======

 PROTOTYPICAL INHERITACE: JS CREATES OBJECTS FROM OBJECTS
 --------------------------------------------------------
 * js is based on prototypical inheritance: you create instances of objects, not instances of classes


 USE Object.create INHERIT THE FUNCTIONALITY OF OTHER OBJECT
 -----------------------------------------------------------
 // Shape - superclass
 function Shape() {
     this.x = 0;
     this.y = 0;
 }

 // superclass method
 Shape.prototype.move = function(x, y) {
     this.x += x;
     this.y += y;
     console.info('Shape moved.');
 };

 // Rectangle - subclass
 function Rectangle() {
    Shape.call(this); // call super constructor.
 }

 // subclass extends superclass
 Rectangle.prototype = Object.create(Shape.prototype);
 Rectangle.prototype.constructor = Rectangle;

 var rect = new Rectangle();

 console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle);// true

 console.log('Is rect an instance of Shape?', rect instanceof Shape);// true

 rect.move(1, 1); // Outputs, 'Shape moved.'



Buen tutorial:
 https://www.youtube.com/watch?v=sWOXYDBbz0g

Funcion utilizada para inherit:
 https://github.com/nodejs/node-v0.x-archive/blob/master/lib/util.js#L634-L644


 exports.inherits = function(ctor, superCtor) {
     ctor.super_ = superCtor;
     ctor.prototype = Object.create(superCtor.prototype, {
         constructor: {
             value: ctor,
             enumerable: false,
             writable: true,
             configurable: true
         }
     });
 };





 OBJECT PROPERTIES ARE BOTH VARIABLES AND METHODS
 ------------------------------------------------
 * object properties are both variables and methods. Object variables are called "data members".


 DO NOT USE THE KEYWORD "THIS" TO KEEP VARIABLES PRIVATE
 -------------------------------------------------------
 * best practice: name the private variables starting with _


 USE constructorFunctionName.prototype. CREATE PROPERTIES
 --------------------------------------------------------
 * use constructorFunctionName.prototype.VariableOrMethodName


 Object.defineProperty(): OBJECT PROPERTIES WITH EXTRA FEATURES
 --------------------------------------------------------------
 * use Object.defineProperty() when you want to have extra control over the features of the new property
 > options: simple and getter/setter


 * customizable features:
 > configurable: changeable or not
 > enumerable: can be enumerated
 > writable: changeable through assignement


 * defining a property is not the same as assigning to it

 Object.defineProperty(obj, propName, propDesc)
 obj.prop = value

 > assignment calls a setter, definition creates an own property
 > non-writable properties prevent assignment, but not definition
 > only definition allows create a property with arbitrary attributes
 > If you want to create a new property, use definition
 > If you want to change the value of a property, use assignment


 Object.preventExtensions(): PREVENTING OBJECT EXTENSIBILITY
 -----------------------------------------------------------
 * use Object.preventExtensions() to lock an object against future property additions
 > current property values and features are still writable


 Object.freeze(): PREVENTING ANY CHANGES TO AN OBJECT
 ----------------------------------------------------
 * use Object.freeze()

 * how to avoid that an object will be changed:
 > Object.freeze() avoids any change
 > Object.preventExtensions() avoids adding new properties


 use an object literal: NAMESPACING YOUR JS OBJECTS
 --------------------------------------------------
 * goal: encapsulate your object data and methods to prevent clashes with other libraries

 * solution: use an object literal

 var objectName = {

 property1: value,

 property2: function() {
 whatever;
 }

 };



 * to access the properties:

 objectName.property1;

 objectName.property2();



 USE BIND() TO CHANGE THE DEFAULT BEHAVIOR OF "THIS"
 ---------------------------------------------------
 * when we use a nested function, by default "this" gets disassociated of the inner scope. You can use bind() to change that.
 > an alternative is to assign self=this in the outer function


 CHAINING YOUR OBJECT'S METHODS
 ------------------------------
 * you need to include "return this;" in the object methods you want to chain


 OBJECT METHODS
 --------------
 * .create()
 * .defineProperty()
 * .freeze()
 * .is()
 * .keys()
 * .values()



 ADDITIONAL NOTES
 ================

 THE COMMA OPERATOR
 ------------------
 * The comma operator evaluates each of its operands (from left to right) and returns the value of the last operand.


 return (x += 1, x);

 //same as:
 x += 1;
 return x;


 return myfunc(), myobj.myvar = someobj.prop, myobj

 //same as:
 myfunc();
 myobj.myvar = someobj.prop;
 return myobj;


 JAVASCRIPT DESIGN PATTERNS
 ==========================
 * creational: patterns to create property objects
 * code reuse: patterns to add to one object other's functionality
 * module: make a js package that can be called from other js apps
 * structural
 * behavior


 CREATIONAL PATTERNS
 -------------------
 * basic:
 obj.firstname = "Julio";
 obj["new lastname"] = "Colomer";


 * defineProperty() and defineProperties()

 * Object.create()

 var janeDoe = Object.create(johnDoe, {
 firstName: { value: "Jane" },
 greet: {
 value: function() {
 return "Hello!";
 }
 }

 });



 * constructor

 function Person(name) {
 this.name = name;
 }

 var julio = new Person("name");


 IMPORTANT: define object methods out of the constructor function using objectName.prototype.methodName =



 CODE RE-USE PATTERNS
 --------------------
 * inheritance:

 Employee.prototype = Object.create(Person.prototype);

 function Employee() {
 Person.call(this, "param1");
 }


 mixins
 ------
 * take an object and mix-in the functionality of another object
 > por ejemplo, mix-in los objetos movimiento (con los metodos andar y correr) y alimentacion (con los metodos comer y beber) a los objetos Person y Dog


 * parece que no hay una funcion predefinida para inyectar un mixin en js, como si la hay en jquery. En el ejemplo se tiene que crear una funcion a medida:


 extend(Person, movimiento);

 function extend(target) {

     if (!arguments[1]) return;

     for (var i=0; i<arguments.length; i++) {

         var source = arguments[i];

         for (var prop in source) {
             if(!target[prop] &&
             source.hasOwnProperty(prop)) {
                target[prop] = source[prop];
             }
         }
     }
 }


 decorator
 ---------
 * a decorator is a wrapper used to extend the functionality of an object while maintaining that object's interface

 * because it is a wrapper, it can be implemented in different ways

 * the simplest way to wrap an object is to pass it as a parameter of a function




 MODULE PATTERNS
 ---------------
 * basic module pattern
 > use iffy
 > variables are private
 > return an object literal


 * the amd: asynchronous module definition



 =======
 NODE.JS
 =======

 MODULE.EXPORTS AND REQUIRE
 --------------------------
 * module.exports does not export all the file, only what is assigned to the export.


 NODE INSPECTOR
 --------------
 * steps to use node inspector:
 > node-debug server.js
 - it will display the url where you
 can use node inspector


 MIDDLEWARE
 ----------
 * it's like a filter that affects the data
 that come from an http request

 * you can create custom middleware and call
 it using app.use()

 * the parameter "next" is used to tell node
 that instead of finishing the middleware
 tasks now, he has to continue with the
 next middleware defined


 SOCKET.IO
 ---------
 * socket.io is a framework that extends
 the websocket protocol




 ==========
 MEAN STACK
 ==========

 NODE.JS
 -------
 * Modules and packages.
 > Share files via via module.exports
 > Share packages via NPM


 EXPRESS.JS
 ----------
 * Express is a Node NPM package for building web servers.
 * Node has a built-in module called http that can act as server, but Express provides a nicer structure.


 ANGULAR.JS
 ----------
 * in the mean stack, you spend most of your time with angular


 MONGODB
 -------
 * MongoDB is a document database
 * Each Mongo document has a unique ID
 * Mongo documents map naturally to objects in programming languages
 * Thanks to the use of arrays, Mongo does not need JOINS
 * Mongo is great for scaling
 * Mongo is schemaless: you just add new things
 * The query language in MongoDB is JS



 REVIEW: BASIC MEAN (08/11/2015)
 ===============================

 1. PLAN
 -------
 * Desired functionality
 * User interface


 2. FRONT-END MOCKUP
 -------------------
 * HTML5
 * Link to Bootstrap CDN
 * Bootstrap template (bootstrapzero.com)


 3. ANGULAR APP (NOT PERSISTENT)
 -------------------------------
 * Link to Angular CDN
 * Declare Angular module
 * Include ng-app

 * Declare Angular controller and $scope
 > array of data instead of database

 * Include ng-controller
 * Use ng-repeat and {{ myObject.myField }} to loop data displaying
 * Use <input> field, ng-model, <button> and ng-click for user input
 * Temporary post functionality: unshift user input in data array


 4. EXPRESS SERVER
 -----------------
 * npm init
 * npm install --save express body-parser

 * server.js:

 var express = require('express');
 var bodyParser = require('body-parser');

 var app = express();
 app.use(bodyParser.json());

 app.get('/', function(req, res) {
 res.send('Hello World!');
 })

 app.listen(3000, function() {
 console.log('The server is connected on port 3000');
 })



 5. CONNECT MONGO, DEFINE DB SCHEMA (MODEL)
 ------------------------------------------
 * npm install --save mongoose

 * db.js:

 var mongoose = require('mongoose');
 mongoose.connect('mongodb://localhost/dbName', function() {
 console.log('MongoDB connected');
 });

 module.exports = mongoose;


 * models/posts.js

 var db = require('./db.js');
 var Post = db.model('Post', {
 username: {type: String, required: true},
 body: {type: String, required: true},
 date: {type: Date, required: true, default: Date.now}
 });

 module.exports = Post;



 6. NODE API
 -----------
 * server.js

 var Post = require('./models/posts.js');

 app.get('/api/posts', function(req, res, next) {
 Post.find(function(err, posts) {
 if (err) { return next(err); }
 res.json(posts);
 });
 });

 app.post('/api/posts', function(req, res, next) {
 var post = new Post({
 username: req.body.username,
 body: req.body.body
 });

 post.save(function(err, post) {
 if (err) { return next(err); }
 res.status(201).json(post);
 });

 });




 7. INTEGRATE ANGULAR WITH NODE API
 ----------------------------------
 * Declare $http dependency in controller
 * Use $http.get and $http.post

 app.controller('PostsCtrl', function($scope, $http) {

 $http.get('/api/posts')
 .success(function(posts) {
 $scope.posts = posts;
 });

 $scope.addPost = function() {
 if ($scope.bodyPost) {
 $http.post('/api/posts', {
 username: 'Lourdes',
 body: $scope.bodyPost
 })
 .success(function(post) {
 $scope.posts.unshift(post);
 $scope.bodyPost = null;
 });
 }
 };

 });


 * Move UI file into Node: layouts/posts.html

 app.get('/', function(req, res) {
 res.sendfile('./layouts/posts.html');
 });


 8. CLEAN NODE.JS
 ----------------
 * Break out the API Endpoints Into a Controller
 > move endpoints to /controllers/api/posts.js
 > var router = require('express').Router();
 > change app. for router.
 > namespace the routers:
 router.get('/', ...
 router.post('/', ...

 > module.exports = router
 > in server.js:

 app.use('/api/posts', require('./controllers/api/posts'));


 *	Break out the Sendfile Endpoint Into a Controller
 > move endpoint to /controllers/static.js
 > var router = require('express').Router();
 > change app. for router.
 > module.exports = router
 > in server.js:

 app.use('/', require('./controllers/static.js'));


 9. CLEAN ANGULAR.JS
 -------------------
 * Separate JS from HTML
 > move Angular script to /assets/app.js
 > require the file from /controllers/static.js:

 router.use(express.static(__dirname + '/../assets'));

 > Include link to /app.js in /layout/posts.html


 * Breaking Angular Into Services
 > Define the service in /assets/app.js

 app.service('PostsSvc', function($http) {
 this.fetch = function() {
 return  $http.get('/api/posts')
 }

 this.create = function (post) {
 return  $http.post('/api/posts', post)
 }

 })


 > Include the service as dependency of the controller:

 app.controller('PostsCtrl', function($scope, PostsSvc) {

 PostsSvc.fetch()
 .success(function(posts) {
 $scope.posts = posts
 })

 $scope.addPost = function() {
 if ($scope.postBody) {
 PostsSvc.create({
 username: 'Belen',
 body: $scope.postBody
 }).success(function(post) {
 $scope.posts.unshift(post)
 // clear out the input field
 $scope.postBody = null
 })
 }
 }
 })





 ==========
 ANGULAR.JS
 ==========

 CONTROLLER BASICS
 -----------------
 * the controller is a function
 * the $scope parameter
 * the controller cannot be a global var
 > put it inside of the app module


 CONTROLLERS AND SCOPE
 ---------------------
 * the main goal of a controller is to
 create a $scope object

 * the $scope object is how we communicate
 with the view

 * the $scope object has a two-way
 communication with the view:
 > {{from ctrl to view}}
 > ng-model, ng-events: from view to ctrl

 * the $scope exposes the model to the view,
 but the $scope is not the model

 * the model is the data that is put into
 the scope



 THE CAPABILITIES
 ----------------
 * you can have multiple controllers
 * you can nest controllers
 * binding expressions can be used for the
 html attributes

 * IMPORTANT: use ng-src instead of src to
 load images
 > if not, we will see an error message
 in the js console, since the browser is
 trying to load the image before loading
 the angular script.


 CONTROLLERS AND MODULES
 -----------------------
 var myApp = angular.module('myApp', []);

 myApp.controller('MyController',
 function($scope) {...});


 * good practice: separate components in
 different files
 > main module: app.js
 > controller: mycontroller.js
 > etc


 * good practice: declare parameters
 before the controller function to avoid
 problems of minification

 myApp.controller('MyController',
 ["$scope", function($scope) {...}]);


 DIRECTIVES AND VIEWS
 ====================

 DIRECTIVES
 ----------
 * there are four ways to specify a directive
 in angular:
 > common ones:
 <htmlTag ng-name="...">...</htmlTag>
 <ng-name>...</ng-name>


 > uncommon:
 <div class="ng-name">
 <!-- directive: ng-name -->


 * event directives:
 > ngClick
 > ngDblClick
 > ngMouse...
 > ngChange: detects a change event in
 a lot of input elements
 - requires ngModel


 * ngApp
 * ngBind (alternative to {{...}})
 > ngBindHtml
 - load angular-sanitize script
 and declare dependency in the
 main angular module: ngSanitize

 - ngSanitize removes evthing
 potentially dangerous from the
 html injected with ngBindHtml


 * ngShow and ngHide

 * angular best practice: only manipulate
 the DOM using directives (not within the
 html code, like jquery does)

 * ngCloak: hide parts of your html until
 angular runs
 > this avoids slow browsers to show
 html before angular runs

 <body ng-cloak>

 > need to add special css rule:

 [ng\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak, .x-ng-cloak {
 display: none !important;
 }


 > alternative: load the angular
 script in the <head> of the document


 * ngStyle: to inject css
 > ngClass
 > ngClassEven / ngClassOdd
 - inside ngRepeat


 * ngDisabled, ngChecked, ngMultiple,
 ngReadOnly, ngSelected
 > add or remove the value depending
 if they are set to true or false


 * ngForm
 > allows us to nest forms


 * ngSubmit
 * ngHref and ngSrc
 > the link does not run until angular
 is loaded


 * ngNonBindable: do not parse this element
 with angular



 DIRECTIVES (2)
 --------------
 * ng-bind: {{}}
 * ng-model: pushes data to the $scope
 object

 * ng-click
 > ng-submit

 * ng-repeat
 * filters
 expression | filterName:parameter
 > currency
 > date
 > filter (search term)
 > json
 > limitTo
 > lowercase, uppercase
 > number
 > orderBy:+/-


 * example of ng-model inside of a select
 using the value attribute

 <select ng-model="whatever">
 <option value="value_used">value_displayed


 * ng-show/hide
 > ng-show="user" (show if true)
 > ng-hide="!user"


 * ng-include: bring html from an external
 source
 > break html in pieces
 > re-use a block of html

 ng-include=" 'fileName.html' "


 * more than 50 built-in directives:
 > mouse
 > keys
 > css


 * custom directives
 > many open source projects



 SERVICES
 ========
 * in angular, a service is just a worker
 object that performs some business logic
 and that we inject in a controller or into
 another service

 * built-in and custom services

 * $http is a service

 * angular provides services to wrap
 these js functions:
 > setTimeOut: $timeout
 > setTimeInterval: $interval


 * to use an angular service instead of
 a javascript function is better for unit
 testing


 CREATING YOUR FIRST CUSTOM SERVICE
 ----------------------------------
 myApp.factory('serviceName', function() {
 return {

 };
 });


 * inject service into controller



 ROUTING
 =======

 BASICS
 ------
 * load ngRoute module

 * set up the layout view
 > with the ng-view directive


 * configure routes:

 $routeProvider
 .when('/', {
 templateUrl: "main.html",
 controller: "MainController"
 })


 * update internal links

 href="#/page.html"






 */