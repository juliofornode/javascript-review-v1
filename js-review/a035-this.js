//the this keyword

//3 main cases:
//1. Inside a normal function, it points to the global object
function myFunction() {
  console.log(this);
}

//2. Inside a normal object method, it points to the object
const persona {
  name: 'Julio',
  sayThis: function() {
    console.log(this);
  }
}


//3. WEIRD: Inside a function inside of a function method, it points to the
//global object
const persona {
  name: 'Julio',
  sayThis: function() {
    var inside = function() {
      console.log(this);
    };
    inside();
  }
}


//To avoid weird situations line the one above, use var self = this;
