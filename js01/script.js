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
const misDatosDePerfil = {
    // clave: valor
    nombre: "Milo",
    apellido: "Donlucas",
    edad: 39,
    isBelicoso: false,
    // objeto dentro de otro objeto
    musicaPreferidaPorGenero: {
        rock: "La celula que explota",
        corridosTumbados: "Ella baila sola"
    },
    nombreCompleto: function fullName(){
        //return misDatosDePerfil.nombre + " " + misDatosDePerfil.apellido + " , soy el belicón";
        return this.nombre + " " + this.apellido + " , soy el belicón";
    }
}
const miInstagram = {
    // clave: valor
    nombre: "El Belicoso",
    apellido: "666",
    edad: null,
    isBelicoso: true,
    musicaPreferidaPorGenero: {
        corridosTumbados: "El belicoso"
    },
    nombreCompleto: function fullName(){
        //return misDatosDePerfil.nombre + " " + misDatosDePerfil.apellido + " , soy el belicón";
        return this.nombre + " " + this.apellido + " , soy el belicón";
    }
}

console.log("Datos completos: ", misDatosDePerfil);
console.log("Nombre: ", misDatosDePerfil.nombre);
console.log("Música de fin de semana: ", misDatosDePerfil.musicaPreferidaPorGenero.corridosTumbados);

console.log("Nombre completo: ", misDatosDePerfil.nombreCompleto() );
console.log("Nombre completo: ", miInstagram.nombreCompleto() );

// Array
// Almacena diferentes tipos de datos, su primer elemento es el índice 0

const cancionesPP = [
    "Soy el Belicón",
    "El azul",
    "El Tsurito",
    "AMG",
    {
        2020: 5,
        2021: 30,
        2022: 56,
        total: 91
    }
];

console.log("Canción con color: ", cancionesPP[1]); 
// En los objetos podemos acceder por punto
console.log("Canciones hechas en el 2021: ", cancionesPP[4].total );
// En los objetos también podemos acceder por corchete pero poniendo la clave como cadena
console.log("Canciones hechas en el 2021: ", cancionesPP[4]["total"]);
console.log("Canciones hechas en el 2021: ", cancionesPP[4]["2021"]);
console.log("Canciones hechas en el 2021: ", cancionesPP[4][2021]);

console.log("Número total de elementos: " , cancionesPP.length);
// Si contiene la canción devuelve el índice
console.log("Contiene la canción AMG: ", cancionesPP.indexOf("AMG"));
// si no contiene la canción devuelve un -1
console.log("Contiene la canción AMG: ", cancionesPP.indexOf("AMGs"));
console.log("Contiene la canción AMG: ", cancionesPP.indexOf("AMG")>-1);

// -----------------------------------------------
// Conversión de datos
const myNumber = 420; // Minutos en la sesión JS 01
console.log("Num. minutos en la sesión: " + myNumber);
// toString
const myNumberTxt = String(myNumber);
console.log("Num. minutos en la sesión: " + myNumberTxt);

// toNumber
const myString = "420";
const sumatoria = 80 + Number(myString);
console.log("Valor de sumatoria: "+ sumatoria); // 500

// toParseInt
const myStringInteger = "420 5768"; 
const sumatoriaEntera = 80 + Number(myStringInteger);
console.log("Valor de sumatoria entera " + sumatoriaEntera); // 500

// toBoolean
const isBelicoso = "false";
console.log(typeof isBelicoso);
console.log(Boolean(isBelicoso));

if( isBelicoso === "false" )
    console.log("Denle su belikin");
else
     console.log("Abra paso a la barredora");

// Boolean     
// para que sea False, debe ser: "", 0, null, undefined, todo lo demás da true
// Number
// [] = 0, [30] = 30, [3,1] = NaN, false = 0, true = 1
// String
// []= "", [1,2]="1,2", function(){}= function(), {}= [object, object]



