//exercise 1
//Dado un array de objetos, obtener el objeto con el id 3

function getId() {
    const arrNames = [
        {id: 1, name: 'Pepe'},
        {id: 2, name: 'Juan'},
        {id: 3, name: 'Alba'},
        {id: 4, name: 'Toby'},
        {id: 5, name: 'Lala'}
    ]

    const chosenId = arrNames.filter(elem => elem.id === 3)
    return chosenId;
}
console.log(getId());

//exercise 2
//Dado un array de valores, devolver un array truthy (sin valores nulos, vacíos, no números, indefinidos o falsos)
    /*filter calls a function on each element of an array and returns a new array containing only the elements for which that function returns a truthy value - that is, a value which returns true if passed to the Boolean() constructor. In other words, it filters the array, based on the function passed to it. Like map, it does this without needing to modify the original array.*/

function cleaningTheMessyCode() {
    const arrDirty = [NaN, 0, 5, false, -1, '',undefined, 3, null, 'test'];

    let positiveNums = arrDirty;
    const truthyValues = arrDirty.filter(positiveNums > 0)
    return truthyValues
}
console.log(cleaningTheMessyCode());


//exercise 3
//Dado un array de ciudades, sacar todas las ciudades de España que no sean capitales

function getCity() {
    const arrCities = [
        {city: 'Logroño', country: 'Spain', capital: false},
        {city: 'Paris', country: 'France', capital: true},
        {city: 'Madrid', country: 'Spain', capital: true},
        {city: 'Rome', country: 'Italy', capital: true},
        {city: 'Oslo', country: 'Norway', capital: true},
        {city: 'Jaén', country: 'Spain', capital: false}
    ]  

    const notSpanishCapital = arrCities.filter(elem => elem.capital === false && elem.country === 'Spain')
    return notSpanishCapital;

}
console.log(getCity());

//exercise 4
//Dado tres arrays de números, sacar en un nuevo array la intersección de estos. 

const arrNumber1 = [1,2,3];
const arrNumber2 = [1,2,3,4,5];
const arrNumber3 = [1,4,7,2];

let common = arrNumber1.filter(x => arrNumber2.indexOf(x) !== -1 && arrNumber3.indexOf(x) !== -1)
console.log("The common elements are: " + common);

//exercise 5
//Dado un array de ciudades, sacar en un nuevo array las ciudades no capitales con unos nuevos parámetros que sean city (he cambiado el nombre a notACapital para mejor comprension) y isSpain.
//El valor de isSpain será un booleano indicando si es una ciudad de España.*/

const arrCities2 = [
    {city: 'Logroño', country: 'Spain', capital: false},
    {city: 'Bordeaux', country: 'France', capital: false},
    {city: 'Madrid', country: 'Spain', capital: true},
    {city: 'Florence', country: 'Italy', capital: false},//he cambiado el booleano a falso porque la capital de Italia es Roma
    {city: 'Oslo', country: 'Norway', capital: true},
    {city: 'Jaén', country: 'Spain', capital: false}
];

function getTowns(towns) { 
    //sacamos las ciudades no capitales a nuevo array 'nonCapitalTowns'
    const nonCapitalTowns = towns.filter(town => town.capital === false);
    //en otra variable guardamos el nuevo array con map y le pedimos que muestre notACapital y isSpain
    const resultTowns = nonCapitalTowns.map(town => {
        return { notACapital: town.city, isSpain: town.country === 'Spain' };
    });

    return resultTowns; //retorna el resultado de ese mapeo
}

const resultTowns = getTowns(arrCities2); //en variable guardamos la función y le pasamos el array original 
console.log(resultTowns); //mostramos por pantalla la variable anterior

//exercise 6
//exercise 7
//exercise 8

//exercise 9
//Crea una función que a partir de un objeto de entrada, retorne un objeto asegurándose que las claves del objeto estén en lowercase.
//La función debe tener un objeto como único parámetro.

const myObj = {
    NaMe: 'Maria',
    AgE: 30,
    CiTy: 'Madrid'
};
const objTransformed = transformKeyToLowercase(myObj);

function transformKeyToLowercase(obj) {
    const myObjLowercase = {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            const newKey = key.toLowerCase();
            myObjLowercase[newKey] = value;
        }
    }
    return myObjLowercase;
}

console.log(objTransformed);


//exercise 10
//Crea una función que elimine las etiquetas html o xml de un string.
//La función debe tener un string como único parámetro.

function removingHtmlXmlTags(str){
    return str.replace(/<[^>]*>/g, '');
}

let tags = '<div><span>lorem</span> <strong>ipsum</strong></div>'
console.log(tags);

let result = removingHtmlXmlTags(tags)
console.log(result)


//exercise 11
//Crea una función que tome un array como parametro y lo divida en arrays nuevos con tantos elementos como sean especificados.
//La función debe tener dos parámetros:
//El primer parámetro es el array entero que se quiere dividir.
//El segundo parámetro es el número de elementos que deben tener los arrays en los que se divida el array original del primer parámetro.

//Ejemplo de uso de la función:
//const result = splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 3);
//console.log(result); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]

function splitArrayIntoChunks(arr, size) {
    let result = [];
    
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    
    return result;
}

  console.log(splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 4)); //[ [ 1, 2, 3, 4 ], [ 5, 6, 7 ] ]