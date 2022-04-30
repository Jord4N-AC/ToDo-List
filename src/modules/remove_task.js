// eslint-disable-next-line import/no-cycle
import { taskList, taskArr } from './variables.js';

export default function removeTask() {
  taskArr.splice(this.parentElement.parentElement.getAttribute('id'), 1);

  this.parentElement.parentElement.remove();

  taskArr.forEach((task, i) => {
    taskList.children[i].id = i;
    task.index = i;
  });

  localStorage.setItem('taskArray', JSON.stringify(taskArr));
}