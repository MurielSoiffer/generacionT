let genero = prompt("¿Con que genero te identificas? (hombre/mujer)").toLocaleLowerCase();
let edad = prompt("¿Cual es tu edad?");
genero = genero.trim();


if(genero !="" && edad != ""){
    switch(genero){
    case "mujer":
        console.log(edad>= 60 ? "Puede juvilarse": "No puede juvilarse");
        break;
    case "hombre":
        console.log(edad>= 65 ? "Puede juvilarse": "No puede juvilarse");
        break;
    default:
        console.log("Este genero no es valido");
        break;
    }
}
else{
    console.log("No ingreso alguno de los 2 datos");
}