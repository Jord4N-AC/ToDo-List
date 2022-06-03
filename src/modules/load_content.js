// eslint-disable-next-line import/no-cycle
import { taskList } from './variables.js';
// eslint-disable-next-line import/no-cycle
import createAppendTask from './create_append.js';
// eslint-disable-next-line import/no-cycle
import { completedStyle } from './task_status.js';

export default function loadContent(checkStatus, checkTask, removeTask, taskArr = []) {
  const localData = JSON.parse(localStorage.getItem('taskArray'));
  if (localData !== null) {
    taskArr = localData;
    taskArr.forEach((task, i, arr) => {
      createAppendTask(task.description, arr, i, taskList,
        checkStatus, checkTask, removeTask);
      completedStyle(task, i);
    });
  } else {
    localStorage.setItem('taskArray', JSON.stringify(taskArr));
  }

  return taskArr;
}