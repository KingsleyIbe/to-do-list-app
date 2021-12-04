import displayListItems from './template.js';

class Todo {
  constructor(description) {
  this.index = 0;
  this.description = description;
  this.completed = '';
}
 }

const addItem = (items, newTodo) => {
    items.push({
      index: items.length + 1,
      description: newTodo,
      completed: false,
    });
    localStorage.setItem('todoList', JSON.stringify(items));
  };

const init = (data) => {
    data = localStorage.getItem('todoList');
    let getData = data;
    if (getData === null) {
      getData = [];
    } else {
      getData = JSON.parse(getData);
    }
    return getData;
  };

const updateListItem = (e) => {
        const id = Number(e.target.getAttribute('data-index'));
        const data = JSON.parse(localStorage.getItem('todoList'));
        const listItemObj = data.find((x) => x.index === id);
      
        listItemObj.description = e.target.textContent;
        localStorage.setItem('todoList', JSON.stringify(data));
      };

export { addItem, init, updateListItem };