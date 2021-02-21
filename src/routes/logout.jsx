import React, { Component } from "react";

class Logout extends Component {
  componentDidMount() {
    localStorage.removeItem("token");
    window.location = "/kitchens";
  }

  render() {
    return null;
  }
}

export default Logout;
