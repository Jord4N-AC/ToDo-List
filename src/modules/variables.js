// eslint-disable-next-line import/no-cycle
import loadContent from './load_content.js';

export const taskList = document.getElementById('list-tasks');
export const taskInput = document.getElementById('list-input-text');
export const addBtn = document.getElementById('list-input-btn');
export const taskArr = loadContent();