import { taskInput } from '../modules/variables.js';
import { checkStatus, checkTask } from '../modules/task_status.js';
import { saveOldContent, updateContent } from '../modules/edit_task.js';
import updateCounters from '../modules/counters.js';

import createAppendTask from '../modules/create_append.js';
import removeTask from '../modules/remove_task.js';

describe('Add and remove tests', () => {
  const taskArr = [];
  taskArr.push({ description: 'task 1', completed: false, index: taskArr.length + 1 });

  document.body.innerHTML = `
    <div>
      <div id="count-conter" class="counter-column">
        <span id="all-counter" class=""></span>
        <span id="pending-counter" class=""></span>
        <span id="completed-counter" class=""></span>
      </div>
      <ul id="list-tasks">          
      </ul>
    </div>`;

  const taskList = document.getElementById('list-tasks');

  const allCounter = document.getElementById('all-counter');
  const pendingCounter = document.getElementById('pending-counter');
  const completedCounter = document.getElementById('completed-counter');

  test('Add new item to the list', () => {
    createAppendTask('task 1', taskArr, taskArr.length, taskList, taskInput,
      // events
      checkStatus, checkTask, removeTask, saveOldContent, updateContent,
      updateCounters, allCounter, pendingCounter, completedCounter);

    const list = document.querySelectorAll('.task-item');
    expect(list).toHaveLength(1);
  });

  test('Test removeTask function', () => {
    document.querySelector('.fa-trash-o').addEventListener('click', (event) => {
      removeTask(event, taskArr, taskList, updateCounters, allCounter, pendingCounter,
        completedCounter);
    });

    document.querySelector('.fa-trash-o').click();

    const list = document.querySelectorAll('.task-item');
    expect(list).toHaveLength(0);
  });
});
