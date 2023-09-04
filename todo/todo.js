document.addEventListener("DOMContentLoaded", function () {
    const inputtask = document.getElementById("inputtask");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = inputtask.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="deleteButton">Delete</button>
            `;
            li.classList.add("fade-in");
            taskList.appendChild(li);
            inputtask.value = "";
        }
    });
    
    taskList.addEventListener("click", function (event) {
        if (event.target.classList.contains("deleteButton")) {
            const li = event.target.parentElement;
            li.classList.add("fade-out");
            li.addEventListener("animationend", function () {
                li.remove();
            });
        }
    });
});