const dia = 1;
const horaActual = 10;

let horaApertura;
let mensaje;

horaApertura = ( [0,6].includes( dia ) ) ? 9 : 11;

mensaje = ( horaActual >= horaApertura ) ? 'Está abierto' : `Está cerrado, hoy abrimos a las ${horaApertura}`;

//.................................

//protip-ternario

const elMayor = (a, b) => ( a > b ) ? a : b;

const hasMembership = ( member ) => (member) ? '2 euros' : '10 euros';

console.log( elMayor(20,15) ); //20
console.log( hasMembership(false) ); //10 euros

//otro uso
const friend = true; //RuPaul
const friendsArr = [
    'Andrea',
    'Sergi',
    'Lola',
    friend ? 'RuPaul' : 'Benzema'
];

console.log( friendsArr );

//otro uso de operadores ternarios para puntuación de notas en base a resultados
const nota = 100; //A+
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A' :
              nota >= 85 ? 'B' :
              nota >= 80 ? 'C' : 'F';

console.log({ nota, grado });