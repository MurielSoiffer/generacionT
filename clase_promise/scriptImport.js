import { suma, PI } from "./archivosuma.js";
// import data from "./data.json"

console.log(suma(3,6))

console.log(PI)

console.log(data)

const usuario = {
    "nombre": "Ana",
    "edad":23,
    "esActivo":1,
    "hobbie": ["futbol", "deporte"]
}

//obj a json
const texto = JSON.stringify(usuario)
console.log(texto)
const obj = JSON.parse(texto)
console.log(obj)