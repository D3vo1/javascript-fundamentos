'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');

const cond = require('../01-fundamentos/operadores-y-condicionales');
const ciclos = require('../01-fundamentos/ciclos-arreglos-y-matrices');
const rec = require('../02-funciones-y-recursion/recursion');
const { hanoiRecursivo, hanoiIterativo } = require('../02-funciones-y-recursion/torres-de-hanoi');
const { Persona, Empleado } = require('../03-objetos-y-clases/clases-y-herencia');
const { Computadora, conTitulo } = require('../03-objetos-y-clases/objetos');
const { Vector, Matriz, GaussJordan, fibonacci } = require('../04-algebra-lineal-con-clases/matrices');

test('condicionales', () => {
    assert.match(cond.clasificarEdad(20), /mayor de edad/);
    assert.match(cond.clasificarEdad(18), /exactamente/);
    assert.match(cond.clasificarEdad(15), /menor de edad/);
    assert.equal(cond.diaDeLaSemana(1), 'Domingo');
    assert.equal(cond.diaDeLaSemana(7), 'Sábado');
    assert.equal(cond.diaDeLaSemana(9), 'Número inválido');
    assert.equal(cond.etapaDeVida(45), 'Adulto');
    assert.equal(cond.enRango(8, 0, 15), true);
});

test('ciclos, arreglos y matrices', () => {
    assert.deepEqual(ciclos.paresConWhile(10), [2, 4, 6, 8, 10]);
    assert.deepEqual(ciclos.paresConDoWhile(10), ciclos.paresConWhile(10));
    assert.equal(ciclos.sumarArreglo(Array.from({ length: 30 }, (_, i) => i + 1)), 465);
    assert.equal(ciclos.sumarMatriz([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), 45);
    assert.deepEqual(ciclos.promediosPorRenglon([[1, 2, 3], [4, 5, 6]]), [2, 5]);
    assert.deepEqual(ciclos.productoElementoAElemento([[1, 2]], [[3, 4]]), [[3, 8]]);
});

test('recursión', () => {
    assert.deepEqual(rec.contarHasta(5), [1, 2, 3, 4, 5]);
    const [r] = rec.generarNumerosDeControl([{ nombre: 'Ana', plantel: '420', id: '101', anio: '2022' }]);
    assert.equal(r.numeroControl, '22420101');
    const { pajaros, comida } = rec.llenarVectores(3);
    assert.deepEqual(pajaros, ['Pajaro_1', 'Pajaro_2', 'Pajaro_3']);
    assert.equal(comida.length, 3);
});

test('Torres de Hanói: ambas versiones terminan con todos los discos en C', () => {
    for (let n = 1; n <= 8; n++) {
        const esperado = Array.from({ length: n }, (_, i) => n - i);
        for (const r of [hanoiRecursivo(n), hanoiIterativo(n)]) {
            assert.deepEqual(r.C, esperado, `n=${n}`);
            assert.equal(r.movimientos, 2 ** n - 1);
        }
    }
});

test('objetos y clases', () => {
    const e = new Empleado('Luis', 'Ramírez', '1', 'Sistemas');
    assert.ok(e instanceof Persona);
    assert.equal(e.apellido, 'Ramírez');
    assert.match(String(e), /Sistemas/);
    assert.match(new Computadora('i9', '64 GB', 'Laptop', 'Dell').caracteristicas(), /Dell/);
    assert.equal(conTitulo.presentar.call({ nombre: 'A', apellido: 'B' }, 'Ing.', '1'), 'Ing. A B (1)');
});

test('álgebra lineal', () => {
    assert.equal(new Vector([1, 2, 3]).promedio(), 2);
    assert.deepEqual(new Matriz([[1, 2], [3, 4], [5, 6]]).transpuesta().filas, [[1, 3, 5], [2, 4, 6]]);
    const AB = new Matriz([[1, 2, 3], [4, 5, 6]]).multiplicar(new Matriz([[7, 8], [9, 10], [11, 12]]));
    assert.deepEqual(AB.filas, [[58, 64], [139, 154]]);
    assert.throws(() => new Matriz([[1, 2]]).multiplicar(new Matriz([[1, 2]])));

    const [x, y] = new GaussJordan([[2, 1, 5], [1, -1, 1]]).resolver();
    assert.ok(Math.abs(x - 2) < 1e-9 && Math.abs(y - 1) < 1e-9);
    // y + z = 5, x + y = 3, 2x + z = 5  →  x = 1, y = 2, z = 3 (requiere pivoteo: a11 = 0)
    const sol3 = new GaussJordan([[0, 1, 1, 5], [1, 1, 0, 3], [2, 0, 1, 5]]).resolver();
    sol3.forEach((v, i) => assert.ok(Math.abs(v - [1, 2, 3][i]) < 1e-9));

    assert.deepEqual(fibonacci(7), [0, 1, 1, 2, 3, 5, 8]);
});
