import React, { Component } from "react";
import Api from "../server/Login";

class KitchenLogin extends Component {
  state = {
    user: {
      email: "",
      password: "",
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
      const token = await Api.loginSeller(
        this.state.user.email,
        this.state.user.password
      );
      if (token) {
        localStorage.setItem("token", token);

        window.location = "/myKitchen/orders";
      }
    } catch (ex) {}
  };
  render() {
    return (
      <main>
        <div className="card" style={{ width: "21.5rem" }}>
          <img
            src="https://t3.ftcdn.net/jpg/02/73/53/32/240_F_273533205_nL07ay0novw8AizElXHVtRF7j3YkdjSH.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body d-flex justify-content-center">
            <p className="card-text text-xl-center">
              YOU REPRESENT YOUR COUNTRY!
            </p>
          </div>
        </div>
        <form className="mt-2" onSubmit={this.handleSubmit}>
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
            LOGIN
          </button>
        </form>
      </main>
    );
  }
}

export default KitchenLogin;
