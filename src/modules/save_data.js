import { taskInput } from './variables.js'

export default function saveData(arr, value = taskInput.value) {
    arr.push({ description: value, completed: false, index: arr.length });
    localStorage.setItem('taskArray', JSON.stringify(arr));
  }