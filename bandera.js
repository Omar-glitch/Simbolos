// Loader
window.addEventListener('load', () => {
     let loader = document.querySelector(".loader");
     loader.style.opacity = 0;
     loader.style.visibility = 'hidden';
})

// Listas del header Animacion:v
var lista = document.querySelector('.list-header');
var buttones = document.querySelector('.tit-header img:nth-child(3)');
var papelHigienico = true;
buttones.addEventListener('click', () => {
    if(papelHigienico){
        lista.style.left = 0;
        buttones.src = 'ImgHonduras/SignoX.svg';
        papelHigienico = false;
    }else{
        lista.style.left = '-500px';
        buttones.src = 'ImgHonduras/Barras.svg';
        papelHigienico = true;
    }
})
// HeaderAnimacion :v
let posicionAnterior = window.pageYOffset;
let header = document.querySelector('#header');
window.addEventListener('scroll', () => {
    let posicionActual = window.pageYOffset;
    if(posicionAnterior > posicionActual){
        header.style.top = "0";
        lista.style.top = '0';
    }else{
        header.style.top = "-100px";
        lista.style.top = '0';
    }
    posicionAnterior = posicionActual;
})
//Enlaces y navegacion izquierda
let bol = document.querySelectorAll('.list-header li a');
bol.forEach( (element) => {
    element.addEventListener('click', () => {
       lista.style.left = "-500px";
       buttones.src = 'ImgHonduras/Barras.svg';
       papelHigienico=true;
    });
});