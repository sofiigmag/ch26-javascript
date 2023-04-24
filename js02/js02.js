console.log("Sesión JS02");

//---------Función declarada---------
// Function declaration, function statement
// Una característica es que las funciones declaradas tienen hoisting

//console.log("El resultado de 5*10 = " + multiplica(5,10));// invocando la función

multiplica(5,10);//invocando la función sin retorno
multiplica(8,8);
multiplica(-4,2);

/* Sintaxis
     function nombreFuncionCamelCase ( parametros ){
        instrucciones;
     }

     */
function multiplica(operandoA, operandoB){
     const resultado = operandoA * operandoB;
     console.log(resultado);
}

function divide(dividendo, divisor){
    return dividendo/divisor;
}
/* {
    // este es un bloque de código
    const operandoA = 5
    const operandoB = 10
    const resultado = operandoA*operandoB;
    console.log(resultado);
}
 */


console.log(divide(5,2)); // 2.5
console.log(divide(5,"2")); // 2.5, cualquier dato se trata de convertir a numérico
console.log(divide("5","2")); // 2.5, cualquier dato se trata de convertir a numérico
console.log(divide("5 0","2")); // NaN, aquí también lo intenta convertir pero  el espacio no lo puede convertir
// porque lo hace así Number("5 0")/Number("2") = NaN, no puede convertir más alla del 5 en "5 0"


//----------------Funciones expresadas---------
// Function expressions
// Son declaradas dentro de la asignación de una variable
// Estas funciones pueden ser anónimas (no tienen nombre)
// Las funciones expresadas no tienen hoisting porque no se
// carga en memoria hasta que se utilice.

/* Sintaxis

const nombreVariable = function nombreFunction (parámetros) {
    instrucciones; 
}
*/

const sum = function sumatoria ( a, b){
    return a + b;
};

// función anónima, como está dentro de una variable
// no necesita nombre
const potencia = function (a, b){
    return a**b;
};

console.log(sum(9,9));
console.log(potencia(9,2));

//------ funciones autoinvocadas
// self-invoking function 
// se invocan a sí mismas, se pueden definir con funciones anónimas
// pueden servir para inicializar cosas

(function (){
    console.log("Me autoinvoco en la función");
}) ();

// ---- Funciones Flecha ------------
// Arrow Functions
// Son funciones similares a las funciones declaradas, pero:
// No requieren la palabra function
// Si tiene una sola instrucción no requiere las llaves {}
// Si la instrucción es el mismo retorno, no requiere la palabra return

/*
const areaRectangulo = function (base, altura) {
    return base * altura;
}

console.log("El área del rectángulo de 2x5 es: " + areaRectangulo(2,5));
*/

const areaRectangulo = (base, altura) => base * altura;

console.log("El área del rectángulo de 2x8 es: " + areaRectangulo(2,8));

//-------- Parámetros default----------------
/**
 * Este comentario es la documentación de la función
 * @param {number} base esto es la descripción de base
 * @param {number} altura esto es la descripción de altura
 * @returns área del triángulo
 */
const areaTriangulo = (base=1, altura=1) => base * altura / 2;

console.log("Área de triángulo b:5 a:10 = " + areaTriangulo(5,10));
console.log("Área de triángulo b:8 = " + areaTriangulo(8));//