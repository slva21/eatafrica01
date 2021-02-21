import React, { Component } from "react";
import Main from "../../components/sellers/orders/ordersDash/main";
import ordersApi from "../../server/orders";

class OrdersDash extends Component {
  state = {
    orders: [],
  };

  async componentDidMount() {
    try {
      let orders = [];
      if (this.props.orders.length == 0) {
        orders = await ordersApi.getSellersOrders(this.props.sellerId);
      } else {
        orders = this.props.orders;
      }
      this.setState({ orders });
    } catch (error) {}
  }

  render() {
    return <Main orders={this.state.orders} {...this.props} />;
  }
}

export default OrdersDash;
