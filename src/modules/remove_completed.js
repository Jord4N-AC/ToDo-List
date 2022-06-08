// Remove all completed items and update ids

export default function removeAllCompleted(
  taskArr, taskList,
  updateCounters, allCounter, pendingCounter, completedCounter,
  newArr,
) {
  newArr = taskArr.filter((task, i) => {
    if (task.completed) {
      document.getElementById(i + 1).remove();
    }
    return task.completed !== true;
  });

  taskArr.length = 0;
  taskArr.push(...newArr);

  taskArr.forEach((task, i) => {
    task.index = i + 1;
    taskList.children[i].id = i + 1;
  });

  localStorage.setItem('taskArray', JSON.stringify(taskArr));

  updateCounters(allCounter, pendingCounter, completedCounter);
}