// Render all Tasks deleted from clear all icon

export default function undoClearALl(
    event, createAppendTask, completedStyle, clearAllIcon, oldArr, taskArr,
    taskList, checkStatus, checkTask, removeTask, saveOldContent, updateContent,
    ) {
    if (oldArr.length) {
      taskArr.push(...oldArr);
      localStorage.setItem('taskArray', JSON.stringify(taskArr));
  
      taskArr.forEach((task) => {
        createAppendTask(
          task.description, taskArr, task.index, taskList,
          checkStatus, checkTask, removeTask, saveOldContent, updateContent,
        );
        completedStyle(task, task.index - 1);
      });
  
      oldArr.length = 0;
      event.target.style.transform += 'rotate(-360deg)';
      clearAllIcon[0].classList.remove('disable-refesh-icon');
  
      event.target.classList.add('fade-undo-icon');
  
      setTimeout(() => {
        event.target.style.display = 'none';
      }, 400);
    }
  }