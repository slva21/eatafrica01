import React, { Component } from "react";
import Api from "../server/createUserAccount";
import { toast } from "react-toastify";

class CreateAccount extends Component {
  state = {
    user: {
      email: "",
      password: "",
      name: "",
    },
  };

  handleChange = (e) => {
    let user = { ...this.state.user };
    user[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ user });
  };

  handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const token = await Api.createAccount(this.state.user);
      if (token) {
        localStorage.setItem("token", token);

        window.location = "/kitchens";
      }
    } catch (ex) {}
  };

  render() {
    return (
      <form className="mt-2" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            onChange={this.handleChange}
            type="text"
            className="form-control"
            id="name"
            aria-describedby="name"
            name="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            onChange={this.handleChange}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            onChange={this.handleChange}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
          />
        </div>
        <button type="submit" className="btn btn-success">
          CREATE ACCOUNT
        </button>
      </form>
    );
  }
}

export default CreateAccount;
