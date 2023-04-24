console.log("SesiónJS01");

// Son 7 datos primitivos:
// String: "Hola"
console.log("Tipo de dato String: ", "Hola");

// Number: 12, -45, 367.12, +Infinity, NaN
// Los numéricos usan 64 bits para almacenar, pero solo se usan 53 bits
// para representar el número, el resto de los bits son para almecenar el signo
// y otros detalles del número
console.log("Tipo de dato Number: ", 12, -45, 367.12, 45/0, -56/0, 56*"hola");
// El máximo valor que puede almecenar
console.log("Valor máximo: ", Number.MAX_VALUE);
// Pero este es el valor máximo que se puede representar seguro
console.log("Valor seguro: ", Number.MAX_SAFE_INTEGER);

// BigInt
// Sirven para representar valores numéricos enteros de los que el tipo number
// no puede representar o no es seguro.
// El BigInt no tiene un límite de memoria, puede usar toda la memoria
// de la compu, pero tarda más en procesarse
console.log("MAX_SAFE_INTEGER + 1: ", Number.MAX_SAFE_INTEGER + 1);
console.log("MAX_SAFE_INTEGER + 2: ", Number.MAX_SAFE_INTEGER + 2);// así no representa el valor
let myBigInt = 9007199254740991n; // se agrega la letra n al final
console.log("Valor de dato BigInt: ", myBigInt);
console.log("MAX_SAFE_INTEGER + 1n:", myBigInt + 1n );
console.log("MAX_SAFE_INTEGER + 1n:", myBigInt + 2n );// así sí representa el valor

// Boolean
//Tenemos solo 2 estados: true/false
console.log("Tipo de datos boolean: ", true);
console.log("Tipo de datos boolean: ", false);

// Undefined
// Un dato que es declarado, pero no definido en el tipo
let myVar; // solo se declara
console.log("Tipo de dato undefined: ", myVar);

// null
// Intencionalmente se borra el tipo de dato
let myVarNull;// solo se declara
console.log("Tipo de dato myVarNull: ", typeof(myVarNull)); // regresa undefined como salida del typeof 
myVarNull = "Saludos Sr. PP";// se asigna un dato string
console.log("Tipo de dato myVarNull: ", typeof(myVarNull)); // string
myVarNull = null;
console.log("Tipo de dato myVarNull: ", typeof(myVarNull)); // object, sale object porque es un error en JavaScript

// symbol
// crea propiedades privadas en los objetos, oculta propiedades en los objetos
// las propiedades privadas ocultan información

// ---------------------------------------------------
// Tipos de datos Object
// Objetc: 
const misDatos = {
    // clave: valor
    nombre: "Milo",
    apellido: "Donlucas",
    edad: 39,
    isBelicoso: false,
    // objeto dentro de otro objeto
    musicaPreferidaPorGenero: {
        rock: "La celula que explota",
        corridosTumbados: "Ella baila sola"
    }
}

console.log("Datos completos: ", misDatos);
console.log("Nombre: ", misDatos.nombre);
console.log("Música de fin de semana: ", misDatos.musicaPreferidaPorGenero.corridosTumbados);


