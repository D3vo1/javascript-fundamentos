/*Necesitamos saber si una persona es mayor de edad
usar variables y constantes
usar template strings para precentar los resultados
usar if else if
*/
'use strict';

const edad_minima = 18;
let edad_persona = 20; 

if (edad_persona > edad_minima) {
    console.log(`La persona es mayor de edad: ${edad_persona} años.`);

} else if (edad_persona === edad_minima) {
    console.log(`La persona tiene exactamente la edad mínima para ser mayor de edad: ${edad_persona} años.`);   
} else {
    console.log(`La persona es menor de edad: ${edad_persona} años.`);
}

//--------------------------------TAREA 2-------------------------------------------
/*REALIZ UN PROGRAMA EN EL CUAL DEACUERDO  UN NUMERO DIGA QUE DIA DE LA SEMANA ES RECORDANDO QUE LA SEMANA EMPIEZA EN DOMINGO Y CORRESPONDE AL 1*/
let dia_semana = 7;
switch(true){
    case  (dia_semana === 1):
        console.log(`El dia ${dia_semana} corresponde a Domingo`);
        break;
    case (dia_semana === 2):
        console.log(`El dia ${dia_semana} corresponde a Lunes`);
        break; 
    case (dia_semana === 3):
        console.log(`El dia ${dia_semana} corresponde a Martes`);
        break;
    case (dia_semana === 4):
        console.log(`El dia ${dia_semana} corresponde a Miercoles`);
        break;
    case (dia_semana === 5):
        console.log(`El dia ${dia_semana} corresponde a Jueves`);
        break;
    case (dia_semana === 6):        
        console.log(`El dia ${dia_semana} corresponde a Viernes`);
        break;
    case (dia_semana === 7):
        console.log(`El dia ${dia_semana} corresponde a Sabado`);
        break;

}