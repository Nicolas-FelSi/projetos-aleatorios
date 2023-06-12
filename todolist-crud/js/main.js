import { controllerDom } from "./controller-dom.js";

controllerDom.btnAdd.addEventListener("click", () => addDivTask())
let count = 0

function addDivTask() {
    const content = controllerDom.inputAdd.value

    if (!content != "") {
        if (controllerDom.textError.classList.contains("hide")) {
            controllerDom.textError.classList.remove("hide")
        }

        controllerDom.textError.innerText = "Preencha o campo."
    } else {
        if (!controllerDom.textError.classList.contains("hide")) {
            controllerDom.textError.classList.add("hide")
        }

        count++

        const divTask = document.createElement("div")
        const divInputCheck = document.createElement("div")
        const inputCheck = document.createElement("input")
        const labelInputCheck = document.createElement("label")
        const divIcons = document.createElement("div")
        const iconEdit = document.createElement("i")
        const iconDelete = document.createElement("i")

        divTask.setAttribute("class", "div__task")
        divInputCheck.setAttribute("class", "input__check")
        inputCheck.setAttribute("type", "checkbox")
        inputCheck.setAttribute("id", `check${count}`)
        labelInputCheck.setAttribute("for", `check${count}`)
        divIcons.setAttribute("class", "icons")
        iconEdit.setAttribute("class", "fa-regular fa-pen-to-square")
        iconDelete.setAttribute("class", "fa-regular fa-trash-can")

        labelInputCheck.innerText = content

        divInputCheck.append(inputCheck, labelInputCheck)
        divIcons.append(iconEdit, iconDelete)
        divTask.append(divInputCheck, divIcons)
        
        controllerDom.sectionTasks.append(divTask)
    }
}
