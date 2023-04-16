const Erro = {
    visivel() {
        document.querySelector(".erro").classList.remove("hide")
    },

    escondido() {
        document.querySelector(".erro").classList.add("hide")
    }
}

function isNotANumber(valor) {
    return isNaN(valor) || valor == ""
}

export { Erro, isNotANumber }