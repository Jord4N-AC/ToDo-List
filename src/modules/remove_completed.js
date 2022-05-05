import { taskList, completedElements, taskArr } from './variables.js';

export default function removeAllCompleted() {
  while (completedElements.length !== 0) {
    taskArr.splice(completedElements[0].id, 1);
    completedElements[0].remove();

    taskArr.forEach((task, i) => {
      task.index = i;
      taskList.children[i].id = i;
    });
  }

  localStorage.setItem('taskArray', JSON.stringify(taskArr));
}