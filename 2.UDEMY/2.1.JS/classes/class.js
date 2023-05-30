//constructor: todo lo necesario para crear futuras nuevas instancias. metodo que se va a ejecutar cada vez que se crea nueva instancia. sintaxis mucho más limpia
class Persona {

      //propiedad estática
    static _conteo = 0;
    //get como metodo estatico
    static get conteo() {
        return Persona._conteo + ' instancias';
    }
    //metodo estático
    static mensaje() {
        console.log(this.nombre);
        console.log('Hola coders, soy un método estático');
    }

//estas son las propiedades que vamos a usar en nuestro constructor
    nombre = ''; 
    codigo = '';
    frase = '';
    comida = '';
    
//inicializar los valores de las propiedades de arriba dentro de los paréntesis de nuestro constructor
    constructor(nombre, codigo, frase) {
      //los valores definidos abajo son contenedores para ser utilizados en cada instancia de clases
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }


//GETTERS y SETTERS
    //inicializar con la palabra set y luego el nombre que elijamos que empiece por set también, para que al instanciarlo del mismo modo que un método veamos que es un set. siempre tenemos que rellenar el método (solo un argumento)
    set setComidaFavorita(comida){
    this.comida = comida;
}

//aconsejable que en los GETS añadamos un return
    get getComidaFavorita(){
    return `La comida favorita de ${this.nombre} es ${this.comida}`;
}
    
    quienSoy(){
        console.log(`Soy ${this.nombre} y mi trabajo es ${this.codigo}`);
    }
    
    miFrase(){
        console.log(`${this.codigo} dice: ${this.frase}`)
    }
}

//instanciar nueva instancia a partir de nuestra clase Persona
const spiderman = new Persona('Noa', 'Web developer', 'I love you darling'); 
const miles = new Persona('Miles', 'plumber', 'I love you to the moon and back');

spiderman.miFrase();

spiderman.setComidaFavorita = 'El pie de cereza de la tia May';
console.log(spiderman);
console.log(spiderman.getComidaFavorita);

//para contar cuantas instancias tenemos de nuestra clase
console.log('Conteo estático',Persona._conteo);//imprimir propiedad estatica
console.log(Persona.conteo);//imprimer get estatico
Persona.mensaje();//imprimir metodo estático