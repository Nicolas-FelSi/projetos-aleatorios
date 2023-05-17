import { Acertou } from "./acertou.js";

const randomNumber = Math.round(Math.random() * 10)
const input = document.querySelector("#idNumber")
const btnSubmit = document.querySelector("#btnSubmit")
let tentativas = 0

btnSubmit.addEventListener("click", () => {
    tentativas++
    if (randomNumber == input.value) {
        Acertou.hidden()
        Acertou.visible()

        Acertou.h2.innerText = `Acertou em ${tentativas} tentativas`
    }

    input.value = ""
})

Acertou.btnReset.addEventListener("click", () => {
    tentativas = 0
    Acertou.visible();
    Acertou.hidden()
})

console.log(randomNumber);