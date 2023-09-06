const openModal = document.getElementById("openModal")

openModal.addEventListener("click", () => {
    document.querySelector("div").classList.remove("invisible")
})

document.querySelector("body").addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") {
        document.querySelector("div").classList.add("invisible")
    }
})