import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const expect = require('expect');

const actions = require('actions');

let createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
  it('should generate search text action', () => {
    let action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'some search text'
    };
    let res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate toggle show completed action', () => {
    let action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    let res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    let action = {
      type: 'ADD_TODO',
      todo: {
        id: '123',
        text: 'Walk the dog',
        completed: false,
        createdAt: 12345
      }
    };
    let res = actions.addTodo(action.todo);

    expect(res).toEqual(action);
  });

  it('should create todo and dispatch ADD_TODO', (done) => {
    const store = createMockStore({});
    const todoText = 'todo item';

    store
      .dispatch(actions.startAddTodo(todoText)).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toInclude({
          type: 'ADD_TODO'
        });
        expect(actions[0].todo).toInclude({
          text: todoText
        });
        done();
      }).catch(done);
  });

  it('should generate ADD_TODOS action object', () => {
    let todos = [
      {
        id: 1,
        text: 'text',
        completed: false,
        createdAt: 123,
        completedAt: undefined
      }
    ];
    let action = {
      type: 'ADD_TODOS',
      todos
    };
    let res = actions.addTodos(todos);

    expect(res).toEqual(action);
  });

  it('should generate toggle todo action', () => {
    let action = {
      type: 'TOGGLE_TODO',
      id: 7
    };
    let res = actions.toggleTodo(action.id);

    expect(res).toEqual(action);
  });
});
