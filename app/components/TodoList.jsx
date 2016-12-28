const React = require('react');
let Todo = require('Todo');

let TodoList = React.createClass({

  render: function () {
    let renderTodos = () => {
      let {todos} = this.props;
      return todos.map((todo) => {
        return (<Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>);
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

module.exports = TodoList;
