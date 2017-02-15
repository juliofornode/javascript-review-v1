const objeto = {
  nombre: 'John',
  apellido: 'Wayne',
  edad: 125
};


//ITERATORS: FOR..IN AND MAP WITH OBJECT.KEYS()

//we need to declare key
let key;
let frase = '';

for (key in objeto) {
  console.log(key + ': ' + objeto[key]);
}

//map returns an array
Object.keys(objeto).map(key => {
  return(key + ': ' + objeto[key]);
})
