import './style.css';

const taskList = document.getElementById('list-tasks');

const taskArr = [
    { description: 'Task 1', completed: true, index: 0 },
    { description: 'Task 2', completed: true, index: 1 },
    { description: 'Task 3', completed: true, index: 2 },
];

function appendTask(taskContent) {
    const taskElement = `
            <li class="task-item">
                <div class="task-content">
                    <input type="checkbox" >
                    <label>${taskContent}</label>
                </div>
                <div class="task-icons">
                    <i class="fa fa-ellipsis-v"></i>
                    <i class="fa fa-trash-o"></i>
                </div>
            </li>
    `;
    taskList.insertAdjacentHTML('beforeend', taskElement);
}

function loadContent() {
    taskArr.forEach((task) => {
        appendTask(task.description);
    });
}

loadContent();