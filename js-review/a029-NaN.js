//NaN stands for 'not a number'
'abc'/2 //NaN


//weird thing: NaN compared with anything gives false
NaN == 'hello' //false
NaN == NaN //false

//we can use the method isNaN() to check if anything is Na
isNaN(NaN) //true
//but other than that isNaN() behaves weird
isNan(1) //false
isNan('1') //false
isNan('A') //true


//since
NaN == NaN //false
//the only bullet-proof way to check if some JS element is NaN is:
(a !== a) //if this is true, then a is NaN
