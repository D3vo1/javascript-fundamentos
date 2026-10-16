/**
 * Torres de Hanói resuelto de dos formas: recursiva e iterativa.
 * Ambas requieren 2^n - 1 movimientos.
 * Ejecutar: node 02-funciones-y-recursion/torres-de-hanoi.js [discos]
 */
'use strict';

function crearTorres(discos) {
    const A = [];
    for (let i = discos; i >= 1; i--) A.push(i);
    return { A, B: [], C: [] };
}

/** Versión recursiva: mueve n-1 discos al auxiliar, el mayor al destino y luego los n-1 encima. */
function hanoiRecursivo(discos) {
    const torres = crearTorres(discos);
    let movimientos = 0;

    function mover(n, origen, destino, auxiliar) {
        if (n === 0) return;
        mover(n - 1, origen, auxiliar, destino);
        destino.push(origen.pop());
        movimientos++;
        mover(n - 1, auxiliar, destino, origen);
    }

    mover(discos, torres.A, torres.C, torres.B);
    return { ...torres, movimientos };
}

/** Realiza el único movimiento legal entre dos postes. */
function moverLegal(p1, p2) {
    const tope1 = p1[p1.length - 1];
    const tope2 = p2[p2.length - 1];
    if (tope1 === undefined) p1.push(p2.pop());
    else if (tope2 === undefined || tope1 < tope2) p2.push(p1.pop());
    else p1.push(p2.pop());
}

/**
 * Versión iterativa: alterna movimientos legales entre pares de postes.
 * Con un número par de discos se intercambian los papeles de B y C.
 */
function hanoiIterativo(discos, { verbose = false } = {}) {
    const torres = crearTorres(discos);
    const { A } = torres;
    let { B, C } = torres;
    if (discos % 2 === 0) [B, C] = [C, B];

    const total = 2 ** discos - 1;
    for (let i = 1; i <= total; i++) {
        if (i % 3 === 1) moverLegal(A, C);
        else if (i % 3 === 2) moverLegal(A, B);
        else moverLegal(B, C);

        if (verbose) {
            console.log(`Movimiento ${i}  A:${JSON.stringify(torres.A)} B:${JSON.stringify(torres.B)} C:${JSON.stringify(torres.C)}`);
        }
    }
    return { ...torres, movimientos: total };
}

module.exports = { hanoiRecursivo, hanoiIterativo };

if (require.main === module) {
    const discos = Number(process.argv[2]) || 4;
    console.log(`=== Recursivo con ${discos} discos ===`);
    console.log(hanoiRecursivo(discos));
    console.log(`\n=== Iterativo con ${discos} discos ===`);
    console.log(hanoiIterativo(discos, { verbose: true }));
}
