// Render all Tasks deleted from clear all icon

export function undoClearAll(
  event, createAppendTask, completedStyle, clearAllIcon, oldArr, taskArr, taskList,
  taskInput, checkStatus, checkTask, removeTask, saveOldContent, updateContent,
  updateCounters, allCounter, pendingCounter, completedCounter,
) {
  if (oldArr.length) {
    taskArr.push(...oldArr);
    localStorage.setItem('taskArray', JSON.stringify(taskArr));

    taskArr.forEach((task) => {
      createAppendTask(
        task.description, taskArr, task.index, taskList, taskInput,
        checkStatus, checkTask, removeTask, saveOldContent, updateContent,
        updateCounters, allCounter, pendingCounter, completedCounter,
      );
      completedStyle(task, task.index - 1);
    });

    oldArr.length = 0;
    event.target.style.transform += 'rotate(-360deg)';
    event.target.classList.add('fade-undo-icon');
    clearAllIcon[0].classList.remove('disable-refesh-icon');

    setTimeout(() => {
      event.target.style.display = 'none';
    }, 400);

    updateCounters(allCounter, pendingCounter, completedCounter);
  }
  taskInput.focus();
}

export function deletedOldContent(oldArr, redoIcon, clearAllIcon) {
  if (oldArr.length) {
    redoIcon[0].classList.remove('fade-undo-icon');
    redoIcon[0].style.display = 'none';
    clearAllIcon[0].classList.remove('disable-refesh-icon');

    oldArr.length = 0;
  }
}