//Codigo SINCRONICO
console.log("A")
console.log("B")
console.log("C")

//Codigo ASINCRONICO
console.log("A")
setTimeout(() => console.log("b"), 2000)
console.log("C")

// Callbacks hell: codigo anidado y dificil de mantener
//Promises / async Await ---> solucion moderna

//Promise: objeto que representa a una tarea asincornica
// se puede cumplir (resolve) o se puede rechazar (reject)

//ejemplo promise
const miPromise = new Promise((resolve,reject)=>{
    //aca va todo el codigo asincronico
    let todobien = true;
    if(todobien){
        resolve("Exito")
    }else{
        reject("Algo salio mal")
    }
})

//consumirla/usarla
//El then se ejecuta cuando la promesa funciona bien osea que es el caos de exito y envia el resolve, el catch es el caso de error osea que se ejecuta cuando la promesa no funciona y ahi devuelve el reject

//-----------------------------------------

miPromise.then(resultado =>{
    console.log(resultado)
})
.catch(error => console.log(error));

//-----------------------------------------

const boton = document.getElementById("miBoton")

function simularEnvio(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const todobien = 0.1 > 0.3
            if(todobien){
                resolve("El form se envio bien")
            }
            else{
                reject("El formulario no salio bien")
            }
        }, 1500)
        
    })
}

boton.addEventListener("click",()=> {
    simularEnvio().then(resp => { alert(resp)})
    .catch(error =>{alert(error)})
})