console.log("JS07 Promesas");

/* 
    Una promesa es un objeto que representa la terminación o fracaso de una operación
    asíncrona.

    Para crear una promesa se usa el constructor new Promise();

*/

// const pinkiPromise = new Promise( /*función de callback*/);
const pinkiPromise = new Promise ( (fncCallBackResolve, fncCallBackReject )=> {
    const menorEdad = false;

    if(menorEdad)
        fncCallBackResolve("Hay que estar siempre juntos");
    else
        fncCallBackReject("No te conozco");

}   );

// Consummir las  promesas
// usando los métodos then, catch y finally

console.log( "antes de consumir la promesa");

// then consume la parte resuelta
// pinkiPromise.then( fncCallBack )
// parametro response es enviada por then porque consume la parte resuleta de la promesa
// then consume la parte resolve
// pinkiPromise.catch( fncCallBack ).catch (fncCallBack)
// catch consume la parte rechazada
// parametro error es enviada por catch 

// Aquí estamos consumiendo la promesa de forma síncrona
pinkiPromise
    .then( ( response ) => console.log("Promesa resuelta " + response) )
    .catch( ( error )=> console.error("Tu promesa fue rechazada " + error ));

console.log("después de consumir  la promesa");

// Para consumirla de forma aaaasíncrona

//--------Una promesa que reciba dos números a y b y los divida
// en caso de que b sea cero, me envíe un rechazo diciéndome por qué
// no se puede realizar la división.

// mi intento complementado con el de Dave

const divisionPromesa = new Promise ( (fncCallBackResuelta, fncCallBackRechazada) => {
    const a = 10;
    const b = 2;

    if (b !== 0 )
        fncCallBackResuelta(a/b);
    else 
        fncCallBackRechazada("Dividir un número entre cero resulta en infinito");

} );

divisionPromesa
    .then( ( response ) => console.log("El resultado es " + response) )
    .catch( ( error )=> console.error("No se pudo realizar la división" + error ));

console.log("después de consumir  la promesa");

// ------------ Haciendo la división con parámetros-------------

//Necesitamos una función que reciba parámetros
//generamos una promesa que reciba la función divisionConParámetros

const divisionConParametros = (a,b) => {
    const myPromise = new Promise( (resolve, reject) => {
        if( b === 0)
            reject("No se puede realizar una división por cero");
            //setTimeout(() => reject (" division por cero!!"), 5000);
        else 
            resolve(a/b);
    } );
    //el return podría ponerse directamente donde se esta declarando myPromise
    return myPromise;
}
divisionConParametros(3,4)
// como en la siguiente función flecha hay más de una instrucción
// sí necesita llaves y return 
        .then( (response)=> {
        console.log(response);
        return response + 10
    }) // 0.75
    // este es un then encadenado y recibe la respuesta del then anterior
    .then((mas10Unidades) => console.log(mas10Unidades))
    .catch((error) => console.log(error))
    .finally(()=> console.log("Se terminó la división"));

// finally se ejecuta al final independientemente de que haya sido 
// resuelta o rechazada la función

divisionConParametros(3,0)
    .then( (response)=> console.log(response))
    .catch((error) => console.log(error)); // no se puede realizar una división por cero

//------ Consumir las promesas con async y await
// para que una función asíncrona se comporte como síncrona

console.log("-----------Resolviendo divisiones---------->")

const realizarDivisionSincrona = async () => {
    const resultado = await divisionConParametros(20,4); // el await necesita async
    console.log( resultado);
    console.log(resultado +100); 105
    // const resultadoErroneo = await divisionConParametros(20,0); // no se puede ralizar una división
    console.log(resultadoErroneo)
    console.log("-----------Terminanddo divisiones---------->")
}

// await espera a que se resuelva una promesa para continuar con la ejecución de las
// siguientes líneas
realizarDivisionSincrona();

// ---------------- Manejo de exepciones con try y catch
/*
    Sintaxis
    try{

    } catch( error ){

    
    }
*/

const manejoDeExepciones = async () =>{
    console.log("----Resolviendo divisiones usando try y catch---->");
    try {
        const resultadoErroneo = await divisionConParametros(20,0) ;
        console.log( resultadoErroneo)

    } catch (error) {
        console.error("Asyn-Await"+error)
    }  
    console.log("<----Terminando divisiones usando try y catch-----");
};

// con await solo puede consumir el resolve no el reject
manejoDeExepciones();

//---------------------------
// Promise.resolve();

const promesaRapida = Promise.resolve(123);

// Resolver con then

promesaRapida.then((response) => console.log("Promesa resuelta con then " + response));

const consumirConThen = () => {
    promesaRapida.then( value => console.log("Consumir con then " + value ));
    console.log(456);
}

//------------Resolver con asynch-await
const consumirConAwait = async () => {
    console.log( "Consumir con await " + await promesaRapida ) ;
    console.log(789);
};

consumirConThen();  
consumirConAwait();

// await 123
// 789