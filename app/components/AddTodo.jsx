const React = require('react');
const {connect} = require('react-redux');
let actions = require('actions');

export let AddTodo = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();

    let {dispatch} = this.props;
    let todoText = this.refs.todoText.value;

    if (todoText.trim() !== '') {
      this.refs.todoText.value = '';
      dispatch(actions.startAddTodo(todoText))
    } else {
      this.refs.todoText.focus();
    }
  },

  render: function () {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit} className="addtodo-form">
          <input type="text" ref="todoText" placeholder="New Todo"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo);
