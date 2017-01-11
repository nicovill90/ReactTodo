const React = require('react');
const ReactDOM = require('react-dom');
const {Provider} = require('react-redux');
const expect = require('expect');
const $ = require('jquery');
const TestUtils = require('react-addons-test-utils');

const configureStore = require('configureStore');
let TodoApp = require('TodoApp');
import TodoList from 'TodoList';

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should render TodoList', () => {
    let store = configureStore.configure();
    let provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp/>
      </Provider>
    );

    let todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
    let todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

    expect(todoList.length).toEqual(1);
  });
});
