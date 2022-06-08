// if check-box is marked it adds a completed style to the task
export function checkStatus(
  event, taskArr,
  updateCounters, allCounter, pendingCounter, completedCounter,
) {
  if (event.target.checked) {
    event.target.nextElementSibling.classList.toggle('completed');
    event.target.parentElement.parentElement.classList.toggle('completed-container');
  } else {
    event.target.nextElementSibling.classList.toggle('completed');
    event.target.parentElement.parentElement.classList.toggle('completed-container');
  }

  taskArr[event.target.parentElement.parentElement.id - 1].completed = event.target.checked;
  localStorage.setItem('taskArray', JSON.stringify(taskArr));

  updateCounters(allCounter, pendingCounter, completedCounter);
}

// If completed property on object is true it adds completed style (when loading content)
export function completedStyle(status, i) {
  if (status.completed) {
    document.getElementsByClassName('task-label')[i].classList.toggle('completed');
    document.getElementById(i + 1).classList.toggle('completed-container');
  }
}

// Function to check a check-box using keys (tab, enter)
export function checkTask(event) {
  if (event.key === 'Enter') {
    this.click();
  }
}
