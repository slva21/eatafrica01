import React, { Component } from "react";
import Main from "../../components/myAccount/myDetails/main";

class MyDetails extends Component {
  state = {};

  handleLogoutUser = () => {
    this.props.history.push("/logout");
  };
  render() {
    return (
      <Main
        onLogoutUser={this.handleLogoutUser}
        {...this.props.userInfo}
        onUserInfoChange={this.props.onUserInfoChange}
        onSaveUser={this.props.onSaveUser}
        onPushToAddresses={this.props.onPushToAddresses}
      />
    );
  }
}

export default MyDetails;
