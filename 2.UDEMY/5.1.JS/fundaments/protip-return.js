//función convencional
function crearPersona( nombre, apellido ){
    return {
        nombre: nombre,
        apellido: apellido
    }
};

const persona = crearPersona( 'Noa', 'Trujillo');
console.log(persona);

//funcion editada y optimizada. Los segundos valores de nombre y apellido no son parametros, son keys
const crearPersona1 = ( nombre, apellido ) => ({nombre, apellido});

const persona1 = crearPersona1( 'Noa', 'Trujillo');
console.log(persona1);

//
function imprimeArgumentos(){
    console.log(arguments);
}

//para trabajar argumentos en funciones de flecha e imprimirlos todos
//no se puede añadir ningún valor después del parámetro REST, pero si queremos añadir un valor antes hemos de encapsularlo así en console.log({edad, args})
const imprimeArgumentos2 = (...args) => { 
console.log(args)
}
imprimeArgumentos2(10, true, false, 'Noa', 'Hola');

//regresar argumentos con "valores"/key = casado:10, vivo: true...etc)

const imprimeArgumentos3= (...args) => { 
return args;
}
const [ casado, vivo, nombre, saludo ] = imprimeArgumentos3(10, true, false, 'Noa', 'Hola');
console.log({casado, vivo, nombre, saludo })

//cambiar nombre de key/parametro dentro de una constante
const { apellido: nuevoApellido } = crearPersona( 'Noa', 'Woods');
console.log({ nuevoApellido });