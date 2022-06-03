// Remove a task and update ids

export default function removeTask(event, taskArr, taskList) {
  taskArr.splice(event.target.parentElement.parentElement.getAttribute('id'), 1);

  event.target.parentElement.parentElement.remove();

  taskArr.forEach((task, i) => {
    taskList.children[i].id = i;
    task.index = i;
  });

  localStorage.setItem('taskArray', JSON.stringify(taskArr));
}