import { taskList, taskInput } from './variables.js'

export default function createAppendTask(content = taskInput.value, element = taskList) {
    const taskElement = `
            <li class="task-item box-format">
                <div class="task-content">
                    <input class="pointer task-input" type="checkbox">
                    <label class="task-label">${content}</label>
                </div>
                <div class="task-icons">
                    <i class="fa fa-trash-o pointer" title="Remove task"></i>
                    <i class="fa fa-ellipsis-v"></i>
                </div>
            </li>`;
  
    element.insertAdjacentHTML('beforeend', taskElement);
  }