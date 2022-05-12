import createAppendTask from "./create_append";
import { taskList } from './variables';

test('Add new item to the list', () => {
  document.body.innerHTML= `
    <div>
      <ul id="list-tasks">          
      </ul>
    </div>`
  let element = document.getElementById('list-tasks');
  createAppendTask('task1', false, element);
  const list = document.querySelectorAll('.task-item');
  expect(list).toHaveLength(1);
})