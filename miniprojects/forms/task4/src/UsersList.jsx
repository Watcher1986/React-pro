import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: this.props.users,
      // filterText: '',
      nameIncludesCount: null,
    };
  }

  onChangeFilterText(newUsersList, newCount) {
    this.setState({
      users: newUsersList,
      // filterText: newFilterText,
      nameIncludesCount: newCount,
    });
  }

  render() {
    // let nameIncludesCount = null;
    // const inputText = this.state.filterText;
    // let usersList = {};
    // if (inputText !== '') {
    //   usersList = this.state.users.filter(user =>
    //     inputText.toLowerCase().includes(user.name.toLowerCase()),
    //   );
    //   nameIncludesCount = usersList.length;
    // } else {
    //   usersList = this.state.users;
    // }

    return (
      <div>
        <Filter
          onChange={this.onChangeFilterText.bind(this)}
          filterText={this.props.users}
          count={this.state.nameIncludesCount || 0}
        />
        <ul className="users">
          {this.state.users.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
