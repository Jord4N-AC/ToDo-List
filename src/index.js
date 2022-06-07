import './style.css';

import {
  taskList, taskInput, addBtn, taskForm, clearBtn, successMessage, repeatedMessage,
  redoIcon, clearAllIcon,
} from './modules/variables.js';
import createAppendTask from './modules/create_append.js';
import saveData from './modules/save_data.js';
import removeTask from './modules/remove_task.js';
import removeAllCompleted from './modules/remove_completed.js';
import showMessage from './modules/alert_messages.js';
import clearField from './modules/clear_field.js';
import loadContent from './modules/load_content.js';

import { checkStatus, completedStyle, checkTask } from './modules/task_status.js';
import { saveOldContent, updateContent } from './modules/edit_task.js';

import clearAllTask from './modules/clearall.js';
import { undoClearAll, deletedOldContent } from './modules/undo_clearall.js';

const taskArr = loadContent(
  createAppendTask, taskList, checkStatus, completedStyle,
  checkTask, removeTask, saveOldContent, updateContent,
);

const oldArr = [];

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
        === inputTrimed.toLowerCase()) + 1),
      'task-repeated',
      'Repeated Tasks',
      'highlight-repeated',
      taskInput,
    );
  } else if (inputTrimed !== '' && event.key === 'Enter') {
    deletedOldContent(oldArr, redoIcon, clearAllIcon);
    saveData(inputTrimed, taskArr);
    createAppendTask(taskInput.value, taskArr, taskArr.length, taskList,
      checkStatus, checkTask, removeTask, saveOldContent, updateContent);
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
        === taskInput.value.toLowerCase()) + 1),
      'task-repeated',
      'Repeated Tasks',
      'highlight-repeated',
      taskInput,
    );
  } else if (taskInput.value !== '') {
    deletedOldContent(oldArr, redoIcon, clearAllIcon);
    saveData(taskInput.value, taskArr);
    createAppendTask(taskInput.value, taskArr, taskArr.length, taskList,
      checkStatus, checkTask, removeTask, saveOldContent, updateContent);
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
        === inputTrimed.toLowerCase()) + 1),
      'task-repeated',
      'Repeated Tasks',
      'highlight-repeated',
      taskInput,
    );
  } else if (inputTrimed !== '' && event.key === 'Enter') {
    // taskInput.value = inputTrimed;
    deletedOldContent(oldArr, redoIcon, clearAllIcon);
    saveData(inputTrimed, taskArr);
    createAppendTask(inputTrimed, taskArr, taskArr.length, taskList,
      checkStatus, checkTask, removeTask, saveOldContent, updateContent);
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

clearBtn.addEventListener('click', () => {
  removeAllCompleted(taskArr, taskList);
});

clearAllIcon[0].addEventListener('click', (event) => {
  clearAllTask(event, oldArr, taskArr, taskList, taskInput, redoIcon);
});

redoIcon[0].addEventListener('click', (event) => {
  undoClearAll(event, createAppendTask, completedStyle, clearAllIcon, oldArr, taskArr,
    taskInput, taskList, checkStatus, checkTask, removeTask, saveOldContent, updateContent);
});

window.addEventListener('click', () => {
  // console.log(oldArr);
});
