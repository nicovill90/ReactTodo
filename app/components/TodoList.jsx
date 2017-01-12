const React = require('react');
const {connect} = require('react-redux');
const TodoAPI = require('TodoAPI');
import Todo from 'Todo';

export let TodoList = React.createClass({

  render: function () {
    let {todos, showCompleted, searchText} = this.props;
    let renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        );
      }

      return TodoAPI
        .filterTodos(todos, showCompleted, searchText)
        .map((todo) => {
        return (<Todo key={todo.id} {...todo}/>);
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(TodoList);
