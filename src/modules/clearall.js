// Remove all tasks, save content to retrieve it before add a new book

export default function clearAllTask(
  event, oldArr, taskArr, taskList, taskInput, redoIcon,
  tasks = document.querySelectorAll('.task-item'),
  ) {
    if(taskList.childElementCount) {
      redoIcon[0].classList.remove('fade-undo-icon');
      event.target.style.transform += 'rotate(360deg)';
      event.target.classList.add('disable-refesh-icon');
      
      oldArr.push(...taskArr);
      
      tasks.forEach((task) => {
        task.remove();
      });

      taskArr.length = 0;
      localStorage.setItem('taskArray', JSON.stringify(taskArr));
      
      redoIcon[0].style.display = 'initial';

      taskInput.focus();
    }
}
