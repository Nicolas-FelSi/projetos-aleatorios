import { Modal } from './modal.js';
import { Erro } from './erro.js';
import { isNotANumber, calcularIMC } from './utils.js';

const peso = document.querySelector("#idPeso");
const altura = document.querySelector("#idAltura");
const button = document.querySelector("button");

button.addEventListener("click", (e) => {
    if (isNotANumber(peso.value) || isNotANumber(altura.value)) {
        Erro.visivel()
    } else {
        e.preventDefault();


        Erro.escondido()
        Modal.visivel()
        Modal.h2.innerText = `Seu IMC é de ${calcularIMC(peso, altura)}`
    }
 
    peso.value = "";
    altura.value = "";
})

Modal.buttonClose.addEventListener("click", () => {
    Modal.escondido()
})

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        Modal.escondido()
    } 
})

peso.addEventListener("input", () => document.querySelector(".erro").classList.add("hide"))
altura.addEventListener("input", () => document.querySelector(".erro").classList.add("hide"))