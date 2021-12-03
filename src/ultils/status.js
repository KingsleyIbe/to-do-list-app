import listItems from './data.js';
import displayListItems from './template.js';

displayListItems();

const updateItems = () => {
  document.querySelectorAll('.list-item .checked').forEach((item) => {
    item.addEventListener('change', (e) => {
      const data = JSON.parse(localStorage.getItem('listitems')) || listItems
      const filtered = data.filter((item) => item.index !== parseInt(e.target.dataset.id, 10))
      const currentData = data.find((item) => item.index === parseInt(e.target.dataset.id, 10))
      currentData.completed = !currentData.completed;
      filtered.push(currentData);
      // localStorage.setItem('listitems', JSON.stringify(filtered));
        localStorage.setItem('CurrentData', JSON.stringify(currentData));    
    });
  });
};

const storedData = JSON.parse(localStorage.getItem('listItems') || 'null');
if (storedData !== null) {
  listItems.length = 0;
  listItems.push(...storedData);
}

export default updateItems;
