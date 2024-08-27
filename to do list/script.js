const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
addTaskBtn.addEventListener('click', addTask);
function addTask() {
    const task = taskInput.value.trim();
    if (task) {
        const taskElement = document.createElement('li');
        taskElement.classList.add('task');
        taskElement.innerHTML = `
            ${task}
            <button class="delete-btn">Delete</button>
        `;
        taskList.appendChild(taskElement);
        taskInput.value = '';
        taskElement.querySelector('.delete-btn').addEventListener('click', deleteTask);
    }
}
function deleteTask() {
    const taskElement = this.parentNode;
    taskList.removeChild(taskElement);
}