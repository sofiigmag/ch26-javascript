console.log("JS09 uso de Axios");

const url = "https://reqres.in/api/users?page=2"

const getUsersFetch = () => {

    fetch(url)
    .then( response => response.json() )
    .then( users => {
        console.log(users.data);
    })
    .catch( error => console.log(error));

}

const getUsersAxios = () => {

    axios.get( url )
        .then( users => {
            console.log( users.data.data );
        })
        .catch( error => console.log(error));

}

// --------------- Usar Axios con async y await

const getUsersAxiosAwait = async () =>{
    try{
        const users = await axios.get(url);
            console.log( users);
    } catch (error) {
        console.log(error);
        //alert( error.message);
    }
};

// ------------- Solicitud Post con Axios
// get userData

const postAxios = async () => {
    const newUser = await axios.post("https://reqres.in/api/users", {
        name: "morpheus",
        job: "leader"
    })
    .then( users => {
        console.log( users.data);
    })
    .catch( error => console.log(error));

}