const React = require('react');
let TodoList = require('TodoList');
let AddTodo = require('AddTodo');
let TodoSearch = require('TodoSearch');

let TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the yard'
        },
        {
          id: 3,
          text: 'Wash dishes'
        }
      ]
    };
  },

  handleAddTodo: function (text) {
    alert('new todo: ' + text);
  },

  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },

  render: function () {
    let {todos}  = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
