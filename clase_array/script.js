let frutas = ["banana","manzana","pera"];

console.log(frutas);
console.log(frutas.length);

frutas[3] = "uva";
console.log(frutas);
frutas[10] = "mandarina";
console.log(frutas);

frutas.push("durazno", "ciruela");

//elimina el ultimo elemento
let menosfrutas = frutas.pop();

//agrega un elemento al inicio
let frutasshift = frutas.unshift("fruta")
//quita un elemento al inicio del arreglo
frutas.shift();

let indice = frutas.indexOf("pera");
console.log(indice);

let amigos = ["martin", "gino", "santi","facu", "hernan"];
console.log(amigos[0]);

//slice (agrega cierta cantidad de elementos de un arreglo a otro)

let algunos = amigos.slice(1,4);
console.log(algunos)

//splice (elimina cierta cantidad de elementos y tambien puede agregar)

//elimino en algunos 1 elemento en la posicion 2
algunos.slice(2,1)

//elimino en algunos 2 elementos empezando en la posicion 2 y agrego a luna en la posicion 2
algunos.slice(2,2, "luna")

//JOIN array a string

let texto = amigos.join(" ")
console.log(texto);

//
let edades = [12, 15, 33, 22, 19]

//lo que esta dentro del filter es una funcion anonima
let mayores = edades.filter(e => e >= 18);
console.log(mayores);

let mayor = edades.find(edad => edad >= 18);