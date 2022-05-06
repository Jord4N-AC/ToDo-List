import { taskList, taskArr } from './variables.js';

export default function removeAllCompleted(newArr) {
  newArr = taskArr.filter((task, i) => {
    if (task.completed) {
      document.getElementById(i).remove();
    }
    return task.completed !== true;
  });

  taskArr.length = 0;
  taskArr.push(...newArr);

  taskArr.forEach((task, i) => {
    task.index = i;
    taskList.children[i].id = i;
  });

  localStorage.setItem('taskArray', JSON.stringify(taskArr));
}