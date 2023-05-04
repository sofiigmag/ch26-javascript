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

// 
const changeEmphasis = (newtxt,url) => {
    const emphasisRef = document.getElementsByTagName("em");
    // console.log(emphasisRef)
    for (element of emphasisRef) {
        console.log(element);
        element.innerHTML = `<a href="${url}" target="_blank">${newtxt}</a>`;
    }
};

changeEmphasis("Viernes friki","https://frikishop.com.mx/");
changeEmphasis("viernes de cholo", "https://www.youtube.com/watch?v=dbdYRc5Cc7Y")

// ----------------Selector universal
// querySelector

const findElementsByQuerySelector = () => {
    const refElements = document.querySelector(".noticias");
    refElements.innerHTML = `La Ch 26 es bien <strong>chida</strong> y les gusta el 11:11`;
}
findElementsByQuerySelector();

// para filtrar un elemento que tiene una etiqueta, clase o id igual a otro
// se puede dar referencia de su elemento padre

const findElementsByQuerySelector2= () => {
    const refElements = document.querySelector("p em");
    refElements.innerHTML = `La Ch 26 es bien <strong>chida</strong> y les gusta el 11:11 (2)`;
}
findElementsByQuerySelector2();

// --------------Crear nuevo elemento---------------
// appendChild

const newElement= ()=> {
    const newElementRef = document.createElement("p"); // <p> </p>

    newElementRef.innerHTML = `A la Ch 26 le gusta:
    <ul>
        <li>EL pan de muerto</li>
        <li>El chismecito</li>
        <li>El pozole</li>
        <li>Pizza</li>
        <li>El pulque</li>
    </ul>
    `
    const articleRef = document.querySelector("article");
    articleRef.appendChild( newElementRef ); // Se agrega el nuevo elemento
    // Clonar el nodo anterior
    // const nodoClonado = articleRef.cloneNode( true );
    // document.getElementById("article-news").appendChild( nodoClonado ); 
};

newElement();

const changeColor = ( color ) => {
    const refIntro = document.getElementById("noticias");
    refIntro.style.color = color;
}

changeColor("red");

// Agregar a un elemento un border

const addBorder = () => {
    const refTitulo= document.getElementById("titulo");
    refTitulo.style.border = "thick solid #ff0088 ";
}

addBorder();


const addBorder2 = ( color) => {
    const refSubtitulo= document.getElementById("subtitulo");
    refSubtitulo.style.border = `thick solid ${color}` ;
}

addBorder2("pink");

//--------------Propiedades de visualización (desaparecer elementos)--------------------
// display: none (Quitar el elemento del DOM).
// visibility: hidden (Ocultar el elemento). 

const quitarBoton = ( ) => {
    const buttonRef = document.getElementById("botonB");
    buttonRef.style.display= "none"; // quitar elemento
} 

const ocultarBoton = () => {
    const buttonRef = document.getElementById("botonB");
    buttonRef.style.visibility= "hidden"; // ocultar elemento

}

const reestablecerBoton = () => {
    const buttonRef = document.getElementById("botonB");
    buttonRef.style.visibility= "visible"; // reestablecer elemento
    buttonRef.style.display= "inline";

}
