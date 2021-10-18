import React, { Component } from 'react';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: this.props.filterText,
    };
  }

  // let usersList = {};
  // if (inputText !== '') {
  //   usersList = this.state.users.filter(user =>
  //     inputText.toLowerCase().includes(user.name.toLowerCase()),
  //   );
  //   newCount = usersList.length;
  // } else {
  //   usersList = this.state.users;
  // }
  onInputChange = e => {
    this.setState({
      inputValue: e.target.value,
    });
    // let newCount = null;
    // const inpValue = e.target.value;
    // let usersList = {};
    // const users = this.props.filterText;
    // console.log(users);
    // if (inpValue !== '') {
    //   usersList = users.filter(user => inpValue.toLowerCase().includes(user.name.toLowerCase()));
    //   newCount = usersList.length;
    // } else {
    //   usersList = users;
    // }
    this.props.onChange(e.target.value);
  };

  render() {
    return (
      <div className="filter">
        <span className="filter__count">{this.props.count}</span>
        <input
          type="text"
          className="filter__input"
          value={this.state.inputValue}
          onChange={this.onInputChange}
        />
      </div>
    );
  }
}

export default Filter;
