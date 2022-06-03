let oldText;

// Save text to use it if you try to add empty text
export function saveOldContent() {
  oldText = this.textContent;
}

// Updates task and trims it (remove extra spaces)
export function updateContent(event, taskArr) {
  event.target.innerText = event.target.innerText.trim().replace(/\s+/g, ' ');
  if (event.target.innerText === '') {
    event.target.innerText = oldText;
  }

  taskArr[event.target.parentElement.parentElement.id].description = event.target.innerText;
  localStorage.setItem('taskArray', JSON.stringify(taskArr));
}