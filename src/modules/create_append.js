import { taskList, taskInput } from './variables.js'
import removeTask from './remove_task.js'


export default function createAppendTask(
    content = taskInput.value, element = taskList
    ) {
    const taskElement = `
            <li id="${taskList.childElementCount}" class="task-item box-format">
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

    
    taskList.lastChild.children[1].children[0].addEventListener('click', removeTask);
  }