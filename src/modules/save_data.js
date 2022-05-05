import { taskArr } from './variables.js';

export default function saveData(value, arr = taskArr) {
  arr.push({ description: value, completed: false, index: arr.length });
  localStorage.setItem('taskArray', JSON.stringify(arr));
}