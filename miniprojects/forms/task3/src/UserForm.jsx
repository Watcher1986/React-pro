import React, { Component } from 'react';

class UserForm extends Component {
  constructor(props) {
    super(props);
  }

  setRef = node => {
    this.formRef = node;
  };

  submitHandler = e => {
    e.preventDefault();
    const formData = [...new FormData(this.formRef)].reduce(
      (acc, [name, value]) => ({ ...acc, [name]: value }),
      {},
    );
    this.props.onSubmit(formData);
  };

  render() {
    return (
      <form ref={this.setRef} className="login-form" onSubmit={this.submitHandler}>
        <h1 className="form-title">Profile</h1>
        <div className="form-control">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-input" type="text" id="name" name="name" />
        </div>
        <div className="form-control">
          <label className="form-label" htmlFor="student">
            Student
          </label>
          <input className="form-input" type="checkbox" id="student" name="student" />
        </div>
        <div className="form-control">
          <label className="form-label" id="occupation" htmlFor="occupation">
            Occupation
          </label>
          <select name="occupation" className="form-input">
            <option value="london">London</option>
            <option value="new-york">New York</option>
            <option value="sidney">Sidney</option>
            <option value="berlin">Berlin</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="about" className="form-label" id="about">
            About
          </label>
          <textarea name="about" className="form-input" name="about" />
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default UserForm;
