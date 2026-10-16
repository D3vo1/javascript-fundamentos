/**
 * Ejercicios de álgebra lineal modelados con clases:
 * vector (suma/promedio), suma de matriz, transpuesta, producto de matrices,
 * Gauss-Jordan y promedios por renglón + serie de Fibonacci.
 * Ejecutar: node 04-algebra-lineal-con-clases/matrices.js
 */
'use strict';

class Vector {
    constructor(valores) {
        this._valores = valores;
    }

    sumar() {
        let suma = 0;
        for (const v of this._valores) suma += v;
        return suma;
    }

    promedio() {
        return this.sumar() / this._valores.length;
    }
}

class Matriz {
    constructor(filas) {
        this._filas = filas;
    }

    get filas() { return this._filas; }
    get numFilas() { return this._filas.length; }
    get numColumnas() { return this._filas[0].length; }

    sumarElementos() {
        return this._filas.reduce((total, fila) => total + new Vector(fila).sumar(), 0);
    }

    promediosPorRenglon() {
        return this._filas.map((fila) => new Vector(fila).promedio());
    }

    transpuesta() {
        const t = [];
        for (let j = 0; j < this.numColumnas; j++) {
            t[j] = [];
            for (let i = 0; i < this.numFilas; i++) t[j][i] = this._filas[i][j];
        }
        return new Matriz(t);
    }

    /** Producto matricial A × B (filas por columnas). */
    multiplicar(otra) {
        if (this.numColumnas !== otra.numFilas) {
            throw new Error('Dimensiones incompatibles: columnas de A ≠ filas de B');
        }
        const C = [];
        for (let i = 0; i < this.numFilas; i++) {
            C[i] = [];
            for (let j = 0; j < otra.numColumnas; j++) {
                let suma = 0;
                for (let k = 0; k < this.numColumnas; k++) suma += this._filas[i][k] * otra.filas[k][j];
                C[i][j] = suma;
            }
        }
        return new Matriz(C);
    }

    toString() {
        return this._filas.map((f) => `[ ${f.join('\t')} ]`).join('\n');
    }
}

/**
 * Resuelve un sistema de n ecuaciones lineales con su matriz aumentada n × (n+1).
 * Para cada columna: elige pivote (pivoteo parcial), lo convierte en 1 y
 * hace cero el resto de la columna.
 */
class GaussJordan {
    constructor(aumentada) {
        this._m = aumentada.map((fila) => [...fila]); // copia para no modificar la original
    }

    resolver({ verbose = false } = {}) {
        const m = this._m;
        const n = m.length;
        for (let col = 0; col < n; col++) {
            let pivote = col;
            for (let f = col + 1; f < n; f++) {
                if (Math.abs(m[f][col]) > Math.abs(m[pivote][col])) pivote = f;
            }
            if (m[pivote][col] === 0) throw new Error('El sistema no tiene solución única');
            [m[col], m[pivote]] = [m[pivote], m[col]];

            const p = m[col][col];
            for (let j = col; j <= n; j++) m[col][j] /= p;

            for (let f = 0; f < n; f++) {
                if (f === col) continue;
                const factor = m[f][col];
                for (let j = col; j <= n; j++) m[f][j] -= factor * m[col][j];
            }
            if (verbose) console.log(`Columna ${col + 1}:\n${new Matriz(m)}\n`);
        }
        return m.map((fila) => fila[n]);
    }
}

/** Serie de Fibonacci con n términos. */
function fibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) fib[i] = fib[i - 1] + fib[i - 2];
    return fib.slice(0, n);
}

module.exports = { Vector, Matriz, GaussJordan, fibonacci };

if (require.main === module) {
    const del1Al30 = new Vector(Array.from({ length: 30 }, (_, i) => i + 1));
    console.log(`Vector 1..30 → suma ${del1Al30.sumar()}, promedio ${del1Al30.promedio()}`);

    const M = new Matriz([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    console.log(`\nSuma de elementos: ${M.sumarElementos()}`);

    console.log(`\nTranspuesta de [[1,2],[3,4],[5,6]]:\n${new Matriz([[1, 2], [3, 4], [5, 6]]).transpuesta()}`);

    const A = new Matriz([[1, 2, 3], [4, 5, 6]]);
    const B = new Matriz([[7, 8], [9, 10], [11, 12]]);
    console.log(`\nA × B:\n${A.multiplicar(B)}`);

    console.log('\nGauss-Jordan para 2x + y = 5, x − y = 1:');
    const [x, y] = new GaussJordan([[2, 1, 5], [1, -1, 1]]).resolver({ verbose: true });
    console.log(`x = ${x}, y = ${y}`);

    const P = new Matriz([[2, 4, 6], [1, 3, 5], [10, 20, 30]]);
    const promedios = P.promediosPorRenglon();
    console.log('\nPromedios por renglón:', promedios);
    console.log('Fibonacci del mismo tamaño:', fibonacci(promedios.length));
}
