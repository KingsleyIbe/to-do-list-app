import listItems from './data.js';
import displayListItems from './template';

const inputList = displayListItems();

function userActions() {
  inputList.forEach((item) => {
    item.addEventListener('change', () => {
      const parent = item.parentNode;
      const superParent = parent.parentNode;
      const index = Array.prototype.indexOf.call(superParent.children, parent);
      const currentItem = listItems[index].completed;
      if (currentItem) {
        listItems[index].completed = false;
      } else {
        listItems[index].completed = true;
      }
    });
  });
}

function saveData() {
  inputList.forEach((item) => {
    item.addEventListener('change', () => {
      localStorage.setItem('listitems', JSON.stringify(listItems));
    });
  });
}

function updateStorage() {
  window.addEventListener('load', () => {
    const listItems = JSON.parse(localStorage.getItem('listitems'));
    listItems.splice(0, listItems.length, ...listItems);
    inputList.forEach((item) => {
      const parent = item.parentNode;
      const superParent = parent.parentNode;
      const index = Array.prototype.indexOf.call(superParent.children, parent);
      const currentItem = listItems[index].completed;
      if (currentItem) {
        item.setAttribute('checked', '');
      }
    });
  });
}

export { userActions, saveData, updateStorage };
