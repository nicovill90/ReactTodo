const React = require('react');

let AddTodo = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();

    let newTodo = this.refs.todoText.value;

    if (newTodo.trim() !== '') {
      this.refs.todoText.value = '';
      this.props.onAddTodo(newTodo);
    } else {
      this.refs.todoText.focus();
    }
  },

  render: function () {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="addtodo-form">
          <input type="text" ref="todoText" placeholder="New Todo"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
