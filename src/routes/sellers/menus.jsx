import React, { Component } from "react";
import Main from "../../components/sellers/menus/main";

class Menus extends Component {
  state = {};

  render() {
    return <Main menu={this.props.menu} onEditClick={this.props.onEditClick} />;
  }
}

export default Menus;
