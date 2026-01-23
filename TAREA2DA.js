//Sumar 30 elementos de un array utilizando un bucle for
/* ------------------------TAREA3------------------------  */ 
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
               11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
               21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}
console.log("La suma de los elementos del array es: " + suma);
/* ------------------------TAREA4------------------------  */ 
//DEFINIR UNA MATRIZ CUADRADA
let matriz = [[1,2,3],[1,2,3],[1,2,3]];
for (let f = 0; f < matriz.length; f++){
    for(let c = 0; c< matriz[f].length; c++){
        console.log(matriz[f][c]);
    }
}
//SUMAR LOS ELEMENTOS DE LA MATRIZ
let sumaMatriz = 0;
for (let f = 0; f < matriz.length; f++){
    for(let c = 0; c< matriz[f].length; c++){
        sumaMatriz += matriz[f][c];
    }
}
console.log("La suma de los elementos de la matriz es: " + sumaMatriz);
//----------------------Promdedio-----------------------//
let matriz1 = [[1,2,3],[4,5,6],[7,8,9]];
let vectorPromedios = [];
console.log(matriz1);
for (let i=0; i<matriz1.length; i++){
    let sumaFila = 0;
    for (let j=0; j<matriz1[i].length; j++){
        sumaFila += matriz1[i][j];

    }
    let promedioFila = sumaFila / matriz1[i].length;
    vectorPromedios.push(promedioFila);
    console.log(vectorPromedios);
}
//----------------------MULTIPLICAR 2 MATREICES-----------------------//
let matrizA = [[1,2,3],[4,5,6],[7,8,9]];
let matrizB = [[9,8,7],[6,5,4],[3,2,1]];
let matrizResultado = [[0,0,0],[0,0,0],[0,0,0]];
for (let i=0; i<matrizA.length; i++){
    for (let j=0; j<matrizA[i].length; j++){
        matrizResultado[i][j] = matrizA[i][j] * matrizB[i][j];
    }
}
console.log("Matriz A:");
console.log(matrizA);
console.log("Matriz B:");
console.log(matrizB);
console.log("Matriz Resultado (A * B):");
console.log(matrizResultado);

//----------------------gauss jordan-----------------------//
function transponer2x2(m) {
    return [
        [m[0][0], m[1][0]],
        [m[0][1], m[1][1]]
    ];
}
const miMatriz = [[10, 20], [30, 40]];
console.log(transponer2x2(miMatriz));

const listaEstudiantes = [
    ["David Melgoza Martinez", "420", "429", "2022"],
    ["Jesús Eduardo Cárdenas Ávila", "420", "431", "2022"],
    ["Luis Gabriel López Vega", "420", "427", "2022"],
    ["Isidro Arredondo Camarena", "420", "417", "2022"],
    ["Edgar Cortés Resendiz", "420", "439", "2022"],
    ["Jesús Emiliano Navarrete Moreno", "420", "444", "2022"],
    ["Jesús Daniel Méndez Moreno", "420", "387", "2022"],
    ["Jorge Hernández", "420", "447", "2022"],
    ["Leonardo León Moreno", "420", "390", "2022"],
    ["José Alberto Avalos Álvarez", "420", "420", "2022"],
    ["Jesús Sánchez Cornejo", "420", "433", "2022"],
    ["Ludwig Ivan Ortiz Sierra", "420", "436", "2022"],
    ["Mora Nuñez Santiago Antonio", "420", "391", "2022"],
    ["Alondra Alejandra López Medellin", "420", "450", "2022"],
    ["Daniel Gómez Villaseñor", "420", "392", "2022"],
    ["Claudia Maritza Santibañez Garcia", "420", "423", "2022"],
    ["Miguel Angel Romero Barajas", "420", "413", "2022"],
    ["Vanessa Tamayo Núñez", "420", "445", "2022"],
    ["Omar Vega López", "420", "516", "2022"],
    ["Daniel Esquivel Ayala", "420", "451", "2022"]
];

function generar_numero_control(datos, posicion = 0, m_final = []) {
    if (posicion === datos.length) {
        return m_final;
    }
    let filaActual = datos[posicion];
    let nombre = filaActual[0];
    let idEstado = filaActual[2];
    let ano = filaActual[3];
    let ultimosDosAno = ano.substring(2);
    let numControl = ultimosDosAno + "420" + idEstado;
    m_final.push([nombre, numControl]);
    return generar_numero_control(datos, posicion + 1, m_final);
}
function mostrar(matriz, posicion = 0) {
    if (posicion === matriz.length) {
        return;
    }

    let nombre = matriz[posicion][0];
    let control = matriz[posicion][1];

    console.log(`${posicion + 1}. ${nombre} => Control: ${control}`);

    mostrar(matriz, posicion + 1);
}
let m_estudiantes = generar_numero_control(listaEstudiantes);
mostrar(m_estudiantes);
//----------------------------------------------------------------------------------
//ejercicio dos 
function llenar_vector(pos=0, pajaro=[],comida=[]){
    if(pos==20){
        return pajaro,comida;
    }
    pajaro[pos]=`Pajaro_${pos+1}`;
    comida[pos]=`Comida_${pos+1}`;
    return llenar_vector(pos+1,pajaro,comida);
}
