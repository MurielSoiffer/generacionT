let frutas = ["banana","manzana","pera"];

for( const fruta of frutas){
    console.log(fruta);
}
frutas.forEach(function(fruta, indece){
    console.log("Fruta en posicion ", indece, " es ", fruta);
})
frutas.forEach((fruta, indece) => {
    console.log("Fruta de arrow function en posicion ", indece, " es ", fruta);
})

let frutasTexto = frutas.map((fruta,indice) => {
    return `Fruta #${indice}:${fruta}`;
})

for( const fruta of frutasTexto){
    console.log(fruta);
}

let numeros = [1,2,3,4];

let resultados = numeros.map(numero => numero * 2);

let suma = numeros.reduce((acumuladora, num) => {
    return acumuladora + num;
},0);

console.log(suma);

//OBJETOS
//  Clave: nombre de una propiedad
//  Valor: Contenido asociado a la clave

let persona={
    nombre: "Agus",
    edad : 31,
    personaje : "Power ranger",
    saludar: function(){
        console.log("hola soy", this.nombre);
    }
}

persona.saludar();