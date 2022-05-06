import './style.css';

import {
  taskList, taskInput, addBtn, taskForm, taskArr, clearBtn, successMessage, repeatedMessage,
} from './modules/variables.js';
import createAppendTask from './modules/create_append.js';
import clearField from './modules/clear_field.js';
import saveData from './modules/save_data.js';
import removeAllCompleted from './modules/remove_completed.js';
import showMessage from './modules/alert_messages.js';

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

taskInput.addEventListener('input', () => {
  if (document.getElementsByClassName('task-repeated').length > 0) {
    document.getElementsByClassName('task-repeated')[0].removeAttribute('title');
    document.getElementsByClassName('task-repeated')[0].classList.toggle('task-repeated');
  }
  if (document.getElementsByClassName('show').length > 0) {
    document.getElementsByClassName('show')[0].classList.toggle('show');
  }
});

taskInput.addEventListener('keydown', (event, inputTrimed = taskInput.value.trim().replace(/\s+/g, ' ')) => {
  if (
    event.key === 'Enter'
    && taskArr.find((task) => task.description.toLowerCase() === inputTrimed.toLowerCase())
  ) {
    taskInput.value = inputTrimed;
    showMessage(
      repeatedMessage,
      document.getElementById(taskArr.findIndex((task) => task.description.toLowerCase()
        === inputTrimed.toLowerCase())),
      'task-repeated',
      'Repeated Tasks',
      'highlight-repeated',
      taskInput,
    );
  } else if (inputTrimed !== '' && event.key === 'Enter') {
    saveData(inputTrimed, taskArr);
    createAppendTask(taskInput.value, taskArr, taskList);
    showMessage(
      successMessage,
      taskList.children[taskList.childElementCount - 1],
      'recent-added',
      'Recent added',
      'highlight-recent',
      taskInput,
    );
    clearField(taskInput);
  }
});

addBtn.addEventListener('click', () => {
  taskInput.value = taskInput.value.trim().replace(/\s+/g, ' ');
  if (
    taskArr.find((task) => task.description.toLowerCase() === taskInput.value.toLowerCase())
  ) {
    showMessage(
      repeatedMessage,
      document.getElementById(taskArr.findIndex((task) => task.description.toLowerCase()
        === taskInput.value.toLowerCase())),
      'task-repeated',
      'Repeated Tasks',
      'highlight-repeated',
      taskInput,
    );
  } else if (taskInput.value !== '') {
    saveData(taskInput.value, taskArr);
    createAppendTask(taskInput.value, taskArr, taskList);
    showMessage(
      successMessage,
      taskList.children[taskList.childElementCount - 1],
      'recent-added',
      'Recent added',
      'highlight-recent',
      taskInput,
    );
    clearField(taskInput);
  }
});

addBtn.addEventListener('keydown', (event, inputTrimed = taskInput.value.trim().replace(/\s+/g, ' ')) => {
  if (
    taskArr.find((task) => task.description.toLowerCase() === inputTrimed.toLowerCase())
    && event.key === 'Enter'
  ) {
    showMessage(
      repeatedMessage,
      document.getElementById(taskArr.findIndex((task) => task.description.toLowerCase()
        === inputTrimed.toLowerCase())),
      'task-repeated',
      'Repeated Tasks',
      'highlight-repeated',
      taskInput,
    );
  } else if (inputTrimed !== '' && event.key === 'Enter') {
    // taskInput.value = inputTrimed;
    saveData(inputTrimed, taskArr);
    createAppendTask(inputTrimed, taskArr, taskList);
    showMessage(
      successMessage,
      taskList.children[taskList.childElementCount - 1],
      'recent-added',
      'Recent added',
      'highlight-recent',
      taskInput,
    );
    clearField(taskInput);
  }
});

clearBtn.addEventListener('click', removeAllCompleted);
