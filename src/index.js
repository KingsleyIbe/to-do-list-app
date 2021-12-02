import _ from 'lodash';
import './style.css';

const listItems = [
  {
    description: "Join morning session call",
    completed: false,
    index: 0
  },
  {
    description: "Join standup session call",
    completed: true,
    index: 1
  },
  {
    description: "Join morning session call",
    completed: false,
    index: 2
  },
  {
    description: "Join morning session call",
    completed: false,
    index: 3
  },
  {
    description: "Join morning session call",
    completed: false,
    index: 4
  },
  {
    description: "Join morning session call",
    completed: false,
    index: 5
  }
]

function displayListItems() {
  const container = document.querySelector('.listItems');
  const list = document.querySelector('.addedToDoList');

  for (let i = 0; i < listItems.length; i += 1) {
    const item = listItems[i];
    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    listItem.innerHTML = `<div class="item-conatiner"><input type="checkbox"/><p>${item.description}</p><i class="fas fa-ellipsis-v"></i></div><hr>`;
    list.appendChild(listItem);
  }

  container.appendChild(list);
  const clearElement = document.createElement('p');
  clearElement.className = 'clear';
  clearElement.innerText = 'Clear all completed';
  container.appendChild(clearElement);
}

displayListItems();