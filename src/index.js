import './style.css';

import { taskInput, addBtn } from './modules/variables.js';
import createAppendTask from './modules/create_append.js';
import clearField from './modules/clear_field.js';
import saveData from './modules/save_data.js';

taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && taskInput.value !== '') {
    createAppendTask();
    saveData();
    clearField();
  }
});

addBtn.addEventListener('click', () => {
  if (taskInput.value !== '') {
    createAppendTask();
    saveData();
    clearField();
  }
});

addBtn.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && taskInput.value !== '') {
    createAppendTask();
    saveData();
    clearField();
  }
});
