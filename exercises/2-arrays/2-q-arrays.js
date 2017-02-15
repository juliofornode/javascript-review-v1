/*

 PROBLEMAS FRECUENTES
 uso de splice vs. slice
 - splice modifica el array original, slice no.
 - splice puede mutilar o sustituir los elementos del array original.
 - el resultado de splice es el nuevo array extraido.
 - el resultado de slice es el nuevo array creado.
 - splice se utiliza para las operaciones con remove:
 > la posicion inicial se marca con indexOf(itemToRemove)
 > se borra solo uno
 > myArray.splice(myArray.indexOf(item), 1);


 uso de forEach vs. for loop.
 - it does not seem to offer extra value
 - apply a function to modify each element of an array
 - it requires array[index] = ...


 uso de map vs. for loop
 - map creates a new array
 - map needs to return the output


 OPERACIONES TIPICAS CON ARRAYS
 buscar item
 buscar el primer item que cumple una condicion
 recortar
 chequear si los items cumplen una condicion
 filtrar
 ordenar, poner al reves, aplanar
 sumar, sumar unicos, sumar en cremallera
 forEach: operar sobre cada elemento
 map: operar para crear un nuevo array
 reduce: operar para crear un resultado
 convertir en string u objeto

 */
