

// Listas del header Animacion:v
const lista = document.querySelector('.list-header');
const button = document.getElementById('barras')
let papelHigienico = false;
const shadow = document.getElementById('shadow');
const body = document.querySelector('body')

const open_lista = () => {
    papelHigienico = true;
    lista.style.left = 0;
    body.style.overflow = "hidden";
    shadow.style.visibility = "visible";
}

const close_lista = () => {
    papelHigienico = false;
    lista.style.left = `-${lista.clientWidth / 16}rem`;
    body.style.overflow = "visible";
    shadow.style.visibility = "hidden";
}

button.addEventListener('click', () => {
    if (!papelHigienico) return open_lista();
    close_lista();
})

const is_lista_clicked = (e) => {
    if (button.contains(e.target)) return;
    if (!lista.contains(e.target) && papelHigienico) {
        close_lista();
    }
}

const resizing = (e) => {
    const w = window.innerWidth;
    const h = window.innerHeight;   

    if (w - (w / 7) > h) {
        if (papelHigienico) close_lista();
    }
}

window.addEventListener('click', is_lista_clicked);
window.addEventListener('resize', resizing);

// HeaderAnimacion
let posB = window.scrollY;
const header = document.querySelector('#header');

const scroll = () => {
    let posA = window.scrollY;
    if (posB > posA) {
        header.style.top = "0";
    } else {
        header.style.top = "-3.4375rem";
    }
    posB = posA;

    header.style.background = (posA > 50) ? "var(--white)" : "transparent";
}

window.addEventListener('scroll', scroll)

//Enlaces y navegacion izquierda
const links = document.querySelectorAll('.list-header li a');

links.forEach((link) => {
    link.addEventListener('click', () => {
        close_lista();
    });
});