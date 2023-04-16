import { Modal } from './modal.js'
import { Erro, isNotANumber } from './erro.js'

const peso = document.querySelector("#idPeso")
const altura = document.querySelector("#idAltura")
const button = document.querySelector("button")

button.addEventListener("click", (e) => {
    if (isNotANumber(peso.value) || isNotANumber(altura.value)) {
        Erro.visivel()
    } else {
        e.preventDefault()
        
        Erro.escondido()
        Modal.visivel()
        Modal.titleModal.innerText = `Seu IMC é ${calcularIMC(peso.value, altura.value)}`
    }

    peso.value = "";
    altura.value = "";
})

function calcularIMC(peso, altura) {
    const imc = (peso / (altura ** 2)).toFixed(2)
    return imc
}


