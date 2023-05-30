//multidimensional arrays
let nestedArray = [ 
    ['deep'], 
    [['deeper'], ['deeper']], 
    [[['deepest'], ['deepest']],[[['deepest-est?']]]] 
];
console.table(nestedArray)

//---------------------------------
//Access Property Names with Bracket Notation

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};
console.log(foods.apples)
function checkUnit(fruitValue) {
// Only change code below this line
return foods[fruitValue];
// Only change code above this line
}

console.log(checkUnit("apples"));
console.log(checkUnit("bananas"));
console.log(checkUnit("strawberries"));

//---------------------------------

//Echa un vistazo al objeto que hemos proporcionado en el editor de código. El objeto user contiene tres claves. La clave data contiene cinco claves, una de las cuales contiene un arreglo de friends. A partir de esto, puedes ver lo flexibles que son los objetos como estructuras de datos. Hemos empezado a escribir una función addFriend. Termina de escribirla para que tome un objeto user y agregue el nombre del argumento friend al arreglo almacenado en user.data.friends y devuelva ese arreglo.

let user = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
        'Sam',
        'Kira',
        'Tomo'
        ],
        location: {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        }
    }
};

function addFriend(userObj, friend) {
    // Cambia solo el código debajo de esta línea
    userObj = user;
    userObj.data.friends.push("Pete");
    return user.data.friends
    // Cambia solo el código encima de esta línea
}

console.log(addFriend(user, 'Pete'));