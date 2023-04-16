const numberRandom = Math.round(Math.random() * 10)
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let tentativas = 0

btnTry.addEventListener("keypress", (e) => {
    e.preventDefault()

    const input = document.querySelector("#inputNumber")
    tentativas++

    if (e.key === "Enter") {
        if (input.value == numberRandom) {
            screen1.classList.add("hide")
            screen2.classList.remove("hide")

            document.querySelector("#tentativaTexto").innerText = `Acertou em ${tentativas} tentativas`
        }
    }

    input.value = ""
})

btnReset.addEventListener("keypress", (e) => {
    e.preventDefault()
    if (e.key === "Enter") {
        screen1.classList.remove("hide")
        screen2.classList.add("hide")
        tentativas = 0
    }
})

console.log(numberRandom);