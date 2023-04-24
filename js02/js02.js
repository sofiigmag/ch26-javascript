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
// porque lo hace así Number("5 0")/Number("2") = NaN