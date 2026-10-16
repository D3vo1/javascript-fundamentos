/**
 * Fundamentos: tipos de datos, operadores y estructuras condicionales.
 * Ejecutar: node 01-fundamentos/operadores-y-condicionales.js
 */
'use strict';

const EDAD_MINIMA = 18;
const DIAS = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

/** Compara una edad contra la mayoría de edad usando if / else if / else. */
function clasificarEdad(edad) {
    if (edad > EDAD_MINIMA) {
        return `La persona es mayor de edad: ${edad} años.`;
    } else if (edad === EDAD_MINIMA) {
        return `La persona tiene exactamente la edad mínima: ${edad} años.`;
    }
    return `La persona es menor de edad: ${edad} años.`;
}

/** Devuelve el nombre del día; la semana empieza en domingo = 1. */
function diaDeLaSemana(numero) {
    switch (true) {
        case numero >= 1 && numero <= 7:
            return DIAS[numero - 1];
        default:
            return 'Número inválido';
    }
}

/** switch(true) con rangos. */
function etapaDeVida(edad) {
    switch (true) {
        case edad >= 18 && edad <= 30:
            return 'Joven';
        case edad > 30 && edad <= 60:
            return 'Adulto';
        case edad > 60:
            return 'Adulto mayor';
        default:
            return 'Menor de edad';
    }
}

/** Operadores lógicos: ¿está el dato dentro del rango [min, max]? */
function enRango(dato, min, max) {
    return dato >= min && dato <= max;
}

module.exports = { clasificarEdad, diaDeLaSemana, etapaDeVida, enRango };

if (require.main === module) {
    // Igualdad débil vs. estricta
    const a = 5;
    const b = '5';
    console.log(`typeof a = ${typeof a}, typeof b = ${typeof b}`);
    console.log(`${a} == '${b}'  -> ${a == b}`);
    console.log(`${a} === '${b}' -> ${a === b}`);

    // Operador ternario
    const dato = 8;
    console.log(enRango(dato, 0, 15) ? `${dato} está en el rango` : `${dato} está fuera del rango`);

    console.log(clasificarEdad(20));
    console.log(`Día 7: ${diaDeLaSemana(7)}`);
    console.log(`Etapa de vida (45): ${etapaDeVida(45)}`);
}
