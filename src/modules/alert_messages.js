import { taskList, taskInput, successMessage } from './variables.js';

export default function showSuccessMessage() {
    if (successMessage.classList.contains('show')) {
      successMessage.classList.toggle('show');
    }
    
    successMessage.classList.toggle('show');
    setTimeout(() => { successMessage.classList.toggle('show'); }, 800);
    
    if (document.getElementsByClassName('recent-added').length > 0) {
      document.getElementsByClassName('recent-added')[0].removeAttribute('title');
      document.getElementsByClassName('recent-added')[0].classList.toggle('recent-added');
    }
    
    taskList.children[taskList.childElementCount - 1].classList.toggle('recent-added');
    taskList.children[taskList.childElementCount - 1].title = 'Recent added';
    taskInput.blur();
    setTimeout(() => {
      document.getElementById(taskList.childElementCount - 1).scrollIntoView(); 
    }, 100);
    
    setTimeout(() => { taskInput.focus(); }, 900);
  }