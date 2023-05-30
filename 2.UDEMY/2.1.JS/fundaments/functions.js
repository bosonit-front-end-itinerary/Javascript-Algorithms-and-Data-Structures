//como definir funciones de 4 maneras diferentes

//opción 1
//no se recomienda utilizar esta función
function saludar(nombre) { //se añade el argumento nombre para utilizarlo cuando se imprima el nombre que quieras
    console.log( arguments );//para imprimir todos los argumentos que imprime nuestra función
    console.log('Hola ' + nombre);
}

  //opción 2
const saludar2 = function( nombre ) {
    console.log('Hola ' + nombre);
}

  //opción 3 ***favourite ones to use***
  const saludarFlecha = () => { //se elimina la palabra function de la izquierda y se sustituye por una doble flecha a la derecha
    console.log('Hola Flecha')
}

  const saludarFlecha2 = ( nombre ) => { //igual opción3 pero se le pasan unos parámetros concretos para añadir el nombre que queramos
    console.log('Hola ' + nombre)
}

saludar('Noa', 31, false, 'Spain');
saludar2()
saludarFlecha()
saludarFlecha2('Miles')


//.......................


//retorno de las funciones

//opcion 1
function sumar( a, b ) {
    return a + b;
}

console.log( sumar(1, 2) ) //toma los parámetros de la función a,b para operar en el return con los valores que se 

//opcion 2
const sumar2 = ( a, b ) => {
    return a + b;
}

console.log( sumar2(1, 2) )

//opcion 3
const sumar3 = ( a, b ) => a + b; //si nuestra funcion solo tiene dentro un return podemos simplificarla de esta manera
console.log( sumar3(1, 2) )


//........................

//funcion para conseguir numero aleatorio

//opcion 1
function getAleatorio(){
  return Math.random();
}
console.log( getAleatorio() );

//opcion 2 y más utilizada -menos código- para conseguir numero aleatorio
const getAleatorio2 = () => Math.random();

console.log( getAleatorio2() );