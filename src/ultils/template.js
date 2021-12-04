import { addItem, updateListItem } from "./component.js";
import Todo from "./Todo.js";

const storedListItems = JSON.parse(localStorage.getItem('todoList') || '[]');
if (storedListItems !== []) {
  Todo.data = storedListItems;
}

function displayListItems() {
  const list = document.querySelector('.addedToDoList');
  list.innerHTML = '';
  for (let i = 0; i < Todo.data.length; i += 1) {
    const { completed, description, index } = Todo.data[i];
    const todoTask = document.createElement('li');
    todoTask.className = 'list-item';
    todoTask.innerHTML = `
    <div class="item-container">
    <label for="checked">
    <input class="checked list-input" type="checkbox" data-index="${index}" ${completed ? 'checked' : ''}/>
    </label>
    <p class="description">${description}</p>
    <i class="fas fa-ellipsis-v edit"></i>
    <i class="fas fa-trash-alt remove-btn" data-index=${index}></i>
    </div>
    <hr>`;
    list.appendChild(todoTask);
  };
  document.querySelectorAll('.checked').forEach(item=>{
    item.addEventListener('change', ()=>{
      console.log('check')
      const {index} = item.dataset; 
      const changeItem = Todo.data.find(el=>el.index == index);
      if (changeItem.completed == true) changeItem.completed = false;
      else if (changeItem.completed == false) changeItem.completed = true;
      localStorage.setItem('todoList', JSON.stringify(Todo.data));
      displayListItems();

    });
  });

  document.querySelectorAll('.remove-btn').forEach(item=>{
    item.addEventListener('click', ()=>{
      const {index} = item.dataset; 
      const delItem = Todo.data.find(el=>el.index == index);
      Todo.data = Todo.data.filter(el=>el !== delItem);
      localStorage.setItem('todoList', JSON.stringify(Todo.data))
      displayListItems();
    });
  });

  const clearAll = document.querySelector('.clear');
clearAll.addEventListener('click', () => {
  console.log('clicked');
  // const completedItems = Todo.data.find(el=>el.completed == true);
  Todo.data.filter(el=>el.completed !== true);
  localStorage.setItem('todoList', JSON.stringify(Todo.data))
  displayListItems();
});

document.querySelectorAll('.description').forEach(item => {
  item.addEventListener('click', () => {
    console.log("edit")
    // updateListItem(e);
  });
});

  const clearElement = document.querySelector('.clear');
  clearElement.innerText = 'Clear all completed';
  const inputList = document.querySelectorAll('.list-input');
  for (let i = 0; i < Todo.data.length; i += 1) {
    inputList[i].listItem = Todo.data[i];
 };
  return inputList;
};

export default displayListItems;