// import removeTask from './remove_task.js';
// eslint-disable-next-line import/no-cycle
import { saveOldContent, updateContent } from './edit_task.js';


export default function createAppendTask(
  task, taskArr, i, taskList,
  // events
  checkStatus, checkTask, removeTask,
) {
  const taskElement = `
            <li id="${taskList.childElementCount}" class="task-item box-format">
                <div class="task-content">
                    <input class="pointer task-input" type="checkbox">
                    <label class="task-label" contenteditable="true">${task}</label>
                </div>
                <div class="task-icons">
                    <i class="fa fa-trash-o pointer" title="Remove task"></i>
                    <i class="fa fa-ellipsis-v"></i>
                </div>
            </li>`;

  taskList.insertAdjacentHTML('beforeend', taskElement);

  taskList.lastChild.children[0].children[0].checked = taskArr[i].completed;

  taskList.lastChild.children[0].children[0].addEventListener('change', (event) => {
    checkStatus(event, taskArr);
  });
  taskList.lastChild.children[0].children[0].addEventListener('keydown', checkTask);

  taskList.lastChild.children[1].children[0].addEventListener('click', (event) => {
    // console.log('createAppend', this);
    removeTask(event, taskArr, taskList);
  });
  taskList.lastChild.children[0].children[1].addEventListener('click', saveOldContent, true);
  taskList.lastChild.children[0].children[1].addEventListener('blur', updateContent);
}