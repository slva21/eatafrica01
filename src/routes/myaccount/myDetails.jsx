import React, { Component } from "react";

class MyDetails extends Component {
  state = {};
  render() {
    return (
      <button
        className="btn btn-warning"
        onClick={() => this.props.history.push("/logout")}
      >
        Logout
      </button>
    );
  }
}

export default MyDetails;
