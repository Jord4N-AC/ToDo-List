import './style.css';

const taskList = document.getElementById('list-tasks');

const taskArr = [];

function appendTask(taskContent) {
  const taskElement = `
            <li class="task-item box-format">
                <div class="task-content">
                    <input class="pointer task-input" type="checkbox">
                    <label class="task-label">${taskContent}</label>
                </div>
                <div class="task-icons">
                    <i class="fa fa-trash-o pointer"></i>
                    <i class="fa fa-ellipsis-v"></i>
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