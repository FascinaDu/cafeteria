const modal = document.querySelector(".modal")
const mascara = document.querySelector('.mascara-modal')

function mostrarModal() {
    modal.style.top = '50%';
    modal.style.opacity = '1';
    modal.style.visibility = 'visible'; 
    mascara.style.opacity = '1';
    mascara.style.visibility = 'visible';
}

function esconderModal() {
    modal.style.top = '-40%';
    modal.style.opacity = '0';
    modal.style.visibility = 'hidden'; 
    mascara.style.opacity = '0';
    mascara.style.visibility = 'hidden';
}

