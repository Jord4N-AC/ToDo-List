// Create a Book and Add event listeners
export default function createAppendTask(
  task, taskArr, i, taskList, taskInput,
  // events
  checkStatus, checkTask, removeTask, saveOldContent, updateContent,
  updateCounters, allCounter, pendingCounter, completedCounter,
) {
  const taskElement = `
            <li id="${i}" class="task-item box-format">
                <div class="task-content">
                    <input class="pointer task-input" type="checkbox">
                    <label class="task-label" contenteditable="true">${task}</label>
                </div>
                <div class="task-icons">
                    <i class="fa fa-trash-o pointer" title="Remove task"></i>
                    <i class="fa fa-ellipsis-v"></i>
                </div>
            </li>`;

  taskList.insertAdjacentHTML('beforeend', taskElement);

  taskList.lastChild.children[0].children[0].checked = taskArr[i - 1].completed;

  taskList.lastChild.children[0].children[0].addEventListener('change', (event) => {
    checkStatus(event, taskArr, updateCounters, allCounter, pendingCounter, completedCounter);
  });
  taskList.lastChild.children[0].children[0].addEventListener('keydown', checkTask);

  taskList.lastChild.children[1].children[0].addEventListener('click', (event) => {
    removeTask(event, taskArr, taskList, updateCounters, allCounter, pendingCounter,
      completedCounter);
  });

  taskList.lastChild.children[0].children[1].addEventListener('focus', saveOldContent);
  taskList.lastChild.children[0].children[1].addEventListener('blur', (event) => {
    updateContent(event, taskArr);
  });

  taskList.lastChild.children[0].children[1].addEventListener('keydown', (event) => {
    if (event.key === 'Enter'
      && event.target.closest('.task-item').nextElementSibling
    ) {
      updateContent(event, taskArr);

      event.target.closest('.task-item').nextElementSibling
        .getElementsByClassName('task-label')[0].focus();

      event.preventDefault();
    } else if (event.key === 'Enter'
      && !event.target.closest('.task-item').nextElementSibling
    ) {
      taskInput.focus();
      event.preventDefault();
    }
  });
}