// eslint-disable-next-line import/no-cycle
import { taskArr } from './variables.js'

let oldText;

export function saveOldContent() {
    oldText = this.textContent;
}

export function updateContent() {
    if (this.innerHTML === '') {
        this.innerHTML = oldText;
    }
    
    taskArr[this.parentElement.parentElement.id].description = this.textContent;
    localStorage.setItem('taskArray', JSON.stringify(taskArr));
}