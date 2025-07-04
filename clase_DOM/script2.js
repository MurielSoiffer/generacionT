// const titulotag = document.getElementsByTagName('p');
// const titulo = document.getElementsById('titulo')
const tituloquery = document.querySelector('#titulo')
console.log(tituloquery)

//acceder al contenido del texto
// tituloquery.querySelector.textContent

//cambiar el color del titulo
tituloquery.style.color = "blue"
tituloquery.style.backgroundColor = "yellow"

// addEvenListener --> agregar un detector de eventos

//sintaxis basica:
//elemento.addEventListener("tipoDeEvento", functionHandler)

const boton = document.querySelector(".saludar")
function sauldar(){
    alert("Hola soy un evento!")
}

// boton.addEventListener("click",()=> {alert("Hola soy un evento")})

boton.addEventListener("click",sauldar)