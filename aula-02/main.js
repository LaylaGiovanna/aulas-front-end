'use strict'
//const adicionar = document.getElementById('add').addEventListener('click', adicionarCard)
//usar esse jeito apenas se eu nn irei iteragir novamente com essa variavel

const adicionar = document.getElementById('add')
let novaDiv;

/* const adicionarCard = () => {
     const container = document.getElementById('container')
     container.innerHTML= container.innerHTML + '<div class="items"></div>'
} */

const adicionarCard = (aluno, nota) => {
    const container = document.getElementById('container')

    //create elements
    novaDiv = document.createElement('div')
    novaDiv.classList.add('aluno')
    novaDiv.classList.add('nota')
    novaDiv.innerHTML = `<h2 class="aluno__title">${aluno}</h2>
                        <h2 class="nota__title">${nota}</h2>`

    container.appendChild(novaDiv)
    return 'teste'
    
}

const handleClick = () => {
    const nomeAluno = prompt('Digite seu nome')
    const notaAluno = prompt('Digite sua nota')
    adicionarCard(nomeAluno , notaAluno)

    if(notaAluno <5){
        novaDiv.classList.add('vermelho')
    }else if (notaAluno >=5 && notaAluno <=10){
        novaDiv.classList.add('verde')
    }else if (notaAluno != isNaN){
        alert("Por favor, digite um número.\nTente novamente.")
        
    }else {
        return false
    }

}


adicionar.addEventListener('click', handleClick)
limpar.addEventListener('click', limpar)

// SOLID - Responsividade unica
//Funções puras

