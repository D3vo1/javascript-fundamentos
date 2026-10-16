/**
 * Funciones recursivas: recorrer y transformar datos sin ciclos.
 * Ejecutar: node 02-funciones-y-recursion/recursion.js
 */
'use strict';

/** Devuelve [1, 2, ..., n] construyendo la lista de forma recursiva. */
function contarHasta(n) {
    return n <= 0 ? [] : [...contarHasta(n - 1), n];
}

/**
 * Genera un número de control (últimos 2 dígitos del año + clave de plantel + id)
 * para cada alumno, recorriendo la lista de forma recursiva.
 * @param {Array<{nombre: string, plantel: string, id: string, anio: string}>} alumnos
 */
function generarNumerosDeControl(alumnos, posicion = 0, resultado = []) {
    if (posicion === alumnos.length) return resultado;

    const { nombre, plantel, id, anio } = alumnos[posicion];
    resultado.push({ nombre, numeroControl: anio.substring(2) + plantel + id });
    return generarNumerosDeControl(alumnos, posicion + 1, resultado);
}

/** Imprime una lista numerada de forma recursiva. */
function mostrar(lista, posicion = 0) {
    if (posicion === lista.length) return;
    const { nombre, numeroControl } = lista[posicion];
    console.log(`${posicion + 1}. ${nombre} => Control: ${numeroControl}`);
    mostrar(lista, posicion + 1);
}

/** Llena dos vectores paralelos de n elementos de forma recursiva. */
function llenarVectores(n, pos = 0, pajaros = [], comida = []) {
    if (pos === n) return { pajaros, comida };
    pajaros[pos] = `Pajaro_${pos + 1}`;
    comida[pos] = `Comida_${pos + 1}`;
    return llenarVectores(n, pos + 1, pajaros, comida);
}

module.exports = { contarHasta, generarNumerosDeControl, llenarVectores };

if (require.main === module) {
    console.log('Contar hasta 5:', contarHasta(5));

    // Datos ficticios de ejemplo
    const alumnos = [
        { nombre: 'Ana Torres', plantel: '420', id: '101', anio: '2022' },
        { nombre: 'Luis Ramírez', plantel: '420', id: '102', anio: '2022' },
        { nombre: 'Sofía Herrera', plantel: '420', id: '103', anio: '2023' },
    ];
    mostrar(generarNumerosDeControl(alumnos));

    console.log(llenarVectores(3));
}
