// eslint-disable-next-line import/no-cycle
import { taskList, taskArr } from './variables.js';
// eslint-disable-next-line import/no-cycle
import removeTask from './remove_task.js';
// eslint-disable-next-line import/no-cycle
import { saveOldContent, updateContent } from './edit_task.js';
// eslint-disable-next-line import/no-cycle
import { checkStatus, checkTask } from './task_status.js';

export default function createAppendTask(
  task, status = taskArr.completed, element = taskList,
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

  element.insertAdjacentHTML('beforeend', taskElement);

  taskList.lastChild.children[0].children[0].checked = status;

  taskList.lastChild.children[0].children[0].addEventListener('change', checkStatus);
  taskList.lastChild.children[0].children[0].addEventListener('keydown', checkTask);

  taskList.lastChild.children[1].children[0].addEventListener('click', removeTask);
  taskList.lastChild.children[0].children[1].addEventListener('click', saveOldContent, true);
  taskList.lastChild.children[0].children[1].addEventListener('blur', updateContent);
}