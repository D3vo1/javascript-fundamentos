/**
 * Clases ES6: constructor, getters/setters, herencia con extends/super
 * y sobrescritura de métodos (incluido toString).
 * Ejecutar: node 03-objetos-y-clases/clases-y-herencia.js
 */
'use strict';

class Persona {
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre() { return this._nombre; }
    set nombre(nombre) { this._nombre = nombre; }

    get apellido() { return this._apellido; }
    set apellido(apellido) { this._apellido = apellido; }

    nombreCompleto() {
        return `${this._nombre} ${this._apellido}`;
    }

    toString() {
        return this.nombreCompleto();
    }
}

class Empleado extends Persona {
    constructor(nombre, apellido, tarjeta, departamento) {
        super(nombre, apellido);
        this._tarjeta = tarjeta;
        this._departamento = departamento;
    }

    get tarjeta() { return this._tarjeta; }
    set tarjeta(tarjeta) { this._tarjeta = tarjeta; }

    get departamento() { return this._departamento; }
    set departamento(departamento) { this._departamento = departamento; }

    nombreCompleto() {
        return `${super.nombreCompleto()} — ${this._departamento}, tarjeta ${this._tarjeta}`;
    }
}

class Familiar extends Persona {
    constructor(nombre, apellido, parentesco, edad) {
        super(nombre, apellido);
        this._parentesco = parentesco;
        this._edad = edad;
    }

    get parentesco() { return this._parentesco; }
    get edad() { return this._edad; }
    set edad(edad) { this._edad = edad; }
}

module.exports = { Persona, Empleado, Familiar };

if (require.main === module) {
    const persona = new Persona('Ana', 'Torres');
    persona.nombre = 'Ana Lucía';
    console.log(String(persona));

    const empleado = new Empleado('Luis', 'Ramírez', '1234650', 'Sistemas');
    console.log(String(empleado));

    // Polimorfismo: misma llamada, distinto comportamiento
    const familia = [
        new Familiar('Jorge', 'Torres', 'Padre', 52),
        new Familiar('María', 'López', 'Madre', 48),
        new Familiar('Sofía', 'Torres', 'Hermana', 18),
    ];
    familia.forEach((f, i) => console.log(`${i + 1}. ${f} (${f.parentesco}, ${f.edad} años)`));
}
