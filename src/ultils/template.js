import { listItems } from "./data";

export default 
    function displayListItems() {    
    const container = document.querySelector('.listItems');
    const list = document.querySelector('.addedToDoList');
  
    for (let i = 0; i < listItems.length; i += 1) {
      const item = listItems[i];
      const listItem = document.createElement('li');
      listItem.className = 'list-item';
      listItem.innerHTML = `<div class="item-conatiner"><label for="checked"></label><input class="checked" type="checkbox"/></label><p>${item.description}</p><i class="fas fa-ellipsis-v"></i></div><hr>`;
      list.appendChild(listItem);
    }
  
    const clearField = document.querySelector('.clear')
    clearField.innerText = 'Clear all completed';
  }
