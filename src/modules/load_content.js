import createAppendTask from './create_append.js'

export default function loadContent(taskArr) {
    const localData = JSON.parse(localStorage.getItem('taskArray'));
    if (localData !== null) {
      taskArr = localData;
      taskArr.forEach((task) => {
        createAppendTask(task.description);
      });
    } else {
        taskArr = [];
    }

    return taskArr;
  }