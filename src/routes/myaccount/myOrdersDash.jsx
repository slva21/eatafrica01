import React, { Component } from "react";
import Main from "../../components/myAccount/myOrders/main";

class MyOrders extends Component {
  //this componet gets its state from the myAccountApp component
  state = {
    //from props
  };

  //this is used instrad of cdm to set the state becuase this child compontent will mount before the main component
  componentDidUpdate(prevProps, PrevState, ss) {
    if (prevProps.orders != this.props.orders) {
      console.log("MyDash ,cdu");
      //if statement is required to prevent infinite loop
      this.setState({ orders: this.props.orders });
    }
  }

  render() {
    return <Main {...this.props} />;
  }
}

export default MyOrders;
