const Modal = {
    buttonClose: document.querySelector(".modal__button-close"),
    titleModal: document.querySelector("h2.title"),

    escondido: function() {
        document.querySelector(".modal").classList.add("hide")
    },

    visivel() {
        document.querySelector(".modal").classList.remove("hide")
    }
}

Modal.buttonClose.addEventListener("click", () => {
    Modal.escondido()
})

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        Modal.escondido()
    }
})

export { Modal }