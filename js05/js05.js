console.log("Sesión JS05");

// -----Operadores aritméticos-------------
// Adición +
// Multiplicación *
// Sustracción -
// División /
// Exponencial **
// Resto %

// ejemplo
let dinero = 20 + 10; // 30

//-----------Operadores de asignación----------
// Asigna un valor a su operando izquierdo basándose en el valor de
// su operando derecho
// Asignación = 
// Asignación de adición +=
dinero += 15; // dinero = dinero +15;
// Multiplicación *=
// Sustracción -=
// División /=
// Exponencial **=
// Resto %=
12 + 7 + 12 + 4 + 1;

2 ** 3 ** 2; // 512

//----------Operadores Unarios----------
// Un operador unario realiza una operación en un solo operando.
// Negación -
dinero = - 3;  // -3 // -= 3 -> dinero= dinero - 3
console.log(dinero); 
// Conversión a numérico +
dinero = +dinero; // Sigue siendo -3
dinero = + "200"; // 200 numérico
console.log(dinero);

// typeof
// Operador lógico not     !
let valorBooleano = !true;
console.log(valorBooleano);

// Operadores de incremento y decremento 


// Operador de post-incrmento y post-decremento
// post-incremento valor++
// post-decremento valor--


let numero = 10;
numero ++; // 11
++ numero; // 12
console.log(numero); // 12

let nuevoValor = numero ++;
/*
    let nuevoValor = numero;
    numero = numero + 1
*/
console.log("nuevo Valor: ",nuevoValor); // 12
console.log("numero", numero) // 13

let nuevoDato = ++ numero;
/*
    numero = numero + 1;
    nuevoDato = numero;

*/

console.log("nuevoDato", nuevoDato); // 14
console.log("numero", numero); // 14

let x = 3;
let y = ++x;
console.log(`x: ${x++} y: ${++y}`); // 4, 5
console.log(`x: ${x} y: ${y}`); // 5, 5

// ------------- Operadores lógicos AND && y OR || 

const a = true;
const b = true;
const c = true;
console.log( a || b && c ); // true

// Operadores de corto circuito
// Cuando los operadores lógicos AND y OR actuan sobre operandos diferentes a booleanos.

// OP1 && OP2 Si OP1 es verdadero, se realiza el resultado de OP2
// si lo de la izquierda es verdadero se realiza lo de la derecha
console.log( a && "Holi Crayoli" ); 
console.log( b && "Holi Crayoli" ); 
console.log( NaN && "El valor es un número que se puede procesar" ) // NaN
console.log( "false" && "El valor es false"  ); // El valor es false
console.log("" && "No hay dato"); // ""

// OP1 || OP2 si OP1 es verdadero, se realiza el resultado de OP1, si no se realiza OP2
console.log( a || "Holi Crayoli" ); // true
console.log( b || "Holi Crayoli" ); // "Holi Crayoli"
console.log( NaN || "El valor es un número que se puede procesar" ) // "El valor es un número que se puede procesar"
console.log( "false" || "El valor es false"  ); // "false"
console.log("" || "No hay dato"); // "No hay dato"

