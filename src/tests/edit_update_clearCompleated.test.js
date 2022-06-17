import removeAllCompleted from '../modules/remove_completed.js';

import { checkStatus, checkTask } from '../modules/task_status.js';
import { saveOldContent, updateContent } from '../modules/edit_task.js';
import updateCounters from '../modules/counters.js';

import createAppendTask from '../modules/create_append.js';
import removeTask from '../modules/remove_task.js';


const taskArr = [];

document.body.innerHTML = `
  <div>
    <div id="count-conter" class="counter-column">
      <span id="all-counter" class=""></span>
      <span id="pending-counter" class=""></span>
      <span id="completed-counter" class=""></span>
    </div>
   
    <form id="list-input-group" class="box-format">
        <input id="list-input-text" type="text" placeholder="Add to your list....." required autofocus>
        <input id="list-input-btn" class="pointer" type="submit" value="&#8626;" title="Add button">
    </form>
    <!-- Tasks List -->
    <ul id="list-tasks"></ul>
    <!-- Clear All Completed Button -->
    <button id="clear-btn" class="box-format pointer" type="button">Clear all completed</button>
  </div>`;

const taskList = document.getElementById('list-tasks');
const taskInput = document.getElementById('list-input-text');

const allCounter = document.getElementById('all-counter');
const pendingCounter = document.getElementById('pending-counter');
const completedCounter = document.getElementById('completed-counter');

const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', () => {
  removeAllCompleted(taskArr, taskList,
    updateCounters, allCounter, pendingCounter, completedCounter);
});


for (let i = 1; i < 6; i += 1) {
  taskArr.push({ description: `task ${i}`, completed: false, index: taskArr.length + 1 });
  createAppendTask(taskArr[i - 1].description, taskArr, taskArr.length, taskList, taskInput,
  // events
  checkStatus, checkTask, removeTask, saveOldContent, updateContent,
  updateCounters, allCounter, pendingCounter, completedCounter);
}

const tasks = document.getElementsByClassName('task-item');
const taskCheckbox = document.getElementsByClassName('task-input');
const taskDescription = document.getElementsByClassName('task-label');

const completedTasks = document.getElementsByClassName('completed-container');


describe('Edit, Task status, and clear all completed', () =>{
  test('Edit task description', () => {
    const newTxt = 'New task 1';

    taskDescription[0].focus();
    taskDescription[0].innerText = newTxt;
    taskDescription[0].blur();

    expect(taskDescription[0].innerText).toBe(newTxt);
    expect(taskArr[0].description).toBe(newTxt);
  });

  test('Update task Status (completed/pending)', () => {
    taskCheckbox[1].click();
    taskCheckbox[2].click();

    expect(taskCheckbox[1].checked).toBe(true);
    expect(taskCheckbox[2].checked).toBe(true);
    expect(completedTasks).toHaveLength(2);
  });
  
  test('Remove all completed Tasks', () => {
    clearBtn.click();
    
   expect(completedTasks).toHaveLength(0);
   expect(tasks).toHaveLength(3);
  });
});
