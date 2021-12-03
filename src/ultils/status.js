import listItems from './data.js';
import displayListItems from './template.js';

const inputList = displayListItems();

function userActions() {
  inputList.forEach((item) => {
    item.addEventListener('change', () => {
      item.listItem.completed = !item.listItem.completed;
      localStorage.setItem('listitems', JSON.stringify(listItems.data));
    });
  });
}

export default userActions;