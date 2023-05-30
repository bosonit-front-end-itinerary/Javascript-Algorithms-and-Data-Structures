let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo:', juegos.length); //calcula longitud del array


let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];
console.log({primero, ultimo}); //imprime el último valor del array


juegos.forEach((elemento, indice, arr) => {
console.log({elemento, indice, arr})
}); //recorre el array con los parámetros entre corchetes: key, index, array


let nuevaLongitud = juegos.push('F-Zero');
console.log({nuevaLongitud, juegos}); //añade valor al final del array


nuevaLongitud = juegos.unshift('Crash Bandicoot');
console.log({nuevaLongitud, juegos});//añade valor al principio del array


let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos}) //Borra el último valor del array


let juegosBorrados = juegos.splice(3,2);
console.log({juegosBorrados, juegos}); //elimina 2 elementos de la posición 3


let metroidIndex = juegos.indexOf('Metroid');
console.log({metroidIndex}) //para comprobar si el elemento se encuentra dentro del array