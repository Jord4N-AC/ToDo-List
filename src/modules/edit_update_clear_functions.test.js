import removeAllCompleted from "./remove_completed";
import { updateContent } from "./edit_task";

describe('Edit, Update status, and clear complete functions testing', () =>{
  test('removeAllCompleted function', () => {
    document.body.innerHTML = `
      <div>
        <ul id="list-tasks">
          <li id="0" class="task-item box-format recent-added completed-container">
              <div class="task-content">
                  <input class="pointer task-input" type="checkbox">
                  <label class="task-label completed" contenteditable="true">Task 1</label>
              </div>
              <div class="task-icons">
                  <i class="fa fa-trash-o pointer" title="Remove task"></i>
                  <i class="fa fa-ellipsis-v"></i>
              </div>
          </li>
        </ul>
      </div>`;

    removeAllCompleted();

    const list = document.querySelectorAll('.task-item');
    expect(list).toHaveLength(0);
  });

  test('updateContent function', () => {
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

      const input = document.querySelector('.task-label');

      input.addEventListener('blur', updateContent);
  
      input.blur();
  });
});