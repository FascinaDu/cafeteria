/* 

        [] Saber quando o usuario clicou
        [] Mudar posicionamento do modal
        []

*/

const modal = document.querySelector(".modal")
const mascara = document.querySelector('.mascara-modal')

function mostrarModal() {
        modal.style.top = '50%'
        mascara.style.visibility = 'visible'
}

function esconderModal() {
        modal.style.top = '-40%'
        mascara.style.visibility = 'hidden'
}