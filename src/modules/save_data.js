import { taskInput, taskArr } from './variables.js'

export default function saveData(arr = taskArr, value = taskInput.value) {
    arr.push({ description: value, completed: false, index: arr.length });
    localStorage.setItem('taskArray', JSON.stringify(arr));
  }