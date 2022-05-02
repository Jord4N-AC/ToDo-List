import './style.css';

import { taskInput, addBtn, taskArr, clearBtn } from './modules/variables.js';
import createAppendTask from './modules/create_append.js';
import clearField from './modules/clear_field.js';
import saveData from './modules/save_data.js';
import removeAllCompleted from './modules/remove_completed.js';


taskInput.addEventListener('keydown', (event) => {
  if (
    taskInput.value !== ''
    && event.key === 'Enter'
    ) {
      saveData();
      createAppendTask();
      clearField();
  }
});

addBtn.addEventListener('click', () => {
  if (taskInput.value !== '') {
    saveData();
    createAppendTask();
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
    clearField();
  }
});


clearBtn.addEventListener('click', removeAllCompleted);

window.addEventListener('click', () => {
  console.log(taskArr);
});