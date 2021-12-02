import listItems from './data.js';

    function displayListItems() {    
    // const container = document.querySelector('.listItems');
    const list = document.querySelector('.addedToDoList');
  
    for (let i = 0; i < listItems.length; i += 1) {
      const item = listItems[i];
      const listItem = document.createElement('li');
      listItem.className = 'list-item';
      listItem.innerHTML = `<div class="item-container"><label for="checked"></label><input class="checked list-input" type="checkbox"/></label><p>${item.description}</p><i class="fas fa-ellipsis-v"></i></div><hr>`;
      list.appendChild(listItem);
    }

    const inputList = document.querySelectorAll('.list-input');
    return inputList;
  
    const clearField = document.querySelector('.clear');
    clearField.innerText = 'Clear all completed';
  }

  export default displayListItems;