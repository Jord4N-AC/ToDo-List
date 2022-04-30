import { taskInput } from './variables.js';

export default function clearField(element = taskInput) {
  element.value = '';
  element.focus();
}