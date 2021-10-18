import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      //filteredUsers: this.props.users || ,
      //namesIncludesCount: null,
    };
  }

  onChangeFilterText = e => {
    // let newFilterText = e.target.value;
    // let usersCount = null;
    // const usersToDisplay = this.props.users.filter(({ name }) =>
    //   name.toLowerCase().includes(this.state.filterText),
    // );
    // usersCount = usersToDisplay.length;

    this.setState({
      // filteredUsers: usersToDisplay,
      filterText: e.target.value,
      // namesIncludesCount: usersCount,
    });
  };

  render() {
    const usersToDisplay = this.props.users.filter(({ name }) =>
      name.toLowerCase().includes(this.state.filterText),
    );
    // const usersToDisplay = this.props.users.filter(user =>
    //   this.state.filterText.toLowerCase().includes(user.name.toLowerCase()),
    // );
    // const usersList = this.state.filterText === '' ? this.props.users : usersToDisplay;
    // const usersToDisplay = this.props.users.filter(user =>
    //   this.state.filterText.toLowerCase().includes(user.name.toLowerCase()),
    // );
    console.log(usersToDisplay);
    const namesCount = usersToDisplay.length;
    return (
      <div>
        <Filter
          onChange={this.onChangeFilterText}
          filterText={this.state.filterText}
          count={namesCount || 0}
        />
        <ul className="users">
          {usersToDisplay.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
