import removeAllCompleted from '../modules/remove_completed.js';

import { checkStatus, checkTask } from '../modules/task_status.js';
import { saveOldContent, updateContent } from '../modules/edit_task.js';
import updateCounters from '../modules/counters.js';

import createAppendTask from '../modules/create_append.js';
import removeTask from '../modules/remove_task.js';




document.body.innerHTML = `
  <div>
    <div id="count-conter" class="counter-column">
      <span id="all-counter" class=""></span>
      <span id="pending-counter" class=""></span>
      <span id="completed-counter" class=""></span>
    </div>
    <!-- Task Form for Adding Tasks -->
    <form id="list-input-group" class="box-format">
        <input id="list-input-text" type="text" placeholder="Add to your list....." required autofocus>
        <input id="list-input-btn" class="pointer" type="submit" value="&#8626;" title="Add button">
    </form>
    <!-- Tasks List -->
    <ul id="list-tasks"></ul>
    <!-- Clear All Completed Button -->
    <button id="clear-btn" class="box-format pointer" type="button">Clear all completed</button>
  </div>`;
