import React, { Component } from "react";
import config from "../../config.json";
import OrdersApi from "../../server/orders";
import Main from "../../components/myAccount/myOrdersArchive/main";

class MyOrdersArchive extends Component {
  state = {
    order: {
      items: [],
      kitchen: {
        banner: "",
      },
    },
    itemTotals: [],
  };

  calcMenuTotals = (order) => {
    let itemTotals = [...this.state.itemTotals];
    order.items.forEach(({ menu }) => {
      let total = menu.price;
      menu.populatedOptions.forEach(({ price }) => {
        total = total + price;
      });
      itemTotals.push(total);
    });
    return itemTotals;
  };

  async componentDidMount() {
    try {
      if (this.props.orders.length != 0) {
        //no need to make an APi call
        let order = this.props.orders.find(
          (m) => m._id == this.props.match.params.id
        );

        order.kitchen.banner = `${config.apiEndpoint}/sellers/banner/${order.kitchen._id}`;
        const itemTotals = this.calcMenuTotals(order);
        this.setState({ order, itemTotals });

        return;
      }
      // make a call

      let order = await OrdersApi.fetchOrder(this.props.match.params.id);
      order.kitchen.banner = `${config.apiEndpoint}/sellers/banner/${order.kitchen._id}`;
      const itemTotals = this.calcMenuTotals(order);
      this.setState({ order, itemTotals });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <Main
        order={this.state.order}
        {...this.props}
        itemTotals={this.state.itemTotals}
        onReOrder={this.props.onReOrder}
      />
    );
  }
}

export default MyOrdersArchive;
