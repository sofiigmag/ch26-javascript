console.log("JS08 Objetos");

// ----------Crear un objeto---------

const frutasColores = { 
    // clave: valor
    fresa: ["roja"],
    pepino: ["verde"],
    mango: ["amarillo"],
    naranja: ["anaranjado"],
    mandarina: ["anaranjado"],
    mora: ["morada"],
    pitaya: ["rosa","rojo","blanco","amarillo"]
};

//--------- Formas de leer un objeto-------
// Leer el color del pepino

console.log("El pepino es " + frutasColores.pepino); // verde
console.log("La pitaya es " + frutasColores.pitaya[1]);//rojo
console.log("La pitaya es " + frutasColores.pitaya.join("-"));//rojo

// Modificar un valor
// Agregar el color verde al mango

frutasColores.mango.push("verde");
// frutasColores.mango = "verde";
console.log("El mango es "+ frutasColores.mango);
console.log("El mango es "+ frutasColores["mango"]);

// -------------Iterando los objetos ----------------------------------
// Iterar los valores con for-in
// iterar sobre todas las propiedades (keys) de un objeto

for(let fruta in frutasColores){ // fruta tendrá las claves
    console.log( `${fruta} tiene los colores ${frutasColores[ fruta]}` )
}

// ------------ Uso de symbol ----------------
/*
    Se utiliza para añadir claves de propiedades únicas y que estén ocultas
    a otros mecanismos como la iteración y stringify.

    Esto nos sirve para realizar el proceso de encapsulación, es decir, 
    no tener acceso a las propiedades del objeto.
*/
const sueldoOculto = Symbol();

const datosEmpleado = {
    nombre : "El kesas",
    apellido: "Britas",
    [sueldoOculto]: 50_000,

}

for (let dato in datosEmpleado){
    console.log(`${dato}: ${datosEmpleado[dato]}`)
}

//console.log(datosEmpleado[sueldoOculto]);
sessionStorage.setItem("datos-empleado", JSON.stringify( datosEmpleado));

// Bote de lunetas
