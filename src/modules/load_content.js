// Load content from localStorage and return an Array
export default function loadContent(
  createAppendTask, taskList, checkStatus, completedStyle,
  checkTask, removeTask, saveOldContent, updateContent,
  taskArr = [],
  localData = JSON.parse(localStorage.getItem('taskArray')),
) {
  if (localData) {
    taskArr = localData;
    taskArr.forEach((task, i, arr) => {
      createAppendTask(task.description, arr, (i + 1), taskList,
        checkStatus, checkTask, removeTask, saveOldContent, updateContent);
      completedStyle(task, i);
    });
  } else {
    localStorage.setItem('taskArray', JSON.stringify(taskArr));
  }

  return taskArr;
}