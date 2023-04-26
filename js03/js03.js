console.log("Sesión JS03");

// ---- Declaración de bloque----------

{
    /*
    Las variables declaradas con let y const
    solo tendrán alcance(scope) dentro del bloque 
    o bloques anidados.

    */

    let nombre = "Sergio";
    const apellido = "Torres";
    let edadSergio = 39, edadLuis =25; 
    // let edadSergio = 39;
    // let edadLuis = 25;
    let numCohorteSergio = numCohorteLuis = 26;// esto está mal
    // porque equivale a declararlo con var
    // var numCohorteLuis = 26
    // let numCohorteSergio =numCohorteLuis
    // lo mejor es a cada variable ponerle su let

{
    /*
     bloque anidado
     Si una variable local tiene el mismo nombre de
     una variable global o de bloque superior, la variable
     local, oculta las otras variables, para que la variable local
     sea usada.
    */
    let nombre = "Luis";
    const apellido = "SP";
    console.log(`Me llamo ${nombre} ${apellido}`);
    console.log(`Sergio: ${edadSergio} años`);
    console.log(`Luis: ${edadLuis} años`);
    console.log(`Sergio cohorte: ${numCohorteSergio} años`);
    console.log(`Luis cohorte: ${numCohorteLuis} años`);
}
console.log(`Me llamo ${nombre} ${apellido}`);
console.log(`Sergio: ${edadSergio} años`);
console.log(`Luis: ${edadLuis} años`);
console.log(`Sergio cohorte: ${numCohorteSergio} años`);
console.log(`Luis cohorte: ${numCohorteLuis} años`);
}

// console.log(`Me llamo ${nombre} ${apellido}`); Variables no están definidas
// porque están fuera de bloque

//console.log(`Sergio: ${edadSergio} años`);
//console.log(`Luis: ${edadLuis} años`);
//console.log(`Sergio cohorte: ${numCohorteSergio} años`);
console.log(`Luis cohorte: ${numCohorteLuis} años`);

//-------------------Condicional if-else------------------
/*
La condicional if ejecuta una sentencia si una condición especificada
es evaluada como verdadera

sintaxis:
    if(condición) sentencia

    if(condición) {
        sentencias;
    }

    if(condición) sentencia;
    else sentencia;

    if(condicion) {
        sentencia;
    } else {
        sentencia;
    }

    if(condicion) {
        sentencia;
    } else if (condición 2) {
        sentencia;
    } else if (condición 3) {
        sentencia;
    } else if (condición n) {
        sentencia;
    } else {
        sentencia
    }

    una vez que se cumple una condición se detiene el if
*/

const temperatura =  200;
let mensaje;

// if (temperatura === 21) mensaje = `Temperatura ideal ${temperatura}`;
// else mensaje = `${temperatura} grados no es ideal`;

if (temperatura === 21) 
    mensaje = `Temperatura ideal ${temperatura}`;
else if (temperatura > 21 && temperatura < 40)
    mensaje = `Temperatura de ${temperatura} grados es caliente`;
else if (temperatura > 40)
    mensaje = `Temperatura de ${temperatura} grados es super caliente, bendiciones`;
else if (temperatura < 21)
    mensaje = `Temperatura de ${temperatura} grados es fría`;
else
    mensaje = `Temperatura de ${temperatura} grados no existe`;

console.log(mensaje);

/*    
if (condicion) a++ ;
else if (condicion2) a+2;
else if (condicion3) a*3;
}
*/

// ---------------Ejercicio--------------------------------
/*
Preguntar por el número de mes, del 1 al 12
de acuerdo al mes desplegar en un Alert (o en el DOM)
la estación del año.

mes 12, 1, 2 = invierno
mes 3, 4, 5 = primavera
mes 6, 7, 8 = verano
mes 9, 10, 11 = otoño

Usar if-else

*/


