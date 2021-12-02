import listItems from './template';
import displayListItems from './template';

const inputList = displayListItems();

const updateSaver = (listItems) => {
  // document.addEventListener('DOMContentLoaded', () => {
    inputList.forEach((item) => {
      item.addEventListener('change', () => {
        const parent = item.parentNode;
        const superParent = parent.parentNode;
        const index = Array.prototype.indexOf.call(superParent.children, parent);
        const currentItem = listItems[index].completed;
        console.log(item)
        if (currentItem) {
          listItems[index].completed = false;
        } else {
          listItems[index].completed = true;
        };
      });
    });
  };
// };

function storeData() {
  inputList.forEach((item) => {
    item.addEventListener('change', () => {
      localStorage.setItem('itemsLocal', JSON.stringify(listItems));
    });
  });
};

function updateStorage() {
  window.addEventListener('load', () => {
    const localItems = JSON.parse(localStorage.getItem('localItems'));
    listItems.splice(0, listItems.length, ...localItems);
    inputList.forEach((item) => {
      const parent = item.parentNode;
      const superParent = parent.parentNode;
      const index = Array.prototype.indexOf.call(superParent.children, parent);
      const currentItem = localItems[index].completed;
      if (currentItem) {
        item.setAttribute('checked', '');
      }
    });
  });
}

export { updateSaver, storeData, updateStorage };