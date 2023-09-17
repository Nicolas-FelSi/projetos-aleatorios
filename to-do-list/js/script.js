const btnAddTask = document.getElementById("add-task")
const taskInput = document.getElementById("task")
const errorMessage = document.querySelector(".error-message")
const taskList = document.getElementById("task-list")

btnAddTask.addEventListener("click", () => {
    if (taskInput.value === "") {
        errorMessage.style.display = "block"
    } else {
        errorMessage.style.display = "none"
        criarTarefa()
    }

    taskInput.value = ""
    taskInput.focus()
})

function criarTarefa() {
    const li = document.createElement("li")
    const taskLi = 
    `
    <span>${taskInput.value}</span>
    <div>
        <button class="complete-button"><i class="fas fa-check"></i></button>
        <button class="delete-button"><i class="fas fa-trash"></i></button>
    </div>
    `
    
    li.innerHTML = taskLi
    taskList.appendChild(li)

    const completeButton = li.querySelector(".complete-button");
    completeButton.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    const deleteButton = li.querySelector(".delete-button")
    deleteButton.addEventListener("click", () => {
        taskList.removeChild(li)
    })
}











