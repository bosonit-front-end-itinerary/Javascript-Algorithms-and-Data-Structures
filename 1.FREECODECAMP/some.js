//Utiliza el método SOME dentro de la función checkPositive para comprobar si algún elemento en arr es positivo. La función debe devolver un valor booleano.

function checkPositive(arr) {
    return arr.some(elem => elem > 0);
}

console.log(checkPositive([1, 2, 3, -4, 5]));