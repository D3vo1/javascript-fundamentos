//palabra recervada para declarar una variable + nombre de la variable + tipo de dato asignado + inicializacion de la variable
//'use strict' 
/*let v1; //declaracion
let v2=25,r;
v1 = 10; //inicializacion
console.log(typeof(v1)); 'number' //10
v1 = 9.5;
console.log(typeof(v1)); 'number'//9.5
v1 = "false";
console.log(typeof(v1)); 'boolean'// "false"
v1 = undefined;
console.log(typeof(v1)); 'string'// undefined
//---------------------------------------------------------------------------

r = v1*v2;
console.log(r); //NaN*/
//---------------------------------------------------------------------------
//Operadores
//Aritmeticos
/* 
Suma + 
Resta -
Multiplicacion * 
Divicion / 
Modulo % 
Incremento ++ 
Decremento -- 
Potencia **
*/
/*
let num = 5,res;
res = num--;
console.log(res); //5
--num;
console.log(num); //3
//------------------------
let num1,res1;
res1 = num**5;
console.log(res1); //3125
*/
/* ASIGNACION
    =
    *=
    /=
    +=
    -=
    %=
    **
*/
/*let num1 = 5,res1;
res1 = num1;
rest1 **=num1;
console.log(res1); //3125
*/
/*
COMPARACION 
    ==
    !=
    <
    >
    <=
    >= 
    ===
    !==
*/
let a=5,b='5';
console.log(typeof a); 
console.log(typeof b);
console.log("a == b, a == b");
console.log("a === b, a === b");

console.log(`${a} != ${b} : ${a!=b}`);
console.log(`${a} !== ${b} : ${a!==b}`);

/* 
LOGICOS 
&& and 
|| or 
! not
*/
let dato=8,max=15,min=0;
let verificar;
verificar = (dato>=min) && (dato<=max);
console.log(`El numero ${dato}, se encuentra en el rango: ${verificar}`);

if((dato>=min) && (dato<=max)){
    console.log(`El numero ${dato}, se encuentra en el rango`); 
}else if(dato<min){
    console.log(`El numero ${dato}, es menor que el minimo`);
}else if(dato>max){
    console.log(`El numero ${dato}, es mayor que el maximo`);
}
/*
    Operador ternario
    (Condicion) ? valor si es true : valor si es false
*/
(dato > 0) ? console.log(`El dato es positivo`) : console.log(`El dato es negativo o cero`);
(verificar) ? console.log(`El valor esta dentro del rango`) : console.log(`El valor esta fuera del rango`);

//SWITCH
let edad = 20;
switch (true) {
    case (edad >=18)&&(edad <=30):
        console.log(`Eres un Chavo`)
    break;
    case (edad > 30 )&&(edad <=60):
        console.log(`Eres un Chavo Ruco`)
    break;
    case (edad > 60) && (edad <=80):
        console.log(`Ve a pedir la pension del Bienestar`)
    break;
    default:
        console.log(`Eres un niño`)
    break;
}

/*
CICLO WHILE Nos ayuda a iterar mientras se cumpla una condicion
*/
let cont=1;
while(cont <=10){
    if (cont % 2 == 0){
        console.log(`El numero ${cont} es par`);
    }
    cont++;
}

/*
CICLO DO WHILE Repite condigo por lo menos una vez y despues verifica la condicion
*/
cont =1;
do{
    if(cont % 2 == 0){ 
        console.log(`El numero ${cont} es par`);
    }
    cont++;
}
while(cont <=10);
/*
CICLO FOR
for (inicializacion; condicion; actualizacion){
*/
for(let i = 0; i <=10; i+=2){   
    console.log(`El numero ${i} es par`);
}
// Arreglos
let numeros = [];
numeros[0]= 25;
numeros[5]=`David`;
numeros[10]=50;
for(let i=0; i<numeros.length; i++){
    console.log(`Elemento en la posicion ${i}  ${numeros[i]}`);
}
/* 
Matrices
*/
let matriz = [[],[],[]];
matriz[0][0]=`David`;
matriz[0][1]=`Zamora`;
matriz[0][2]=`Sahuayo`;

matriz[1][0]=21;
matriz[1][1]=22;
matriz[1][2]=23;

matriz[2][0]=true;
matriz[2][1]=false;
matriz[2][2]=true;

let r=matriz.length-1;
 for(let c=0; c<matriz.length; c++){
    if(matriz[2][c]){
        console.log(`Nombre: ${matriz[0][c]} Edad: ${matriz[1][c]} Activo: ${matriz[2][c]}`);
    }
    }

//20/01/2026
function imp(dato){
    console.log(dato);
    return toString(dato).length;
}
let msg = "Hola desde la funcion";
let t;
t=imp(msg);
console.log(t);

function modulo(dividendo, divisor){
    return dividendo % divisor;
}
console.log(modulo(25,78));

function cLetre(cadena){
    for(let i=0;i<cadena.length;i++){
        console.log(cadena[i]);
        if(cadena[i]== 'o'){
            cadena="H0la";
}
cadena[1]=0;
console.log(cadena);
}
cLetre('Hola');
}
/*
FUNCIONES RECURSIVAS
function miFuncion(parametro){
    bloque de codigo
    miFuncion(argumento);
}
*/
/*function Frecursiva(n){
    if(n==0)
        console.log(n);
    else{
        console.log(n);
        Frecursiva(n-1);
    }
}
Frecursiva(5);*/

function Frecursiva(n){
    (n==1) ? console.log(n) : (Frecursiva(n-1),console.log(n));

    }
Frecursiva(5);

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
