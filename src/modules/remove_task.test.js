import removeTask from './remove_task.js';

test('Test removeTask function', () => {
  document.body.innerHTML = `
    <div>
      <ul id="list-tasks">
        <li id="0" class="task-item box-format">
            <div class="task-content">
                <input class="pointer task-input" type="checkbox">
                <label class="task-label" contenteditable="true">Task 1</label>
            </div>
            <div class="task-icons">
                <i class="fa fa-trash-o pointer" title="Remove task"></i>
                <i class="fa fa-ellipsis-v"></i>
            </div>
        </li>
      </ul>
    </div>`;

  document.querySelector('.fa-trash-o').addEventListener('click', removeTask);

  document.querySelector('.fa-trash-o').click();

  const list = document.querySelectorAll('.task-item');
  expect(list).toHaveLength(0);
});