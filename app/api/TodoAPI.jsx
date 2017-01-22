let $ = require('jquery');

module.exports = {
  filterTodos: function (todos, showCompleted, searchText) {
    let filteredTodos = todos;

    filteredTodos = filteredTodos
      .filter((todo) => !todo.completed || showCompleted)
      .filter((todo) => searchText.length === 0 || todo.text.toLowerCase().indexOf(searchText) > -1)
      .sort((a, b) => a.completed - b.completed);

    return filteredTodos;
  }
};
