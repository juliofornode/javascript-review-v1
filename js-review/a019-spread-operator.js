//spread operator in arrays

const uno = [1,2,3];
const dos = [4,5,6];

const concatenados = [...uno, ...dos]; //[1,2,3,4,5,6]


//spread operator in objects
//IMPORTANT: a proposal, not standarized (works with babel-preset-stage-1)

var uno = {name: 'Julio'};
var dos = {lastname: 'El Mejor'};

var tres = {...uno, ...dos}
//same as: Object.assign({}, uno, dos);
