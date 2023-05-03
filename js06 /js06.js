console.log("Sesión JS06");

console.log("Sesión JS06");

// función definida sí tiene hoisting
function findElementByIdFnc01 (/*parametros*/) {
    /* instrucciones*/
    return 3*4;
}

// función expresada 
//no tiene hoisting no se carga en memoria hasta 
// que no se utiliza
const findElementByIdFnc02 = function ( /*parámetros*/) {
    return 3*4;
} ;

// función flecha no necesita function pero si la flechita
// en las funciones flecha si se necesita poner punto y coma
// después de la última llave
const findElementByIdFnc03 = (/*parámetros*/) => {
    return 3*4
};

// función flecha sin llaves porque es una sola instrucción, y sin return
const findElementByIdFnc04 = () => 3*4;

// función flecha sin paréntesis porque solo tiene un parámetro

const findElementByIdFnc05 = variableParametro => 3*4;

const findElementById = ( nameOfDeveloper) => {
    const tituloRef = document.getElementById("titulo");

    tituloRef.innerHTML += nameOfDeveloper;

}

findElementById(", Sergio");

const changeSubtitleById = ( newTxt) => {
    const subtitleRef = document.getElementById("subtitulo");

    subtitleRef.innerHTML = `${subtitleRef.innerText}, <em>${newTxt}</em>`;

}
changeSubtitleById("viernes de cholos")

//-------------------Encontrar elementos por su tag
// getElementsByTagName()

const changeEmphasis = ( newTxt ) => {

};

changeEmphasis("viernes friki");