// Load content from localStorage and return an Array
export default function loadContent(
  createAppendTask, taskList, taskInput, checkStatus, completedStyle,
  checkTask, removeTask, saveOldContent, updateContent,
  updateCounters, allCounter, pendingCounter, completedCounter,
  taskArr = [],
  localData = JSON.parse(localStorage.getItem('taskArray')),
) {
  if (localData) {
    taskArr = localData;
    taskArr.forEach((task, i, arr) => {
      createAppendTask(task.description, arr, (i + 1), taskList, taskInput,
        checkStatus, checkTask, removeTask, saveOldContent, updateContent,
        updateCounters, allCounter, pendingCounter, completedCounter);
      completedStyle(task, i);
    });
  } else {
    localStorage.setItem('taskArray', JSON.stringify(taskArr));
  }

  updateCounters(allCounter, pendingCounter, completedCounter);
  return taskArr;
}