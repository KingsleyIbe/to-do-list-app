import './css/style.css';
import displayListItems from './ultils/template.js';
import { addItem, init } from './ultils/component.js';
// import removeTask from './ultils/component.js';
// import userActions from './ultils/status.js';

displayListItems();
// userActions();

const inputField = document.querySelector('#text-input');
document.addEventListener('keypress', (e) => {
  const list = init(localStorage.getItem('todoList'));
  if (e.key === 'Enter' && inputField.value) {
    addItem(list, inputField.value);
    inputField.value = '';
    displayListItems();
  }
});
