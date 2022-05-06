// eslint-disable-next-line import/no-cycle
import { taskList } from './variables.js';
// eslint-disable-next-line import/no-cycle
import createAppendTask from './create_append.js';
// eslint-disable-next-line import/no-cycle
import { completedStyle } from './task_status.js';

export default function loadContent(taskArr) {
  const localData = JSON.parse(localStorage.getItem('taskArray'));
  if (localData !== null) {
    taskArr = localData;
    taskArr.forEach((task, i) => {
      createAppendTask(task.description, task, taskList);
      completedStyle(task, i);
    });
  } else {
    taskArr = [];
    localStorage.setItem('taskArray', JSON.stringify(taskArr));
  }

  return taskArr;
}