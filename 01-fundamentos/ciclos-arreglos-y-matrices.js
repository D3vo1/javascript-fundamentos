/**
 * Fundamentos: ciclos (while, do...while, for), arreglos y matrices.
 * Ejecutar: node 01-fundamentos/ciclos-arreglos-y-matrices.js
 */
'use strict';

/** Pares entre 1 y n usando while. */
function paresConWhile(n) {
    const pares = [];
    let i = 1;
    while (i <= n) {
        if (i % 2 === 0) pares.push(i);
        i++;
    }
    return pares;
}

/** Pares entre 1 y n usando do...while (se ejecuta al menos una vez). */
function paresConDoWhile(n) {
    const pares = [];
    let i = 1;
    do {
        if (i % 2 === 0) pares.push(i);
        i++;
    } while (i <= n);
    return pares;
}

/** Suma de los elementos de un arreglo con un ciclo for. */
function sumarArreglo(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
}

/** Suma de todos los elementos de una matriz (ciclos anidados). */
function sumarMatriz(matriz) {
    let suma = 0;
    for (let f = 0; f < matriz.length; f++) {
        for (let c = 0; c < matriz[f].length; c++) {
            suma += matriz[f][c];
        }
    }
    return suma;
}

/** Promedio de cada renglón de una matriz. */
function promediosPorRenglon(matriz) {
    const promedios = [];
    for (let i = 0; i < matriz.length; i++) {
        promedios.push(sumarArreglo(matriz[i]) / matriz[i].length);
    }
    return promedios;
}

/** Producto elemento por elemento (Hadamard) de dos matrices del mismo tamaño. */
function productoElementoAElemento(A, B) {
    return A.map((fila, i) => fila.map((valor, j) => valor * B[i][j]));
}

module.exports = {
    paresConWhile,
    paresConDoWhile,
    sumarArreglo,
    sumarMatriz,
    promediosPorRenglon,
    productoElementoAElemento,
};

if (require.main === module) {
    console.log('Pares (while):', paresConWhile(10));
    console.log('Pares (do...while):', paresConDoWhile(10));

    const del1Al30 = Array.from({ length: 30 }, (_, i) => i + 1);
    console.log('Suma del 1 al 30:', sumarArreglo(del1Al30));

    const matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    console.log('Suma de la matriz:', sumarMatriz(matriz));
    console.log('Promedios por renglón:', promediosPorRenglon(matriz));
    console.log('Producto elemento a elemento:', productoElementoAElemento(matriz, [[9, 8, 7], [6, 5, 4], [3, 2, 1]]));

    // Matriz con tipos mixtos: nombre / edad / activo por columna
    const registros = [
        ['Ana', 'Luis', 'Sofía'],
        [21, 22, 23],
        [true, false, true],
    ];
    for (let c = 0; c < registros[0].length; c++) {
        if (registros[2][c]) {
            console.log(`Nombre: ${registros[0][c]}  Edad: ${registros[1][c]}  Activo: ${registros[2][c]}`);
        }
    }
}
