import React, { Component } from "react";
import orderApi from "../server/orders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

class OrderComplete extends Component {
  state = {
    order: {
      kitchen: "",
      customerId: "",
    },
  };

  componentWillMount() {
    if (!this.props.user) {
      toast.error("Hmm.. Could not find your name on my list", {
        position: "bottom-center",
        autoClose: 2500,
      });
      this.props.history.push("/login");
      return;
    }
  }

  async componentDidMount() {
    try {
      const order = await orderApi.getOrder(this.props.match.params.orderId);

      if (!order) {
        toast.error("Order Not Found!", {
          position: "bottom-center",
          autoClose: 2500,
        });
        this.props.history.push("/kitchens");

        return;
      }

      if (this.props.user && this.props.user._id != order.customerId._id) {
        toast.error("This account did not make that order!", {
          position: "bottom-center",
          autoClose: 2500,
        });
        this.props.history.push("/kitchens");
        return;
      }

      this.setState({ order });

      await orderApi.AddOrderToUser(this.state.order.customerId._id, order._id);
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <main className="mt-2 d-flex  justify-content-center">
        <div className="card  border-0" style={{ width: "540px" }}>
          <img
            src="https://i.pinimg.com/originals/71/dd/07/71dd077aee4f4c2dedfafc9ff4a3b5f8.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title" style={{ fontFamily: "poppins" }}>
              Order Successfull!
            </h5>
            <p className="card-text">
              Your Meal is being prepeared by{" "}
              <b>{this.state.order.kitchen.storeName}</b>. We'll let you know
              when its ready and on the way!
            </p>
            <p className="card-text" style={{ fontFamily: "poppins" }}>
              ORDER NUMBER: <b>{this.state.order.orderNumber}</b>
            </p>
            <a href="#" className="btn btn-primary">
              Order Again?
            </a>
            <a href="#" className="btn btn-success ml-2">
              Share this! <FontAwesomeIcon icon={faShare} />
            </a>
          </div>
        </div>
      </main>
    );
  }
}

export default OrderComplete;
