import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      filteredUsers: null,
      namesIncludesCount: null,
    };
  }

  onChangeFilterText = e => {
    let newFilterText = e.target.value;
    let usersCount = null;
    let newUsersList = {};
    if (newFilterText !== '') {
      newUsersList = this.props.users.filter(user =>
        newFilterText.toLowerCase().includes(user.name.toLowerCase()),
      );
      usersCount = newUsersList.length;
    } else {
      newUsersList = this.props.users;
    }
    this.setState({
      filteredUsers: newUsersList,
      filterText: newFilterText,
      namesIncludesCount: usersCount,
    });
  };

  render() {
    const usersList = this.state.filterText === '' ? this.props.users : this.state.filteredUsers;

    return (
      <div>
        <Filter
          onChange={this.onChangeFilterText}
          filterText={this.state.filterText}
          count={this.state.namesIncludesCount || 0}
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
