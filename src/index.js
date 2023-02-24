import './style.css';

const taskList = document.getElementById('list-tasks');

const taskArr = [
  { description: 'Task 1', completed: false, index: 0 },
  { description: 'Task 2', completed: true, index: 1 },
  { description: 'Task 3', completed: false, index: 2 },
];

const appendTask = ({ description: taskContent, completed: taskStatus }) => {
  const taskElement = `
            <li class="task-item box-format">
                <div class="task-content">
                    <input class="pointer task-input" type="checkbox" ${taskStatus ? 'checked' : ''}>
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

const loadContent = () => {
  taskArr.forEach((task) => {
    appendTask(task);
  });
};

loadContent();
