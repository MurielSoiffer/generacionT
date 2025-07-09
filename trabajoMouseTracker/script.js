const body = document.querySelector("body");
const raton = document.querySelector(".raton");
let presionarMouse = false;

body.addEventListener('mousedown', () => {
    presionarMouse = true;
});
body.addEventListener('mouseup', () => {
    presionarMouse = false;
});

body.addEventListener ("mousemove", function(e){
    if(presionarMouse){
        raton.style.top = (e.clientY - 100) + 'px';
        raton.style.left = (e.clientX - 200) + 'px';
    }
})



