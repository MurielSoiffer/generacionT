function crearPocion(magia, ingrediente){
    return"Pocion creada con " + magia + " y " + ingrediente;
}

//Convertir a funcion anomima asignada a una constante

const crearPocionAnonima = function (magia, ingrediente){
    return "Pocion creada con " + magia + " y " + ingrediente;
}

//arrow 1 primer nivel
const crearPocionArrow = (magia, ingrediente) => {
    return "Pocion creada con " + magia + " y " + ingrediente;
}
//arrow simplificada
const crearPocionArrowS = (magia, ingrediente) => 
    "Pocion creada con " + magia + " y " + ingrediente;

//objeto = representar algo del mundo real
let auto = {
    color: "Rojo",
    modelo: 2011,
    marca: "bmw",
    arrancar : function(){
        console.log("El auto esta en marcha"

        )
    }
}
console.log(auto.color)

let autos = [{
    color: "Rojo",
    modelo: 2011,
    marca: "bmw",
},
{
    color: "Azul",
    modelo: 2014,
    marca: "Reno",
}
]

//recorrer autos for .... of
//'for of' es para arrays
for (const auto of autos){
    console.log(auto.color)
}

//'for in' es para objetos
for(const propiedad in auto){
    console.log(propiedad + auto[propiedad])
}

console.log(auto["modelo"])

for(const clave in auto){
    console.log(clave + " "+ auto[clave])
}