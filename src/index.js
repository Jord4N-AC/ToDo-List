import './style.css';

import { taskInput, addBtn } from './modules/variables.js'
import createAppendTask from './modules/create_append.js'
import loadContent from './modules/load_content.js'
import clearField from './modules/clear_field.js'
import saveData from './modules/save_data.js'

const taskArr = loadContent();

taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && taskInput.value !== '') {
    createAppendTask();
    saveData(taskArr);
    clearField();
  }
});

addBtn.addEventListener('click', () => {
  if (taskInput.value !== '') {
    createAppendTask();
    saveData(taskArr);
    clearField();
  }
});

addBtn.addEventListener('keydown', () => {
  if (taskInput.value !== '') {
    createAppendTask();
    saveData(taskArr);
    clearField();
  }
});

window.addEventListener('click', () => {
  console.log(taskArr);
  console.log(typeof taskArr);
});
