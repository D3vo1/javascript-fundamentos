//Ejercicios con class
// Ejercicio 1
class PersonaEdad {
    constructor(edad) {
        this._edad = edad;
        this._MAYORIA_EDAD = 18;
    }

    get edad() {
        return this._edad;
    }

    set edad(edad) {
        this._edad = edad;
    }

    esMayorDeEdad() {
        if (this._edad < this._MAYORIA_EDAD) {
            console.log(`La edad ${this._edad} es menor de edad`);
        } else if (this._edad >= this._MAYORIA_EDAD) {
            console.log(`La edad ${this._edad} es mayor de edad`);
        }
    }
}

// Uso
let persona = new PersonaEdad(20);
persona.esMayorDeEdad();

// Ejercicio 2
class DiaSemana {
    constructor(dia) {
        this._dia = dia;
    }

    get dia() {
        return this._dia;
    }

    set dia(dia) {
        this._dia = dia;
    }

    mostrarDia() {
        if (this._dia == 1) {
            console.log("Domingo");
        } else if (this._dia == 2) {
            console.log("Lunes");
        } else if (this._dia == 3) {
            console.log("Martes");
        } else if (this._dia == 4) {
            console.log("Miércoles");
        } else if (this._dia == 5) {
            console.log("Jueves");
        } else if (this._dia == 6) {
            console.log("Viernes");
        } else if (this._dia == 7) {
            console.log("Sábado");
        } else {
            console.log("Número inválido");
        }
    }
}

// Uso
let dia = new DiaSemana(7);
dia.mostrarDia();


//Ejercicio 3 y 4
class Vector {
    constructor(vector) {
        this._vector = vector;
    }

    get vector() {
        return this._vector;
    }

    sumar() {
        let suma = 0;
        for (let i = 0; i < this._vector.length; i++) {
            suma += this._vector[i];
        }
        return suma;
    }

    promedio() {
        return this.sumar() / this._vector.length;
    }
}

// Uso
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

let vector = new Vector(numeros);

console.log(`La suma de los elementos del vector es: ${vector.sumar()}`);
console.log(`El promedio del vector es: ${vector.promedio()}`);


//Ejercicio 5
class Matriz {
    constructor(matriz) {
        this._matriz = matriz;
    }

    get matriz() {
        return this._matriz;
    }

    sumarElementos() {
        let suma = 0;

        for (let i = 0; i < this._matriz.length; i++) {
            for (let j = 0; j < this._matriz[i].length; j++) {
                suma += this._matriz[i][j];
            }
        }

        return suma;
    }
}

// Uso
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let matrizObj = new Matriz(matriz);
console.log(`Suma de la matriz: ${matrizObj.sumarElementos()}`);


//Ejercicio 6
class TorresHanoiIterativo {
    constructor(discos) {
        this._discos = discos;
        this._posteA = [];
        this._posteB = [];
        this._posteC = [];

        // Inicializar el poste A
        for (let i = discos; i >= 1; i--) {
            this._posteA.push(i);
        }
    }

    get totalMovimientos() {
        return (2 ** this._discos) - 1;
    }

    moverLegal(p1, p2) {
        if (p1.length === 0 && p2.length === 0) return;

        if (p1.length === 0) {
            p1.push(p2.pop());
        } else if (p2.length === 0) {
            p2.push(p1.pop());
        } else if (p1[p1.length - 1] < p2[p2.length - 1]) {
            p2.push(p1.pop());
        } else {
            p1.push(p2.pop());
        }
    }

    mostrarEstado(movimiento) {
        console.log(`Movimiento ${movimiento}`);
        console.log("A:", this._posteA);
        console.log("B:", this._posteB);
        console.log("C:", this._posteC);
        console.log("-------------------");
    }

    resolver() {
        console.log(`\n=== TORRES DE HANOI ITERATIVO CON ${this._discos} DISCOS ===\n`);

        for (let i = 1; i <= this.totalMovimientos; i++) {

            if (i % 3 === 1) {
                this.moverLegal(this._posteA, this._posteC);
            } else if (i % 3 === 2) {
                this.moverLegal(this._posteA, this._posteB);
            } else {
                this.moverLegal(this._posteB, this._posteC);
            }

            this.mostrarEstado(i);
        }

        console.log("FINAL");
        console.log("Poste A:", this._posteA);
        console.log("Poste B:", this._posteB);
        console.log("Poste C:", this._posteC);
    }
}

let hanoi = new TorresHanoiIterativo(5);
hanoi.resolver();


//Ejercicio 7
class GaussJordan {
    constructor(matriz) {
        this._matriz = matriz;
    }

    mostrarMatriz() {
        for (let i = 0; i < this._matriz.length; i++) {
            console.log(this._matriz[i]);
        }
    }

