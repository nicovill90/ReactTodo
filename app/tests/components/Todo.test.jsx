const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jquery');
const TestUtils = require('react-addons-test-utils');

let {Todo} = require('Todo');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should dispatch TOGGLE_TODO action on click', () => {
    let todoData = {
      id: 199,
      text: 'Write todo.test.jsx test',
      completed: true
    };
    let spy = expect.createSpy();
    let todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);
    let $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith({
      type: 'TOGGLE_TODO',
      id: todoData.id
    });
  });
});
