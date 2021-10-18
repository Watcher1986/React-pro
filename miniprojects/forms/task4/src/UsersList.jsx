import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //users: this.props.users,
      filterText: '',
      filteredUsers: null,

      nameIncludesCount: null,
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
      nameIncludesCount: usersCount,
    });
  };

  render() {
    // let nameIncludesCount = null;
    // const inputText = this.state.filterText;
    // let usersList = {};
    // if (inputText !== '') {
    //   usersList = this.props.users.filter(user =>
    //     inputText.toLowerCase().includes(user.name.toLowerCase()),
    //   );
    //   nameIncludesCount = usersList.length;
    // } else {
    //   usersList = this.props.users;
    // }
    const usersList = this.state.filterText === '' ? this.props.users : this.state.filteredUsers;

    return (
      <div>
        <Filter
          onChange={this.onChangeFilterText}
          filterText={this.state.filterText}
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
