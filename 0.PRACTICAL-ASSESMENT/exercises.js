//exercise 1
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
    //utilizar metodo filter
    /*filter calls a function on each element of an array and returns a new array containing only the elements for which that function returns a truthy value - that is, a value which returns true if passed to the Boolean() constructor. In other words, it filters the array, based on the function passed to it. Like map, it does this without needing to modify the original array.*/

function cleaningTheMessyCode() {
    const arrDirty = [NaN, 0, 5, false, -1, '',undefined, 3, null, 'test'];

    let positiveNums = arrDirty;
    const truthyValues = arrDirty.filter(positiveNums > 0)
    return truthyValues
}
console.log(cleaningTheMessyCode());


//exercise 3

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
//exercise 5
//exercise 6
//exercise 7
//exercise 8
//exercise 9
//exercise 10
// const poetry = { POET: 'Sylvia Plath', LasTPoEm: 'Edge'};
// const myObjLowercase = toLowercaseKeys(poetry);

// console.log(myObjLowercase);


//exercise 11