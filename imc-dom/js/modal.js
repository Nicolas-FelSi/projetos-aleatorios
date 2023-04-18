export const Modal = {
    h2: document.querySelector("h2"),
    modal: document.querySelector(".modal"),
    buttonClose: document.querySelector("img"),

    visivel() {
        this.modal.classList.remove("hide")
    },

    escondido() {
        this.modal.classList.add("hide")
    }
}