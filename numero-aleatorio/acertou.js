export const Acertou = {
    h2: document.querySelector("h2"),
    btnReset: document.querySelector("#btnReset"),
    main: document.querySelector("main"),
    acerto: document.querySelector(".acerto"),

    hidden() {
        this.main.classList.remove("hide")
        this.acerto.classList.add("hide")
    },

    visible() {
        this.acerto.classList.remove("hide")
        this.main.classList.add("hide")
    }
}