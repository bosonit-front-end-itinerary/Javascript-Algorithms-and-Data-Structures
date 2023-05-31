//forEach
//recorre cada item y te da su posición

[1, 2, 3].forEach(function (item, index) {
    console.log(item, index); 
    /*
    1 0
    2 1
    3 2*/ 
});

//map
// se utiliza para iterar sobre cada elemento de un arreglo y aplicar una función a cada elemento, devolviendo un nuevo arreglo con los resultados. 
const three = [1, 2, 3];
const doubled = three.map(function (item) {
    return item * 2;
});
console.log(doubled); //[2, 4, 6]

//filter
//se utiliza para crear un nuevo arreglo con todos los elementos que cumplan con cierta condición especificada
//ints = [1, 2, 3]
//evens = [2]
const ints = [1, 2, 3];
const evens = ints.filter(function (item) {
    return item % 2 === 0;
});
console.log(evens); //[2]

