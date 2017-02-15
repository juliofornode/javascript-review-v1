/**

 ARRAYS
 ======

 COMBINE
 concat()


 CONDITIONAL
 every(f(item))
 some(f(item))


 FILTER
 filter(f(item))
 _.remove() // like filter, but mutates array
 _.difference(arr1, arr2) // array of different items
 _.intersection(arr1, arr2) // array of common items
 _.without(arr, itemsToRemove)


 SEARCH
 indexOf()
 lastIndexOf()
 find(f(item)) // find first item with condition
 findIndex()


 TYPE CONVERSION
 join()
 toString() // cannot modify separator
 _.fromPairs() // array pairs to object key-value


 BREAK
 push()
 pop()
 _.dropRight(arr, itemsToDropFromEnd)
 unshift()
 shift()
 _.drop(arr, itemsToDropFromStart)
 slice()
 splice(index, howMany, item1, ..... , itemX) //splice: cortar y empalmar una tuberia
 _.chunk(array, chunkSize) //partir en trozos
 _.pull(array, item to pull off)


 TRANSFORM
 reverse()
 sort() // not for numbers, problem 1,11
 arrayOfNumbers.sort(function(a, b) {
  return a - b;
});
 _.flatten()
 _.flattenDeep()
 _.uniq()
 _.union(arr1, arr2) // array of common unique values
 _.zip(arr1, arr2) // cremallera: [[a1,b1],[a2,b2]]


 APPLY TO EVERY ELEMENT
 forEach(f(element, index, array)) // changes current array, needs to specify array[index] = newElement, does not require return

 //Since it returns a value of undefined, forEach() is not chainable like map(), filter() or reduce().


 CREATE A NEW ARRAY
 map(f(element, index, array), initialValue) //requires return


 CALCULATE A NUMBER
 reduce(f(current, prev, index, array))











 */
