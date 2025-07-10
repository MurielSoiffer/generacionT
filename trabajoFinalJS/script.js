const btn = document.querySelector(".btn");
const rword = document.querySelector("#randomWord"); 
const text = document.getElementById("text");
const tiempo = document.getElementById("timeSpan");
const puntos = document.getElementById("score");
const contenedorGO = document.querySelector("#end-game-container");
const main = document.querySelector('.main');

const words = [
 'californication',
 'plataforma5',
 'black',
 'summer',
 'flea',
 'aeroplane',
 'peppers',
 'unlimited',
 'arcadium',
 'love',
 'getaway',
 'stadium',
 'quixoticelixer',
 'quarter',
 'snow',
 'dylan',
 'zephyr',
 'funky',
 'chili'
];

let palabraAleatoria = "";
let time = 10;
let score = 0;


function randomWords(palabras){
    const i = Math.floor(Math.random() * palabras.length);
    return palabras[i];
}


function addToDOM(){
    palabraAleatoria = randomWords(words)
    rword.innerHTML = palabraAleatoria;
}

function actualizarTiempo(){
    intervalo = setInterval(() => {
                time--;
                tiempo.textContent = time +"s";
                if (time <= 0) {
                    clearInterval(intervalo);
                    gameOver();
                }
            }, 1000);
}

function updateScore(){
    score++;
    puntos.textContent = score;
}

function gameOver(){

    main.remove();

    let typer = document.createElement('h2');
    typer.textContent = '⌨ Typer-3000';
    contenedorGO.appendChild(typer);
    let titulo = document.createElement('h3');
    titulo.textContent = '¡Te quedaste sin tiempo!';
    contenedorGO.appendChild(titulo);

    let puntaje = document.createElement('p');
    puntaje.textContent = `Puntaje final: ${score}`;
    contenedorGO.appendChild(puntaje);

    let btnRest = document.createElement('button');
    btnRest.textContent = 'Volve a empezar';
    btnRest.onclick = () => {
    location.reload();
    };
    contenedorGO.appendChild(btnRest);
}

text.addEventListener('input', function(e){
    let palabra = e.target.value;
    if(palabra == rword.textContent){
        time += 3;
        text.value = "";
        addToDOM();
        updateScore();
    }
})
console.log(time)

addToDOM()

actualizarTiempo()