/*
const getEstacion = (mes=document.getElementById('mes').value) => {
if ( mes == 12 || mes == 1 || mes == 2) 
    alert(`El mes es ${mes} y la estación es invierno`);
else if ( mes == 3 || mes == 4 || mes == 5 )
    alert (`El mes es ${mes} y la estación es primavera`);    
else if (mes == 6 || mes == 7 || mes == 8)
    alert (`El mes es ${mes} y la estación es verano`);    
else if (mes == 9 || mes == 10 || mes == 11)
    alert (`El mes es ${mes} y la estación es otoño`);    
else
    alert (`El mes ${mes} no existe`);
}
*/


//--------------Switch------------------------
/*
La instrucción Switch evalua una expresión y se compara
con el valor de cada instancia en 'case' y se ejecutan las
sentencias asociadas a ese 'case' hasta que se encuentre la sentencia 'break'.
Se ejecutan las sentencias de todas las condiciones que se cumplan
hasta que termina el swith o hasta que encuentra el break.

Sintaxis:
    switch (expresion) {
        case valor1:
            sentencias;
        case valor2:
            sentencias;
            break;
        case valor n:
            sentencias;
            break;
        default:
            sentencias;
        
    }

    La evaluación del switch es estricta
*/


const setVelocidadVentilador =(velocidad) => {
    let msj;
    switch (velocidad){
        case 0:
            msj="Apagado";
            break;
        case 1:
            msj="Velocidad baja";
            break;
        case 2:
            msj="Velocidad media";
            break;
        case 3:
            msj="Velocidad alta";
            break;
        case 4:
        case 5:
            msj="Velocidad super alta";
            break;
        default:
            msj="El nivel no existe";
    }
    return msj;
}

console.log(`El ventilador esta en ${setVelocidadVentilador("4")}`);

//----------------------Práctica------------------
// Refactorizar el ejercicio anterior con un switch

const getEstacion2 = (mes=document.getElementById('mes').value) => {
    switch(Number(mes)){
        case 12:
        case 1:
        case 2:
            alert(`El mes es ${mes} y la estación es invierno`);
            break;
        case 3:
        case 4:
        case 5:
            alert (`El mes es ${mes} y la estación es primavera`);
            break;
        case 6:
        case 7:
        case 8:    
            alert (`El mes es ${mes} y la estación es verano`);
            break;
        case 9:
        case 10:
        case 11:
            alert (`El mes es ${mes} y la estación es otoño`);
            break;
        default:
            alert(`El mes ${mes} no existe`);   
    }
} 

//--------Operador condicional ternario---------
/*
Es el único operador de JavaScript que tiene 3 operandos. Generalmente se usa como 
opción a la sentencia if-else.

Sintaxis:

    condición ? expresionSiCondiciónEsVerdadera : expresionSiCondicionEsFalsa;

*/
const subtotal = 1_000;
const pagoTarjetaCredito = true;
/*
let msj;
if (pagoTarjetaCredito) msj = subtotal*1.025;
else msj = subtotal*1;
*/

console.log(`La cuenta es de ${pagoTarjetaCredito === true ? subtotal*1.025 :subtotal*1} pesos`);

const edad = 17;
// Se permite el acceso al antro de mala muerte?
console.log(`Acceso ${ edad>=18? "Permitido" : "Denegado"}`);
// a los de 17 solo con permiso // esto queda muy complejo mejor no hacerlo así
console.log(`Acceso ${ edad>=18? "Permitido" : edad === 17? "Solo con permiso" : "Denegado"}`);

// ----- Práctica------------
// Refactorizar el ejercicio de saludo con un operador ternario.

/*
function saludo(numero) {
    if (numero > 1) {
      saludo(numero - 1);
    }
    console.log("Saludo " + numero);
  }
  
  saludo(10);
*/

// como lo hizo Santi
const printGreetings = number => {
    let result = (number > 1) ? printGreetings(number-1) : number;
    console.log("Greeting", result);
    return number+1;
};
printGreetings(10);

// como lo hizo David
const saludar = (numero) => {
    numero === 1 ? console.log("Saludo " + numero) : (saludar(numero - 1), console.log("Saludo " + numero));
  };
  
saludar(10);
