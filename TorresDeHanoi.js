//Juego de arros y palos 
function mover_hanoi(n, origen, destino, auxiliar) {
    if (n > 0) {
        mover_hanoi(n - 1, origen, auxiliar, destino);
        
        let disco_actual = origen.pop();
        destino.push(disco_actual);
        mover_hanoi(n - 1, auxiliar, destino, origen);
    }
}

let n_discos = 4;
let n_movimientos = 2 ** n_discos - 1;
let torre_a = [];
let torre_b = [];
let torre_c = [];

for (let i = n_discos; i > 0; i--) {
    torre_a.push(i);
}

mover_hanoi(n_discos, torre_a, torre_c, torre_b);
console.log({ torre_a, torre_b, torre_c, n_movimientos });