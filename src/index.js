import './style.css';

import {
  taskList, taskInput, addBtn, taskForm, clearBtn, successMessage, repeatedMessage,
  redoIcon, clearAllIcon, allCounter, pendingCounter, completedCounter, eyeIcons,
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

import updateCounters from './modules/counters.js';

import { showAllTasks, showPendingTasks, showCompleteTasks } from './modules/show_hide_tasks.js';

const taskArr = loadContent(
  createAppendTask, taskList, taskInput, checkStatus, completedStyle,
  checkTask, removeTask, saveOldContent, updateContent,
  updateCounters, allCounter, pendingCounter, completedCounter,
);

const oldArr = [];

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

// Hide Messages when type on input
taskInput.addEventListener('input', () => {
  if (document.getElementsByClassName('task-repeated').length > 0) {
    document.getElementsByClassName('task-repeated')[0].removeAttribute('title');
    document.getElementsByClassName('task-repeated')[0].classList.toggle('task-repeated');
  }
  if (document.getElementsByClassName('show').length > 0) {
    document.getElementsByClassName('show')[0].classList.toggle('show');
  }
});

// Add Task when pressing 'enter' on input
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
    createAppendTask(taskInput.value, taskArr, taskArr.length, taskList, taskInput,
      checkStatus, checkTask, removeTask, saveOldContent, updateContent,
      updateCounters, allCounter, pendingCounter, completedCounter);
    updateCounters(allCounter, pendingCounter, completedCounter);
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

// Add Task when clicking Add Button
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
    createAppendTask(taskInput.value, taskArr, taskArr.length, taskList, taskInput,
      checkStatus, checkTask, removeTask, saveOldContent, updateContent,
      updateCounters, allCounter, pendingCounter, completedCounter);
    updateCounters(allCounter, pendingCounter, completedCounter);
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

// Add Task when pressing 'enter' on Add Button
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
    createAppendTask(inputTrimed, taskArr, taskArr.length, taskList, taskInput,
      checkStatus, checkTask, removeTask, saveOldContent, updateContent,
      updateCounters, allCounter, pendingCounter, completedCounter);
    updateCounters(allCounter, pendingCounter, completedCounter);
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

// Remove All Complete Tasks 
clearBtn.addEventListener('click', () => {
  removeAllCompleted(taskArr, taskList,
    updateCounters, allCounter, pendingCounter, completedCounter);
});

// Remove all tasks when clicking refresh icon
clearAllIcon[0].addEventListener('click', (event) => {
  clearAllTask(event, oldArr, taskArr, taskList, taskInput, redoIcon,
    updateCounters, allCounter, pendingCounter, completedCounter);
});

// Retieve all removed tasks when clicking undo icon
redoIcon[0].addEventListener('click', (event) => {
  undoClearAll(event, createAppendTask, completedStyle, clearAllIcon, oldArr, taskArr,
    taskList, taskInput, checkStatus, checkTask, removeTask, saveOldContent, updateContent,
    updateCounters, allCounter, pendingCounter, completedCounter);
});


// Show Tasks when clicking eye icon
eyeIcons.forEach((icon, i) => {
  icon.addEventListener('click', (event) => {
    if (i === 0) showAllTasks(event, eyeIcons);
    else if (i === 1) showPendingTasks(event, eyeIcons);
    else if (i === 2) showCompleteTasks(event, eyeIcons);
  });
});
