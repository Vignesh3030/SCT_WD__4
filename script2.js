// script2.js
document.getElementById('todo-form').addEventListener('submit', addTask);

function addTask(e) {
    e.preventDefault();
    
    const taskInput = document.getElementById('new-task');
    const dateInput = document.getElementById('task-date');
    
    const task = taskInput.value;
    const dateTime = new Date(dateInput.value);
    
    if (task === '' || dateInput.value === '') {
        alert('Please enter a task and date/time.');
        return;
    }
    
    const taskList = document.getElementById('task-list');
    
    const li = document.createElement('li');
    li.className = 'task';
    
    const span = document.createElement('span');
    span.textContent = `${task} - ${dateTime.toLocaleString()}`;
    li.appendChild(span);
    
    const completeButton = document.createElement('button');
    completeButton.textContent = '✔';
    completeButton.addEventListener('click', () => li.classList.toggle('completed'));
    li.appendChild(completeButton);
    
    const editButton = document.createElement('button');
    editButton.textContent = '✏';
    editButton.addEventListener('click', () => editTask(li, span, task, dateTime));
    li.appendChild(editButton);
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.addEventListener('click', () => taskList.removeChild(li));
    li.appendChild(deleteButton);
    
    taskList.appendChild(li);
    
    taskInput.value = '';
    dateInput.value = '';
}

function editTask(li, span, task, dateTime) {
    const newTask = prompt('Edit task', task);
    const newDate = prompt('Edit date/time', dateTime.toLocaleString());
    
    if (newTask && newDate) {
        const newDateTime = new Date(newDate);
        span.textContent = `${newTask} - ${newDateTime.toLocaleString()}`;
        li.className = 'task';
    }
}
