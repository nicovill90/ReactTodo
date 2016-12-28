const React = require('react');

let Todo = React.createClass({
  render: function () {
    let {id, text, completed} = this.props;

    return (
      <div onClick={() => { this.props.onToggle(id) }}>
        <input type="checkbox" checked={completed}/>
        {text}
      </div>
    );
  }
});

module.exports = Todo;
