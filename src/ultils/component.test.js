/* eslint-disable linebreak-style */
import $ from 'jquery';

import { addItem } from './component.js';
import displayListItems from './template.js';

jest.mock('./component.js', () => {
  const originalModule = jest.requireActual('./component.js');

  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn(() => 'mocked default'),
    displayListItems: '<input type="text" name="input-list" value="Add To-do item for test" id="todo" id="0">'
    ,
  };
});

describe('Test for the addItem function', () => {
  test('Check if new item is a string or a number', () => {
    document.body.innerHTML = '<div id="todo">'
    + '  <span id="username" />'
    + '  <input type="text" value="Add To-do item for test" id="todo"/>'
    + '  <ul class="todo-list"></ul>'
    + '</div>';
    const items = 'test testing';
    const newTodo = 'dummy data';
    addItem(items, newTodo);
    expect(JSON.parse(localStorage.getItem('todoList'))).toHaveLength(1);
    expect(displayListItems).toMatch(/Add To-do item for test/);
  });
});

// describe('Test for the deleteItem function', () => {
//   test('Test for the deleteItem function', () => {
//     document.body.innerHTML = '<div id="todo">'
//         + '  <span id="username" />'
//         + '  <input type="text" value="Remove to-do item for test" id="todo"/>'
//         + '  <ul class="todo-list"><li> <input name="input-list" id="0"/> <i class="fas fa-trash-alt" id= "delete"></i></li></i></ul>'
//         + '</div>';
//     const storage = JSON.parse(localStorage.getItem('toDoList'));

//     deleteItem(storage);
//     $('#delete').click();

//     expect(JSON.parse(localStorage.getItem('toDoList'))).toHaveLength(0);
//   });
// });