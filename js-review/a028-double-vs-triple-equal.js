//double equal checks only the value
(9 == '9'); //true

//double equality uses "type coertion", that can lead to a wide number of rare situations
//in order to deal with them we will have to use a JS equality table
//like dorey.github.io/Javascript-Equality-Table


//triple equal is also called "strict equality"
//triple equal checks the value and the data type
(9 === '9'); //false
