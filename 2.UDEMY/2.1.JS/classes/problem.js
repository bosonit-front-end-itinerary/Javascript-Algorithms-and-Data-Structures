//para imprimir una propiedad de un objeto dentro de un objeto es más correcto usar this.propiedad
const noa = {
    nombre: 'Noa',
    edad: 31,
    imprimir(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

noa.imprimir();