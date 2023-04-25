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

//---------------------Parámetros rest--------------
// Rest parameters Sintaxis: ...nombreParametro
// Nos permite representar una serie de valores indefinidos en los argumentos
// Estos se presentan como un array
// Debe estar al final de la lista de parámetros

function sumatoriaVariosNumeros( a,b, ...restoDatos){
    let suma;
    suma = a + b;
    for (let index = 0; index < restoDatos.length; index++) {
        suma += restoDatos[index]; // suma = suma + restoDatos[index]
    }

    return suma;
}

console.log("Sumatoria de varios números: " + sumatoriaVariosNumeros(5,6));
console.log("Sumatoria de varios números: " + sumatoriaVariosNumeros(5, 6, 9, 10, 20, 50)); //100

// -----------------Funciones de Callback-----------
// Función que se pasa a otra función como argumento, para luego invocarse
// para completar algún tipo de rutina o acción.

// 3 funciones, una que imprima en consola, alert, DOM h1.
// 1 parámetro de entrada
// no tiene return

// Código Sergio


// Función que imprime un mensaje en la consola
function printToConsole(mensaje) {
    console.log(mensaje);
  }
  
  // Función que muestra una alerta en la pantalla
  function showAlert(mensaje) {
    alert(mensaje);
  }
  
  // Función que agrega un encabezado h1 al DOM
  function addH1ToDOM(mensaje) {
    const h1 = document.createElement("h1");
    h1.innerText = mensaje;
    document.body.appendChild(h1);
  }
  
  const addH1 = (mensaje) =>{
      document.querySelector("#div").innerHTML = `<h1>${mensaje}</h1>`
  };
  
  function getNamePrintToConsole(   ){
      const name = prompt("Dime tu nombre");
      const text = `Hola ${name}, espero tengas un gran día`;
      printToConsole(text);
  }
  function getNamePrintToDOM(   ){
      const name = prompt("Dime tu nombre");
      const text = `Hola ${name}, espero tengas un gran día`;
      addH1(text);
  }
  function getNameAndPrint( funcionImprimir   ){ // Esta es la buena
      const name = prompt("Dime tu nombre");
      const text = `Hola ${name}, espero tengas un gran día`;
      funcionImprimir(text);
  }
  // getNameAndPrint( printToConsole );
  // getNameAndPrint( showAlert );
  // getNameAndPrint( addH1 );

  function double(arr) {
    const doubleNumbers = [];
    for (let i = 0; i < arr.length; i++) {
      const duplicate = arr[i] * 2;
      doubleNumbers.push(duplicate);
    }
   return doubleNumbers;
}

// Función que nos sirve de callback
// const duplicate = (number) => number * 2;
/*
// a la función map le estamos pasando la referencia de la función number
 
function doubleWithMap ( array ){
    const duplicateNumber = array.map( function( number ){
        return number * 2;
    });
    return duplicateNumber;
}

*/

function doubleWithMap ( array ){
    const duplicateNumber = array.map( number => number * 2 );
    return duplicateNumber;
}

function doubleWithMap2Lines ( array ){
    return array.map( number => number * 2 );
}

// esta línea hace lo mismo que la función anterior pero en una línea
// console.log([5, 10, 15, 20, 25].map(number => number * 2));


const numbers = [5, 10, 15, 20, 25]; 
// console.log(double(numbers));
// console.log(numbers.map(number => number * 2)); // numbers.map()
console.log(doubleWithMap(numbers));
console.log(doubleWithMap2Lines(numbers));
console.log(numbers);

/*
  Ejercicio 4
  Crear un programa que itere sobre dos arreglos;
  si hay cursos en común, imprimirlos en la consola.

  salida: 
*/


const student1Courses = ["Math", "English", "Programming","Biology","Physics","Music"];
const student2Courses = ["Geography", "Spanish", "Programming","Music"];
const student3Courses = ["Music"];

function cursosEnComun (student1Courses,student2Courses) {
    for (let i=0; i < student1Courses.length; i++) {
     for (let j=0; j < student2Courses.length; j++) {
      if (student1Courses[i] == student2Courses[j]){
       console.log ("Cursos en común :" + student1Courses[i]);
      }
     }
    } 
  }
  
function cursosEnComun2(student1Courses, student2Courses){
    const courses = [];
    for(let i=0; i<student1Courses.length; i++){
        for(let j=0; j<student2Courses.length; j++){
            if(student1Courses[i]===student2Courses[j])
                courses.push( student2Courses[j]);
        }
    }
    return `Cursos en comun ${courses}`
}


function cursosEnComun3 (student1Courses,student2Courses) {
    console.log("Cursos en común :" , student1Courses.filter(function(curso) {
     if (student2Courses.includes(curso)) {
      return curso
     }
    }))
  }

  console.log(cursosEnComun(student1Courses,student2Courses));
  console.log(cursosEnComun2(student1Courses,student2Courses ));
  console.log(cursosEnComun3(student1Courses,student2Courses));

  // Usar filter y usar includes
  function cursosEnComun4 (student1Courses,student2Courses) {
     return student1Courses.filter(curso => student2Courses.includes(curso));
    }

  //console.log(cursosEnComun4(student1Courses,student2Courses));
const commonCourses = cursosEnComun4(student1Courses, student2Courses);
console.log("Cursos en común:", commonCourses.join(", "));


// para 3 estudiantes
const commonCourses3Students = cursosEnComun4(commonCourses, student3Courses);
console.log("Cursos en común 3 estudiantes:", commonCourses3Students.join(", "));

//------------Contar la cantidad de caracteres de una frase------------
// pepe pecas pica papas con un pico y una pala
// la cantidad de letras 'p':8
// resolverlo usando arrow function

// como lo resolvió Mario
phrase = 'pepe pecas pica papas con un pico y una pala'

const countChar = (p, phrase) => phrase.split("").filter(c => c == p).length;

console.log("Cantidad de letras 'p':", countChar('p', phrase))

// mi intento mix con el de Mario
const pepePecas = "pepe pecas pica papas con un pico y una pala";
const pepePecasArray = pepePecas.split("");
const letrasP = pepePecasArray.filter(letra => letra === 'p').length;
console.log("Número de p: " + letrasP);

// como lo hizo Goyo

const frase = "pepe pecas pica papas con un pico y una pala";
const cuenta = (frase) => frase.split("").filter(caracter => caracter ==="p").length;

console.log("Cantidad de letras p: ", cuenta(frase));
console.log("Cantidad de letras p: ", ((frase) => frase.split("").filter(caracter => caracter ==="p").length)(frase));

// simplificar el código no debe hacerlo complicado para entender,
// es mejor tener más líneas que hacerlo difícil de entender