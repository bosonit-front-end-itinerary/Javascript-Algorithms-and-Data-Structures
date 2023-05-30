//todos los primitivos no se ven afectados porque son pasados por valor, no estamos afectando al mismo lugar de memoria
let a = 10;
let b = a;
a = 30;
console.log({a,b});

//todos los objetos son pasados por referencia
let juan = {nombre: 'Juan'};
let ana = juan;
ana.nombre = 'Ana';

console.log({juan,ana})

//para que en un objeto que es pasado por referencia tengan las variables de abajo valores diferentes hemos de encapsular el parámetro con llaves como si fuera un objeto y aplicarle el operador spread
const cambiaNombre = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiaNombre( peter);

console.log({peter, tony})

//otro ejemplo, mismo planteamiento que el anterior

const frutas = ['Manzana', 'Pera', 'Piña'];
const otrasFrutas = [...frutas];

otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas });

//para medir el rendimiento de varias cosas en JS
console.time('spread');
const otrasFrutas2= [...frutas];
console.timeEnd('spread');

console.time('slice');
const otrasFrutas3=frutas.slice();
console.timeEnd('slice');
