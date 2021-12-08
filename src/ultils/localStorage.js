const setLocalStorage = () => {
  localStorage.setItem('todoList', JSON.stringify(Todo.data));
};

const getLocalStorage = () => {
  JSON.parse(localStorage.getItem('todoList'));
};

export { setLocalStorage, getLocalStorage };