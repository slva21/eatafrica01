import React, { Component } from "react";
import Main from "../../components/sellers/orders/ordersArchive/main";
import OrdersApi from "./../../server/orders";
import { toast } from "react-toastify";

class OrderArchive extends Component {
  state = {
    order: {
      items: [],
      kitchen: {
        banner: "",
      },
      ETA: {
        time: "",
        date: "",
      },
    },

    itemTotals: [],
  };

  async componentDidMount() {
    try {
      let order = { ...this.state.order };
      if (this.props.orders.length != 0) {
        console.log("here");
        //no need to make an APi call
        order = this.props.orders.find(
          (m) => m._id == this.props.match.params.id
        );
        if (!order.ETA) order.ETA = { date: "", time: "" };

        const itemTotals = this.calcMenuTotals(order);
        this.setState({ order, itemTotals });

        return;
      }
      // make a call

      order = await OrdersApi.fetchOrder(this.props.match.params.id);
      if (!order.ETA) order.ETA = { date: "", time: "" };

      const itemTotals = this.calcMenuTotals(order);
      this.setState({ order, itemTotals });
    } catch (error) {
      console.log(error);
    }
  }

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

  handleETAChange = async (e) => {
    let order = { ...this.state.order };
    order.ETA[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ order });
  };

  handleSaveETA = async () => {
    try {
      toast.success(
        `Great! i'll let ${this.state.order.customerId.name} know now`,
        {
          position: "top-right",
          autoClose: 2000,
        }
      );
      console.log(1);
      await OrdersApi.addETA(
        this.props.match.params.id,
        this.state.order.ETA.date,
        this.state.order.ETA.time
      );
      console.log(2);
    } catch (ex) {
      console.log(ex);
    }
  };

  render() {
    return (
      <Main
        onETAChange={this.handleETAChange}
        onETASave={this.handleSaveETA}
        etaDate={this.state.order.ETA.date}
        etaTime={this.state.order.ETA.time}
        itemTotals={this.state.itemTotals}
        order={this.state.order}
        {...this.props}
      />
    );
  }
}

export default OrderArchive;
