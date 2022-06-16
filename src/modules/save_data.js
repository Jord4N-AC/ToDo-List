// Push data to Array and localStorage
export default function saveData(value, taskArr) {
  taskArr.push({ description: value, completed: false, index: taskArr.length + 1 });
  localStorage.setItem('taskArray', JSON.stringify(taskArr));
}