/**
 * Objetos en JavaScript: literales, getters/setters, funciones constructoras,
 * prototype, for...in, JSON y los métodos call/apply.
 * Ejecutar: node 03-objetos-y-clases/objetos.js
 */
'use strict';

// Objeto literal con getters, setters y métodos
const persona = {
    nombre: 'Ana',
    apellido: 'Torres',
    idioma: 'es',
    get nombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    },
    get lang() {
        return this.idioma.toUpperCase();
    },
    set lang(lang) {
        this.idioma = lang.toUpperCase();
    },
    contarLetra(letra) {
        return [...this.nombreCompleto.toLowerCase()].filter((c) => c === letra.toLowerCase()).length;
    },
};

// Función constructora y prototype
function Computadora(procesador, memoria, tipo, marca) {
    this.procesador = procesador;
    this.memoria = memoria;
    this.tipo = tipo;
    this.marca = marca;
}
Computadora.prototype.caracteristicas = function () {
    return `${this.tipo} ${this.marca} – ${this.procesador}, ${this.memoria}`;
};

// call / apply: reutilizar un método con otro `this`
const conTitulo = {
    nombre: 'Ana',
    apellido: 'Torres',
    presentar(titulo, telefono) {
        return `${titulo} ${this.nombre} ${this.apellido} (${telefono})`;
    },
};

module.exports = { persona, Computadora, conTitulo };

if (require.main === module) {
    console.log(persona.nombreCompleto);
    console.log(`Letras "a" en el nombre: ${persona.contarLetra('a')}`);
    persona.lang = 'en';
    console.log(`Idioma: ${persona.lang}`);

    // Agregar y eliminar propiedades dinámicamente
    persona.telefono = '555-000-0000';
    delete persona.telefono;

    // Recorrer propiedades con for...in
    const pc = new Computadora('Intel i9', '64 GB', 'Laptop', 'Dell');
    for (const propiedad in pc) {
        if (Object.hasOwn(pc, propiedad)) console.log(`${propiedad}: ${pc[propiedad]}`);
    }
    console.log(pc.caracteristicas());

    // Los objetos se asignan por referencia
    const otraReferencia = pc;
    otraReferencia.procesador = 'AMD Ryzen 9';
    console.log(`pc.procesador ahora es: ${pc.procesador}`);

    console.log(Object.values(pc));
    console.log(JSON.stringify(pc));

    const otraPersona = { nombre: 'Luis', apellido: 'Ramírez' };
    console.log(conTitulo.presentar.call(otraPersona, 'Ing.', '555-111-1111'));
    console.log(conTitulo.presentar.apply(otraPersona, ['Ing.', '555-222-2222']));
}
