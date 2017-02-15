/*

Things to do with strings:
- Transform (case, repeat, trim, truncate)
- Combine
- Search
- Crop
- Type conversion

 */

var myString = 'this is a literal string';

var numeric = '0123456789';

console.log(myString.toUpperCase());
console.log(myString.repeat(2));
console.log(myString.trim());
console.log(_.truncate(myString, {'length': 20}));

console.log(myString.concat(numeric));

console.log(myString.search('literal'));
console.log(myString.indexOf('literal'));
console.log(myString.charAt(10));
console.log(myString.match('a'));

console.log(myString.slice(4));
console.log(myString.substring(4));
console.log(myString.substr(4));