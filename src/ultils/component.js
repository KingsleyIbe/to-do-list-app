import displayListItems from './template.js';
import { getLocalStorage, setLocalStorage } from './localStorage.js';
import Todo from './Todo.js';

const addItem = (items, newTodo) => {
  items.push({
    index: items.length + 1,
    description: newTodo,
    completed: false,
  });
  localStorage.setItem('todoList', JSON.stringify(items));
};

const deleteItem = () => {
  document.querySelectorAll('.remove-btn').forEach((item) => {
    item.addEventListener('click', () => {
      const { index } = item.dataset;
      const delItem = Todo.data.find((el) => el.index == index);
      Todo.data = Todo.data.filter((el) => el !== delItem);
      localStorage.setItem('todoList', JSON.stringify(Todo.data));
      displayListItems();
    });
  });
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
  const data = getLocalStorage();
  const listItemObj = data.find((x) => x.index === id);
  listItemObj.description = e.target.textContent;
  data.splice(id - 1, 0, listItemObj);
  setLocalStorage();
};

export {
  addItem, deleteItem, init, updateListItem,
};
