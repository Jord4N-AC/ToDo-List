// eslint-disable-next-line import/no-cycle
import loadContent from './load_content.js';

export const taskList = document.getElementById('list-tasks');
export const taskInput = document.getElementById('list-input-text');
export const addBtn = document.getElementById('list-input-btn');
export const taskForm = document.getElementById('list-input-group');
export const clearBtn = document.getElementById('clear-btn');
export const completedElements = document.getElementsByClassName('completed-container');

// Mesagges
export const successMessage = document.getElementById('success-msg');
export const repeatedMessage = document.getElementById('repeated-msg');

export const taskArr = loadContent();