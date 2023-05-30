/*Currying restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.*/

function add(x) {
    return function (y) {
        return function (z) {
            return x + y + z
        } 
    } 
}
add(10)(20)(30); //60


//refactorizado en ES6
const add = x => y => z => x + y + z

add(10)(20)(30); //60