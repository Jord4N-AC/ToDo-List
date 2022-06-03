// if check-box is marked it adds a completed style to the task
export function checkStatus(event, taskArr) {
  if (event.target.checked) {
    event.target.nextElementSibling.classList.toggle('completed');
    event.target.parentElement.parentElement.classList.toggle('completed-container');
  } else {
    event.target.nextElementSibling.classList.toggle('completed');
    event.target.parentElement.parentElement.classList.toggle('completed-container');
  }

  taskArr[event.target.parentElement.parentElement.id].completed = event.target.checked;
  localStorage.setItem('taskArray', JSON.stringify(taskArr));
}

// If completed property on object is true it adds completed style (when loading content)
export function completedStyle(status, i) {
  if (status.completed) {
    document.getElementsByClassName('task-label')[i].classList.toggle('completed');
    document.getElementById(i).classList.toggle('completed-container');
  }
}

// Function to check a check-box using keys (tab, enter)
export function checkTask(event) {
  if (event.key === 'Enter') {
    this.click();
  }
}
