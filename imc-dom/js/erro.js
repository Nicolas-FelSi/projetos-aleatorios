export const Erro = {
    erro: document.querySelector(".erro"),

    visivel() {
        this.erro.classList.remove("hide")
    },

    escondido() {
        this.erro.classList.add("hide")
    }
}