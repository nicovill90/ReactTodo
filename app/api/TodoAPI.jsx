let $ = require('jquery');

module.exports = {
  setTodos: function (todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },

  getTodos: function () {
    let stringTodos = localStorage.getItem('todos');
    let todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {
    }

    return $.isArray(todos) ? todos : [];
  },

  filterTodos: function (todos, showCompleted, searchText) {
    let filteredTodos = todos;

    filteredTodos = filteredTodos
      .filter((todo) => !todo.completed || showCompleted)
      .filter((todo) => searchText.length === 0 || todo.text.toLowerCase().indexOf(searchText) > -1)
      .sort((a, b) => a.completed - b.completed);

    return filteredTodos;
  }
};
