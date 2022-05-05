export default function saveData(value, taskArr) {
  taskArr.push({ description: value, completed: false, index: taskArr.length });
  localStorage.setItem('taskArray', JSON.stringify(taskArr));
}