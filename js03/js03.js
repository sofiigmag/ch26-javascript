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

const temperatura =  100;
let mensaje;

// if (temperatura === 21) mensaje = `Temperatura ideal ${temperatura}`;
// else mensaje = `${temperatura} grados no es ideal`;

if (temperatura === 21) 
    mensaje = `Temperatura ideal ${temperatura}`;
else if (temperatura>21)
    mensaje = `Temperatura de ${temperatura} grados es caliente`;
else if (temperatura<21)
    mensaje = `Temperatura de ${temperatura} grados es fría`;
else
    mensaje = `Temperatura de ${temperatura} grados no existe`;

console.log(mensaje);

