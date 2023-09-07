const btnSubmit = document.querySelector("button[type=submit]")
const taskInput = document.getElementById("task-input")
const ul = document.querySelector("ul")
const errorMessage = document.getElementById("error-message")

function criarTarefa() {
    const tarefaHtml = 
    `
    <li>
        <div class="checkbox-wrapper">
            <input type="checkbox" class="complete-button">
        </div>
        <span class="task-text">${taskInput.value}</span>
        <button class="delete-button"><i class="fas fa-trash"></i></button>
    </li>
    `

    ul.innerHTML += tarefaHtml
}

btnSubmit.addEventListener("click", (evento) => {
    evento.preventDefault()
    
    if (taskInput.value === "") {
        errorMessage.style.display = "block"
    } else {
        criarTarefa()
        errorMessage.style.display = "none"
    }  
})