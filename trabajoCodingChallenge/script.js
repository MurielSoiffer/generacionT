// -----------ejercicio 1-------------
//-----Tiempo que me tomo 4 minutos y 13 segundos
function testEvaluador(n){
    switch(typeof n == 'number'){
        case n >=0 && n < 2:
            return "Muy mal";
        case n >=2 && n < 5:
            return "Mal";
        case n >=5 && n < 6:
            return "Tan cerca pero tan lejos";
        case n >=6 && n < 8:
            return "Bien!";
        case n >=8 && n < 10:
            return "Muy bien!!";
    }
}
let nota = prompt("¿Cual es tu nota?")
console.log(testEvaluador(nota));

// -----------ejercicio 2-------------
//-----Tiempo que me tomo 3 minutos y 6 segundos

function biggestOne(num1, num2, pal){
    if(num1 == num2){
        return pal[0] + pal[pal.length -1]
    }
    else if(num1 > num2)
        return num1;
    else
        return num2;
}
let n1 = prompt("numero 1")
let n2 = prompt("numero 2")
let p = prompt("palabra")
console.log(biggestOne(n1,n2,));

// -----------ejercicio 3-------------
//-----Tiempo que me tomo 4 minutos y 2 segundos

let frutasYVerduras =
[{fruta:"banana"},{verdura:"apio"},{fruta:"manzana"},{fruta:"frutilla"},{verdura:"zanahoria"},{fruta:"kiwi"},{fruta:"sandia"},{fruta:"melon"},{verdura:"repollo"},{fruta:"mango"}]

function filtrarFruta(fruYver){
    const frutas = []
    for (let i = 0; i < fruYver.length; i++) {
    const item = fruYver[i];
    if (item.fruta) {
      frutas.push(item.fruta);
    }
  }
    return {frutas };
}
const res = filtrarFruta(frutasYVerduras)
console.log(res)

// -----------ejercicio 4-------------
//-----Tiempo que me tomo 5 minutos y 37 segundos

function dispenserGaseosa(un, gas){
    const gaseosasEnStock = {}
    for (let i = 0; i < gas.length; i++) {
    // Asignar el número de unidades a cada gaseosa en el objeto
    gaseosasEnStock[gas[i]] = un[i] || 0;
    }
    return gaseosasEnStock;
}

let unidades = [1, 2, 3, 4];
let gaseosas = ["cocacola", "sprite", "fanta", "seven up"];

const resultado = dispenserGaseosa(unidades,gaseosas)
console.log(resultado)
console.log(resultado.cocacola)
if(resultado.cocacola>0) console.log("Hay Stock")

// -----------ejercicio 5-------------
//-----Tiempo que me tomo 6 minutos y 12 segundos

function agregarAño(personas){
    const añoActual = 2025;
    const arrayArreglado = personas.map(persona =>{
        let añon = añoActual - persona.edad;
    return { nombre: persona.nombre, edad:persona.edad, añoNac: añon };
    })
    return arrayArreglado;
}

let test = [{nombre: "Juan", edad:19},{nombre:"Mario", edad: 22}];

const personaCambio = agregarAño(test);
console.log(personaCambio)