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
  
export function completedStyle(element) {
    if (element.checked) {
        element.nextElementSibling.classList.toggle('completed');
        element.parentElement.parentElement.classList.toggle('completed-container');
    }
}