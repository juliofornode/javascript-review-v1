//JSON.PARSE(STRING) CONVERTS A JSON STRING INTO A MANIPULABLE JS OBJECT

//When receiving data from a web server, the data is always a string.
//Parse the data with JSON.parse(), and the data becomes a JavaScript object.

var fromServer = '{ "name":"John", "age":30, "city":"New York"}';
var obj = JSON.parse(fromServer);
console.log(obj);

//JSON.STINGIFY(OBJ) CONVERTS A JS OBJECT INTO A SENDABLE JSON STRING

//When sending data to a web server, the data has to be a string.
//Convert a JavaScript object into a string with JSON.stringify().
var obj = { "name":"John", "age":30, "city":"New York"};
var toJSON = JSON.stringify(obj);
console.log(toJSON);


//EXCEPTIONS:

//It is also possible to stringify JavaScript arrays:
var arr = [ "John", "Peter", "Sally", "Jane" ];
var toJSON = JSON.stringify(arr);
console.log(toJSON);

//In JSON, date objects are not allowed.
//The JSON.stringify() function will convert any dates into strings.

//In JSON, functions are not allowed as object values.
//The JSON.stringify() function will remove any functions from a JavaScript
//object, both the key and the value.
