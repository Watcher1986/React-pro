
import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: this.props.users,
      filterText: '',
      nameIncludesCount: null,
    };
  }

  onChangeFilterText(newFilterText, newUsersList, newCount) {
    this.setState({
      users: newUsersList,
      filterText: newFilterText,
      nameIncludesCount: newCount,
    });
  }

  render() {
    let nameIncludesCount = null;
    const inputText = this.state.filterText;
    let usersList = {};
    if (inputText !== '') {
      usersList = this.state.users.filter(user =>
        inputText.toLowerCase().includes(user.name.toLowerCase()),
      );
      nameIncludesCount = usersList.length;
    } else {
      usersList = this.state.users;
    }
    return (
      <div>
        <Filter
          onChange={this.onChangeFilterText.bind(this)}
          filterText={this.props.users}
          count={this.state.nameIncludesCount || 0}
        />
        <ul className="users">
          {usersList.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;

import React, { Component } from 'react';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: props.filterText,
    };
  }

  onInputChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <div className="filter">
        <span className="filter__count">{this.props.count}</span>
        <input
          type="text"
          className="filter__input"
          value={this.state.inputValue}
          onChange={this.onInputChange.bind(this)}
        />
      </div>
    );
  }
}

export default Filter;
