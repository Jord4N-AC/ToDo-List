import './style.css';

const taskList = document.getElementById('list-tasks');

// Tasks Array
const taskArr = [
    { description: 'Task 1', completed: false, index: 1 },
    { description: 'Task 2', completed: false, index: 2 },
    { description: 'Task 3', completed: false, index: 3 },
    { description: 'Task 4', completed: true, index: 4 },
    { description: 'Task 5', completed: true, index: 5 },
];

// Create and Append Task
const createAppendTask = ({ description: taskContent, completed: taskStatus }) => {
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

// Render All Tasks
const renderAllTasks = (taskArr) => {
    taskArr.forEach((task) => {
        createAppendTask(task);
    });
}

renderAllTasks(taskArr);
