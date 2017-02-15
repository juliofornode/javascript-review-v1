
var myModule = function() {
    var secret = 'secreto';

    return {
        mySecret: secret
    }
};

console.log(myModule.mySecret);


var myFactory = function(name, lastName) {
    var myName = name;
    var myLastName = lastName;
    var myFullName = function() {
        return myName + ' ' + myLastName;
    };

    return {
        theName: myName,
        theLastName: myLastName,
        theFullName: myFullName
    }
};

var julio = myFactory('julio');
julio.theLastName = 'colomer';
console.log(julio.theFullName());


var myConstructor = function(name, lastName) {
    this.name = name;
    this.lastName = lastName;
    this.fullName = function() {
        return this.name + ' ' + this.lastName;
    };
};

var mariau = new myConstructor('mariau');
mariau.lastName = 'colomer';
console.log(mariau.fullName());







