// eslint-disable-next-line import/no-cycle
import { taskArr } from './variables.js';

export function checkStatus() {
  if (this.checked) {
    this.nextElementSibling.classList.toggle('completed');
    this.parentElement.parentElement.classList.toggle('completed-container');
  } else {
    this.nextElementSibling.classList.toggle('completed');
    this.parentElement.parentElement.classList.toggle('completed-container');
  }

  taskArr[this.parentElement.parentElement.id].completed = this.checked;
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
