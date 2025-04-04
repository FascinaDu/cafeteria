const modal = document.querySelector(".modal")
const mascara = document.querySelector('.mascara-modal')

function mostrarModal() {
    modal.classList.add('active');
    mascara.classList.add('active');
}

function esconderModal() {
    modal.classList.remove('active');
    mascara.classList.remove('active');
}

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const botaoCafe = document.querySelector('.caixa-principal .botao-link');
    botaoCafe.addEventListener('click', function() {
        document.querySelector('#sobre').scrollIntoView({ behavior: 'smooth' });
    });
});