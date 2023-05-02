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

// Operadores de incremento y decremento en una unidad
// Operador de pre-incremento y pre-decremento
// pre-incremento ++valor
// pre-decremento --valor


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

const noDefinido = true;
console.log ( noDefinido || theBigBang );

// Quiero imprimir "Estás autorizado" si la variable isOnline y isActive son true.

// con if
const isOnline = true;
const isActive = true;
if (isOnline == true){
    if ( isActive ){
        console.log("Estas autorizado");
    }
}

// con un if pero abreviado
if (isOnline && isActive)
    console.log("Estas autorizado");

// operador ternario
console.log(isOnline && isActive ? "Estas Autorizado":"No estas autorizado");

// con corto circuito
console.log(isOnline && isActive && "Estas autorizado");

// --------------------Operaciones relacionales--------------------
/*
Un operador de comparación compara sus operandos y devuelve un valor lógico en función de si la comparación es verdadera (true) o falsa (false). Los operandos pueden ser valores numéricos, de cadena, lógicos u objetos. Las cadenas se comparan según el orden lexicográfico estándar, utilizando valores Unicode. En la mayoría de los casos, si los dos operandos no son del mismo tipo, JavaScript intenta convertirlos a un tipo apropiado para la comparación. Este comportamiento generalmente resulta en comparar los operandos numéricamente.

< menor que
> mayor que
<= menor o igual que
>= mayor o igual que
== igual que

*/ 

console.log( true == "true"); // false, porque la conversión de true a numérico es 1 y la conversión de una cadena a 
// numérico da NaN, entonces 1 no es igual a NaN
console.log( 23 < "40"); // True, sí se puede convertir un número escrito como string a tipo numérico, entonces
// 23 < 40 es true
console.log( "b" < "A" ); // false, porque en unicode el valor de las mayusculas es menor que las minúsculas
// el unicode de A es 65, el de b es 98, entonces 98 < 65  es falso

console.log( "Hola" < "HOLA"); // false, las primeras letras son igual, pero la o en una es mayúscula y en la otra es
// minúscula 

console.log( "Hola" < "123"); // false, los números son menores que las letras, H : 72, 1 : 49

console.log( "Hola " < "KeHace" + 1000 ); // true, "KeHace" + 1000 se concatena a  Kehace1000 por la jerarquia de
//operaciones, entonces se compara "Hola" < "KeHace1000" por su valor unicode H es menor que K

console.log( "23" == 23 ); // true

// -------------- Comparación estricta ------------------
/*
=== estrictamente igual, se compara el valor y el tipo
!== estrictamente diferente, debe ser diferente en valor y tipo

*/

console.log( "23" === 23 ); // false
console.log( "true" === true); // false
console.log( "45" !== true); // true

// Operador de asignación 
const myNumber = 34; 

// Desestructuración (Destructuring)
/*
     Es una expresión en JS que hace posible extraer datos de arreglos u objetos y nos
     ayuda a realizar asignaciones más complejas.
*/
// Quiero intercambiar los datos
let dataA = 10;
let dataB = 20;
console.log(`a: ${dataA}, b:${dataB} `);

/* sin desestructuracion
let temporal;
temporal = dataA;
dataA = dataB;
dataB = temporal;
console.log(`a: ${dataA}, b:${dataB} `);
*/

// con desestructuración 
[ dataA, dataB ] = [ dataB, dataA ];
console.log(`a: ${dataA}, b:${dataB} `);

const  calificaciones = [50, 80 , 100, 30, 60, 99 ];
// dataA = calificaciones[0]; // 50
// dataB = calificaciones[1]; // 80
let resto; // rest parameter
[ dataA, , , dataB, ...resto ] = calificaciones;
console.log(`a: ${dataA}, b:${dataB} `);
console.log(resto)

// No importa la posición solamente el nombre del atributo
const primerAnio = {
    dataA: "43 alumnos",
    dataB: "50 alumnos",
    dataC: "20 alumnos"
};
( {dataA, dataB} = primerAnio);

console.log(`a: ${dataA}, b:${dataB} `);

const auto = {
    model: "Chevrolet",
    year: 2023,
    color: "red",
    motor: "2.0"
}

// asignando el valor model del objeto auto a la constante model
console.log("Modelo " + auto.model); // también se puede acceder con auto["model"]
                            //inicializar con un valor por default
// const { model, colorAuto = "Pistache"} = auto;
                            // Asignar un nuevo nombre al atributo
const { model, color: colorAuto } = auto;
console.log("Modelo " + model + ", color: " + colorAuto);


//--------ejercicio
/*
    Hacer una función que realice la división de 2 números y me entregue en entero el
    cociente y residuo  
*/

// como lo hice yo pero no entendi 
function division(a,b){
    return ("El cociente es : " + Math.round(a/b) + " y el residuo es " + Math.round(a%b) );
}
console.log (division(9,5));


// como lo hizo Goyo
 const division2 = (numA, numB) => {
    const cociente = parseInt(numA/numB);
    const residuo = numA % numB;
    return {cociente, residuo};
 }

const { cociente, residuo} = division2(9,5);
console.log(`El resultado de 9/5, cociente: ${cociente}, residuo ${residuo}`);

