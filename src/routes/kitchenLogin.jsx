import React, { Component } from "react";
import Main from "../components/kitchenLogin/main.jsx";
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
    return <Main onChange={this.handleChange} onSubmit={this.handleSubmit} />;
  }
}

export default KitchenLogin;
