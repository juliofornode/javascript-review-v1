//we use namespacing in ES5 to avoid creating global variables
//Instead of doing:
var uno = 1;
var dos = function() {
  return 2;
}
var tres = 3;

//we do:
var myProject = {
  uno: 1,
  dos: function() {
    return 2;
  },
  tres: 3
};

//and we access the variables using namespacing

console.log(myProject.uno);
console.log(myProject.dos());
