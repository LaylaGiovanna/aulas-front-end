'use strict'
//const adicionar = document.getElementById('add').addEventListener('click', adicionarCard)
//usar esse jeito apenas se eu nn irei iteragir novamente com essa variavel

const adicionar = document.getElementById('add')

/* const adicionarCard = () => {
     const container = document.getElementById('container')
     container.innerHTML= container.innerHTML + '<div class="items"></div>'
} */

const adicionarCard = (aluno) => {
    const container = document.getElementById('container')
    //create elements
    const novaDiv = document.createElement('div')
    novaDiv.classList.add('aluno')
    novaDiv.innerHTML = `<h2 class="aluno__title">${aluno}</h2>`

    container.appendChild(novaDiv)
    return 'teste'

}




adicionar.addEventListener('click', () => adicionarCard('Layla'))
