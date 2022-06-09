// Remove a task and update ids

export default function removeTask(
  event, taskArr, taskList,
  updateCounters, allCounter, pendingCounter, completedCounter,
) {
  taskArr.splice(event.target.parentElement.parentElement.getAttribute('id') - 1, 1);

  event.target.parentElement.parentElement.remove();

  taskArr.forEach((task, i) => {
    taskList.children[i].id = i + 1;
    task.index = i + 1;
  });

  localStorage.setItem('taskArray', JSON.stringify(taskArr));

  updateCounters(allCounter, pendingCounter, completedCounter);
}