//22/01/2026
/*let persona= {
    _nombre:"David",
    apellido:"Melgoza",
    edad:22,
    idioma : 'es',
    email:'davidmelgoza@gmail.com',
     get nombre_completo(){
        return this.nombre + ' ' + this.apellido;
    },
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    cantidad_de_AS(){
        let nombre_c = this.nombre_completo;
        let contador = 0;
        for(let i=0; i<nombre_c.length; i++){
            if(nombre_c[i]=='a' || nombre_c[i]=='A'){
                contador++;
            }
            
        }
        return contador;
    },
   /* get nombre(){
        return this.nombre;
    }*/
//};
/*
console.log(persona);
console.log(persona.nombre);
console.log(persona.nombre_completo);
console.log("Cantidad de As en en el nombre completo: " + persona.cantidad_de_AS());
persona.telefono = "1234567890";
delete persona.telefono;
console.log(persona);

persona.nombre = 'cosa';
console.log(persona.nombre);

console.log(persona.lang);
persona.lang = 'en';
console.log(persona.lang);
//Otra forma de definir objetos
let persona2 = new Object();
persona2.nombre = "David";
persona2.apellido = "Melgoza";
persona2.direccion = "Conocida";
persona2.telefono = "1234567890";
persona2.nombre_completo = function(){
    return this.nombre + ' ' + this.apellido;
};
console.log(persona2);
console.log(persona2.nombre_completo());
console.log(persona2['telefono']);
//for in
for(let propiedad in persona2){
    console.log(propiedad+':'+persona2[propiedad]);
}
//otras formas de precentar informacion 
let personaArray = Object.values(persona);
console.log(personaArray);
//Mandarlo cono JSON
let personaSTRING = JSON.stringify(persona);
console.log(personaSTRING);

persona.nombre = 'Erick Dalet';
console.log(persona);*/

/*function Persona(nombre, apellido, parentesco,email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.parentesco = parentesco;
    this.email = email;
}
let padre = new Persona('David', 'Melgoza', 'padre', 'hola@gmail.com');
//console.log(padre);
let madre = new Persona('Martha', 'Martinez', 'madre', 'jijiij@gmail.com');
//console.log(madre);
//Proyecto 
let personasVec = [padre, madre];

for(let ren in personasVec){
    console.log('Posicion' + ren)
    for(let valor in personasVec[ren]){
        console.log(valor + ': ' + personasVec[ren][valor]);
}
}*/
/*
function Computadora(procesador, memoria, tipo, marca, categoria){
    this.procesador = procesador;
    this.memoria = memoria;
    this.tipo = tipo;
    this.marca = marca;
    this.categoria = categoria;
    this.Caracteristicas = function(){
        return `${this.tipo} ${this.marca} ${this.categoria} ${this.procesador}${this.memoria}`;
}
}
let compu1 = new Computadora('Intel i9', '64GB', 'Laptop', 'Dell', 'Gamer');
console.log(compu1.Caracteristicas());

let miObjet = new Object();
miObjet= compu1;
console.log(miObjet);

//Prototype
Computadora.prototype.almacenamiento = "00248";
let miObjeto2 = {};
miObjeto2 = miObjet;
miObjeto2.procesador = 'Intel i7';
console.log(miObjeto2);
miObjet.procesador = 'AMD Ryzen 9';
console.log(miObjet.procesador);
*/
//Metodo call
/*
let persona1 = {
    nombre: 'David',
    apellido: 'Melgoza',
    n_completo: function(titulo, telefono){
        return `${titulo} ${this.nombre} ${this.apellido} ${telefono}`;
    }
}

let persona2 = {
    nombre: 'Erick',
    apellido: 'Dalet'
    }
console.log(persona1.n_completo('isc','telefono:1234567890'));
console.log(persona1.n_completo.call(persona2,'isc','telefono:0987654321'));
console.log(persona1.n_completo.apply(persona2,['isc','telefono:0987654321']));*/

//Una clase es un molde que nos ayuda a crear objetos con caracteristicas y comportamientos similares
class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this.apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nCompleto(){
        return `El nombre completo es:${this._nombre} ${this._apellido}`;
    }
    toString(){
        return this.nCompleto();
    }
}
class Empleado extends Persona{
    constructor(nombre, apellido,tarjeta,deparatamento){
        super(nombre, apellido);
        this._tarjeta = tarjeta;
        this._departamento = deparatamento;
    }
    get tarjeta(){
        return this._tarjeta;
    }
    set tarjeta(tarjeta){
        this._tarjeta = tarjeta;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
}
    nCompleto(){
        return `${super.nCompleto()}, Datos laborales: ${this._departamento} Tarjeta: ${this._tarjeta}`;
    }
}
let per1 = new Persona('Daivid', 'Melgoza');
console.log(per1);
let per2 = new Persona('Erick', 'Dalet');
console.log(per2);
console.log(per1.nombre);
per1.nombre = 'Xavier';
console.log(per1.nombre);
let empleado1= new Empleado('David', 'Melgoza', '1234650', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombre);
console.log(per1.nCompleto());
console.log(empleado1.nCompleto());

//----------------------------------------------------------------------------------
class Familia{
    constructor(nombre,apellido,parentesco, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._parentesco = parentesco;
        this._edad = edad;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
     get parentesco(){
        return this._parentesco;
    }
    set parentesco(parentesco){
        this._parentesco = parentesco;
    }
     get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }
}
let padre = new Familia('Heriberto', 'Melgoza', 'Padre', 52);
let madre = new Familia('Martha', 'Martinez', 'Madre', 48);
let hermano = new Familia('julieta', 'Melgoza', 'Hermano', 18);
let vec_familia = [padre, madre,hermano];
    for(let c in vec_familia){
        console.log('Posicion ' + c);   
    for(let v in vec_familia[c]){
        console.log(v + ': ' + vec_familia[c][v]);
        }
    }
    //-------------------Dia 4 -----------------------//
console.log(per1.toString());
console.log(empleado1.toString());