    resolver() {
        console.log("Matriz inicial:");
        this.mostrarMatriz();

        // Paso 1
        let pivote1 = this._matriz[0][0];
        for (let j = 0; j < this._matriz[0].length; j++) {
            this._matriz[0][j] /= pivote1;
        }

        console.log("Paso 1: Pivote 1 convertido en 1");
        this.mostrarMatriz();

        // Paso 2
        let factor = this._matriz[1][0];
        for (let j = 0; j < this._matriz[1].length; j++) {
            this._matriz[1][j] -= factor * this._matriz[0][j];
        }

        console.log("Paso 2: Hacer cero debajo del pivote");
        this.mostrarMatriz();

        // Paso 3
        let pivote2 = this._matriz[1][1];
        for (let j = 0; j < this._matriz[1].length; j++) {
            this._matriz[1][j] /= pivote2;
        }

        console.log("Paso 3: Segundo pivote convertido en 1");
        this.mostrarMatriz();

        // Paso 4
        factor = this._matriz[0][1];
        for (let j = 0; j < this._matriz[0].length; j++) {
            this._matriz[0][j] -= factor * this._matriz[1][j];
        }

        console.log("Paso 4: Hacer cero arriba del segundo pivote");
        this.mostrarMatriz();

        console.log("=== Resultado final ===");
        console.log(`x = ${this._matriz[0][2]}`);
        console.log(`y = ${this._matriz[1][2]}`);
    }
}

// Uso
let gauss = new GaussJordan([
    [2, 1, 5],
    [1, -1, 1]
]);

gauss.resolver();


//Ejercicio 8
class Transpuesta {
    constructor(matriz) {
        this._matriz = matriz;
    }

    mostrarMatriz(m) {
        for (let i = 0; i < m.length; i++) {
            console.log(m[i]);
        }
    }

    calcular() {
        console.log("Matriz original:");
        this.mostrarMatriz(this._matriz);

        let transpuesta = [];

        for (let i = 0; i < this._matriz[0].length; i++) {
            transpuesta[i] = [];
        }

        for (let i = 0; i < this._matriz.length; i++) {
            for (let j = 0; j < this._matriz[i].length; j++) {
                transpuesta[j][i] = this._matriz[i][j];
            }
        }

        console.log("\nMatriz transpuesta:");
        this.mostrarMatriz(transpuesta);
    }
}

// Uso
let trans = new Transpuesta([
    [1, 2],
    [3, 4],
    [5, 6]
]);

trans.calcular();


//Ejercicio 9
class PromediosFibonacci {
    constructor(matriz) {
        this._matriz = matriz;
    }

    mostrarMatriz() {
        for (let i = 0; i < this._matriz.length; i++) {
            console.log(this._matriz[i]);
        }
    }

    calcularPromedios() {
        let promedios = [];

        for (let i = 0; i < this._matriz.length; i++) {
            let suma = 0;
            for (let j = 0; j < this._matriz[i].length; j++) {
                suma += this._matriz[i][j];
            }
            promedios[i] = suma / this._matriz[i].length;
        }

        return promedios;
    }

    fibonacci(n) {
        let fib = [];
        fib[0] = 0;
        fib[1] = 1;

        for (let i = 2; i < n; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }

        return fib;
    }

    resolver() {
        console.log("Matriz original:");
        this.mostrarMatriz();

        let promedios = this.calcularPromedios();
        console.log("\nVector de promedios por renglón:");
        console.log(promedios);

        let fib = this.fibonacci(promedios.length);
        console.log("\nVector serie Fibonacci:");
        console.log(fib);
    }
}

// Uso
let pf = new PromediosFibonacci([
    [2, 4, 6],
    [1, 3, 5],
    [10, 20, 30]
]);

pf.resolver();


//Ejercicio 10
class MultiplicarMatrices {
    constructor(A, B) {
        this._A = A;
        this._B = B;
    }

    mostrarMatriz(m) {
        for (let i = 0; i < m.length; i++) {
            console.log(m[i]);
        }
    }

    multiplicar() {
        console.log("Matriz A:");
        this.mostrarMatriz(this._A);

        console.log("\nMatriz B:");
        this.mostrarMatriz(this._B);

        if (this._A[0].length !== this._B.length) {
            console.log("\nNo se pueden multiplicar las matrices");
            return;
        }

        let C = [];

        for (let i = 0; i < this._A.length; i++) {
            C[i] = [];
            for (let j = 0; j < this._B[0].length; j++) {
                C[i][j] = 0;
            }
        }

        for (let i = 0; i < this._A.length; i++) {
            for (let j = 0; j < this._B[0].length; j++) {
                for (let k = 0; k < this._B.length; k++) {
                    C[i][j] += this._A[i][k] * this._B[k][j];
                }
            }
        }

        console.log("\nMatriz resultado A x B:");
        this.mostrarMatriz(C);
    }
}

// Uso
let mult = new MultiplicarMatrices(
    [
        [1, 2, 3],
        [4, 5, 6]
    ],
    [
        [7, 8],
        [9, 10],
        [11, 12]
    ]
);

mult.multiplicar();

