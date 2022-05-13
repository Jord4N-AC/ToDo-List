import removeAllCompleted from "./remove_completed";
import { updateContent } from "./edit_task";

describe('Edit, Update status, and clear complete functions testing', () =>{
  test('removeAllCompleted function', () => {
    document.body.innerHTML = `
    <button id="clear-btn" class="box-format pointer" type="button">Clear all completed</button>`;

    // const taskArr = [{description: 'Task 1', completed: false, index: 0},
    // {description: 'Task2', completed: true, index: 1},
    // {description: 'Task3', completed: false, index: 2}];

    // const button = document.querySelector('#clear-btn');

    // button.addEventListener('click', removeAllCompleted);

    // button.click();

    removeAllCompleted();

    expect(taskArr).toHaveLength(2);
  });

  // test('updateContent function', () => {
  //   document.body.innerHTML = `
  //     <div>
  //       <ul id="list-tasks">
  //         <li id="0" class="task-item box-format">
  //             <div class="task-content">
  //                 <input class="pointer task-input" type="checkbox">
  //                 <label class="task-label" contenteditable="true">Task 1</label>
  //             </div>
  //             <div class="task-icons">
  //                 <i class="fa fa-trash-o pointer" title="Remove task"></i>
  //                 <i class="fa fa-ellipsis-v"></i>
  //             </div>
  //         </li>
  //       </ul>
  //     </div>`;

  //     const input = document.querySelector('.task-label');

  //     input.addEventListener('blur', updateContent);
  
  //     input.blur();
  // });
});