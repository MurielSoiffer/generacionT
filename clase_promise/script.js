const pr1 = Promise.resolve(1)
const pr2 = Promise.resolve(32)

//Funciona cuando todas las promises dentro del promise.all son verdaderas, si una no lo es entonces no funciona
Promise.all(pr1, pr2)

Promise().then()
.catch()
.finally()
//el then se ejecuta cuando todo sucede correctamente dentro de la promise, cuando funciona incorrectamente se ejecuta el catch y el finally se ejecuta siempre sin importar el resultado de la promise


//Async y Await son palabras clave para trabajar con promesas de forma mas simple en java script

//una funcion nativa de js para url
fetch("url")
    .then(res => res.json())
    .then(data => console.log(data));


//Se crea  una funcion asincronica que se llama traer, el await hace que espere a resivir la respuesta del primero antes de seguir con la siguiente linea
async function traer(){
    let resp = await fetch("url")
    let data = await resp.json()
    console.log(data)
}

async function tryTraer(){
    try{
        let resp = await fetch("url")
        let data = await resp.json()
        console.log(data)
    }
    catch{
        console.error("Ocurrió un error", error);
    }
}