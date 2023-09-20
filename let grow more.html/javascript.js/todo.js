function addTask() {
    var taskInput = document.getElementById('newTask');
    var taskText = taskInput.value;
    taskInput.value = '';

    if (taskText.trim() !== '') {
        var taskList = document.getElementById('taskList');
        var li = document.createElement('li');
        li.innerHTML = taskText + '<span class="delete" onclick="deleteTask(this)">X</span>';
        taskList.appendChild(li);
    }
}

function deleteTask(element) {
    element.parentElement.remove();
}
