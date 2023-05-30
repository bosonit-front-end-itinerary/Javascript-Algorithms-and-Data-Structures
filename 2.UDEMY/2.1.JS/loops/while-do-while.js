//bucle for tradicional para imprimir cada uno de los valores de un array
//***bucle más recomendado para arrays***
const heroes = ['Batman', 'Black Widow', 'Wonderwoman', 'Aquaman'];

console.warn ('For traditional');
for( let i = 0; i < heroes.length; i++ ){
    console.log( heroes[i]);
}

console.warn('For in');
for( let i in heroes ){
    console.log( heroes[i] );
}