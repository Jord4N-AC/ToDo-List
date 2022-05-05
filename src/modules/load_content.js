// eslint-disable-next-line import/no-cycle
import createAppendTask from './create_append.js';
// eslint-disable-next-line linebreak-style
import { completedStyle } from './task_status.js';

export default function loadContent(taskArr) {
  const localData = JSON.parse(localStorage.getItem('taskArray'));
  if (localData !== null) {
    taskArr = localData;
    taskArr.forEach((task, i) => {
      createAppendTask(task.description, task.completed);
      completedStyle(task, i);
    });
  } else {
    taskArr = [];
  }

  return taskArr;
}