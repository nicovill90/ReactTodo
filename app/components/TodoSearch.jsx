const React = require('react');
const {connect} = require('react-redux');
const actions = require('actions');

export let TodoSearch = React.createClass({
  render: function () {
    let {dispatch, showCompleted, searchText} = this.props;

    return (
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" value={searchText} onChange={() => {
            let searchText = this.refs.searchText.value;
            dispatch(actions.setSearchText(searchText))
          }}/>
        </div>

        <div>
          <label>
            <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => dispatch(actions.toggleShowCompleted())}/>
            Show completed todos
          </label>
        </div>
      </div>
    );
  }
});

export default connect(
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    }
  }
)(TodoSearch);
