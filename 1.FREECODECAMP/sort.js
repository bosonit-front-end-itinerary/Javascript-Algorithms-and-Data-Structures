//Ordena un arreglo alfabéticamente con el método sort

function ascendingOrder(arr) {
    return arr.sort(function(a, b) {
        return a - b;
    });
}

ascendingOrder([1, 5, 2, 3, 4]);
//Esto devolvería el valor de [1, 2, 3, 4, 5].

//otra forma de ordenarlo sería con:
function alphabeticalOrder(arr) {
    // Cambia solo el código debajo de esta línea
    return arr.sort(function(a, b) {
        return a === b ? 0 : a < b ? -1 : 1;
    });
    // Cambia solo el código encima de esta línea
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
//Esto devolvería el valor de ["a", "a", "c", "d", "g", "z"].


function reverseAlpha(arr) {
return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
});
}

reverseAlpha(['l', 'h', 'z', 'b', 's']);
  //Esto devolvería el valor de ['z', 's', 'l', 'h', 'b'].


//..................


//Return a Sorted Array Without Changing the Original Array
let newArray1 = arr.concat();
return newArray.sort(function(a, b) {
        return a - b;
    });


let newArray2 = arr.concat();
return newArray.sort((a, b) => a - b);