const auto1 = document.querySelector(".auto1");
const auto2 = document.querySelector(".auto2");
const pista = document.querySelector("#pista");

let avancerojo = 0;
let avanceazul = 0;

 const paso = 20
 const meta = pista.offsetWidth - auto1.offsetWidth - 20;

 window.addEventListener ("keyup", function(e){
    console.log(e.key);
    if(e.key === 'd'){
        avancerojo += paso;
        if(avancerojo > meta) avancerojo = meta
        auto1.style.marginLeft = avancerojo + 'px'
        if(avancerojo >= meta){
            this.alert("¡GANO EL AUTO ROJO!")
        }
    }
    if(e.key === 'l'){
        avanceazul += paso;
        if(avanceazul > meta) avanceazul = meta
        auto2.style.marginLeft = avanceazul + 'px'
        if(avanceazul >= meta){
            this.alert("¡GANO EL AUTO AZUL!")
        }
    }
 })

 function reset(){
    let avancerojo = 0
    let avanceazul = 0
    auto1.style.marginLeft ='0px'
    auto2.style.marginLeft ='0px'
 }
