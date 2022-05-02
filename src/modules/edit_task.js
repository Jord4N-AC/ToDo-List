// eslint-disable-next-line import/no-cycle
import { taskArr } from './variables.js';

let oldText;

export function saveOldContent() {
  oldText = this.textContent;
}

export function updateContent() {
  this.innerText = this.innerText.trim().replace(/\s+/g, ' ');
  if (this.innerText === '') {
    this.innerText = oldText;
  }

  taskArr[this.parentElement.parentElement.id].description = this.innerText;
  localStorage.setItem('taskArray', JSON.stringify(taskArr));
}