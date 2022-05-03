import './style.css';

import { taskList, taskInput, addBtn, taskArr, clearBtn } from './modules/variables.js';
import createAppendTask from './modules/create_append.js';
import clearField from './modules/clear_field.js';
import saveData from './modules/save_data.js';
import removeAllCompleted from './modules/remove_completed.js';
import showSuccessMessage from './modules/alert_messages.js';


taskInput.addEventListener('keydown', (event) => {
  if (
    taskInput.value !== ''
    && event.key === 'Enter'
    ) {
      saveData();
      createAppendTask();
      showSuccessMessage();
      clearField();
  }
});

addBtn.addEventListener('click', () => {
  if (taskInput.value !== '') {
    saveData();
    createAppendTask();
    showSuccessMessage();
    clearField();
  }
});

addBtn.addEventListener('keydown', (event) => {
  if (
    taskInput.value !== ''
    && event.key === 'Enter'
    ) {
      saveData();
      createAppendTask();
      showSuccessMessage();
    clearField();
  }
});


clearBtn.addEventListener('click', removeAllCompleted);

window.addEventListener('click', () => {
  console.log(taskArr);
});