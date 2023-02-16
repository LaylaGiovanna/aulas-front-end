'use strict'

const calcular = document.getElementById('calcular')
const limpar = document.getElementById('limpar')

function somar() {
    //pega o elemento a partir do ID
    const nota1 = Number(document.getElementById('nota1').value)
    const nota2 = Number(document.getElementById('nota2').value)
    const situacao = document.getElementById('situacao')
    const formulario = document.getElementById('form')

    if (situacao.value = (nota1 + nota2) / 2 < 5) {
        formulario.classList.add('vermelho')
        situacao.value = ('aluno reprovado')
        formulario.classList.remove('verde')
    } else if (situacao.value = (nota1 + nota2) / 2 >= 5) {
        formulario.classList.add('verde')
        situacao.value = ('aluno aprovado')
        formulario.classList.remove('vermelho')
    }
}


//recebe algum tipo de evento 
calcular.addEventListener('click', somar)
limpar.addEventListener('click', limpar)