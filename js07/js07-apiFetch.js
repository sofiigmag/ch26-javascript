console.log("js 07 Api Fetch");

/*
    La Api Fetch nos ayuda a acceder y manipular peticiones HTTP. Proporciona
    una forma lógica y fácil de obtener recursos de la red de manera ASÍNCRONA.
    Básicamente es una promesa asíncrona.

    Sintaxis:

    Solicitud get

    fetch( url )
    .then( )
    .catch( ); 

*/
/*
const url ="https://fakestoreapi.com/products";

const getProducts = (httpUrl) => {

    fetch( httpUrl )
        .then( result=> {
            console.log("Respuesta: " + result.status);
            return result.json(); // conversion de json a objeto
        } )
        .then((productsObj)=> {
                console.log(productsObj)
                for (product of productsObj){
                    console.log(product.title);
                }
            })
        .catch(error=> console.log(error) );
}

getProducts ( url );

//---------Consumir Fetch usando async-await 

const getProductsWithAwait= async (httpUrl) => {
    try{
    const productsJson = await fetch(httpUrl);
    const products = await productsJson.json();//Conversion de JSon a objeto
    console.log(products);
    localStorage.setItem("misProductos", JSON.stringify (products) ) // (key, value)
                                         // convertir a json
    for (let product of products) console.log(product.title);
    } catch (error) {
        console.error(error);
    }
};
*/

//getProductsWithAwait ( url );

// -----------------Realizar una solicitud POST-----

const postUser= (url, userData) => {
    fetch( url, {
        method: 'POST', // PUT o DELETE
        body: JSON.stringify(userData) , // los datos del usuario, conversión Obj->JSON
        headers: { 'Content-Type': 'application/json'}
    })
        .then((response)=> response.json() )
        .then((register)=> console.log(register) )
        .catch((error)=>{console.log (error)});
}

const user = {
    name: "dogface",
    job: "leader"
};

const urlPOST = "https://reqres.in/api/users";

postUser( urlPOST, user );