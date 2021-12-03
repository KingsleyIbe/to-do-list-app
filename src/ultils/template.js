import listItems from './data.js';

const storedListItems = JSON.parse(localStorage.getItem('listitems') || 'null');
if (storedListItems !== null) {
  listItems.data = storedListItems;
}

function displayListItems() {
  const list = document.querySelector('.addedToDoList');

  for (let i = 0; i < listItems.data.length; i += 1) {
    const { completed, description, index } = listItems.data[i];
    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    listItem.innerHTML = `<div class="item-container"><label for="checked"><input class="checked list-input" type="checkbox" data-id="${index}" ${completed ? 'checked' : ''}/></label><p>${description}</p><i class="fas fa-ellipsis-v"></i></div><hr>`;
    list.appendChild(listItem);
  };
  const clearElement = document.querySelector('.clear');
  clearElement.innerText = 'Clear all completed';
  const inputList = document.querySelectorAll('.list-input');
  for (let i = 0; i < listItems.data.length; i += 1) {
    inputList[i].listItem = listItems.data[i];
 };
  return inputList;
};

export default displayListItems;