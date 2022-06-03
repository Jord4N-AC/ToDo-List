// eslint-disable-next-line import/no-cycle
// import { taskArr } from './variables.js';

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

export function completedStyle(status, i) {
  if (status.completed) {
    document.getElementsByClassName('task-label')[i].classList.toggle('completed');
    document.getElementById(i).classList.toggle('completed-container');
  }
}

export function checkTask(event) {
  if (event.key === 'Enter') {
    this.click();
  }
}
