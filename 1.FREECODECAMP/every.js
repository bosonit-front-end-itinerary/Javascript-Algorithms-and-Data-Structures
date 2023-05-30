//Comprobar que todos los elementos son positivos y devuelven un resultado booleano

function checkPositive(arr) {
return arr.every((arr) => arr > 0);
}

console.log(checkPositive([1, -2, 3, 4, 5]));