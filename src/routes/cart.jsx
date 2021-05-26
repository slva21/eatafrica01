import React, { Component } from "react";

import Api from "../server/cartApi";
import orderApi from "../server/orders";
import stripeApi from "../server/stripe";
import Main from "../components/cart/main";
import { toast } from "react-toastify";
import { ElementsConsumer, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

class Cart extends Component {
  state = {
    user: "",
    cart: {
      kitchen: {
        storeName: "",
        storeNotes: [],
        _id: "",
      },
      items: [],
      deliveryNote: "",
      tip: "",
      total: 1,
    },
    itemTotals: [],
    isDelivery: "",
  };

  async componentDidMount() {
    try {
      //check if cart is valid........
      if (!this.props.user) {
        toast.error("Let's get you logged in first!", {
          position: "bottom-center",
          autoClose: 2500,
        });

        this.props.history.push("/login", { from: "/cart" });
        return;
      }
      localStorage.setItem("url", "/cart");
      const { cart } = await Api.getPopulatedCart(this.props.user._id);
      this.setState({ cart, user: this.props.user });
      await this.handleMenuVersionCheck(cart);
      this.calcMenuTotals();
    } catch (ex) {}
  }

  handleMenuVersionCheck = async (cart) => {
    cart.items.forEach(async (item) => {
      const menuId = item.menu._id._id; //leave here
      const kitchenId = cart.kitchen._id;
      if (item.menu.__v !== item.menu._id.__v) {
        toast.warn("Invalid item in cart detected", {
          position: "top-center",
          autoClose: 2500,
        });
        toast.error("Your cart has been reset", {
          position: "top-center",
          autoClose: 2500,
        });
        await Api.setCart(this.state.user._id, {
          total: 0,
          items: [],
          tip: 1,
          kitchen: null,
        });
        this.props.history.push(`/kitchens/${kitchenId}/${menuId}`);
      }
    });
  };

  calcMenuTotals = () => {
    let itemTotals = [...this.state.itemTotals];
    this.state.cart.items.forEach(({ menu }) => {
      let total = menu._id.price;
      menu.populatedOptions.forEach(({ price }) => {
        total = total + price;
      });
      itemTotals.push(total);
    });
    this.setState({ itemTotals });
  };

  handleDelete = async (menuId) => {
    toast.error("REMOVED FROM CART", {
      position: "top-center",
      autoClose: 1000,
    });
    const { cart } = await Api.deleteMenu(this.state.user._id, menuId);
    this.setState({ cart, itemTotals: [] });

    this.calcMenuTotals();
  };

  handleEdit = (menuId) => {
    this.props.history.push(
      `/kitchens/${this.state.cart.kitchen._id}/${menuId}`
    );
  };

  handleCheckout = async () => {
    const { stripe } = this.props;

    try {
      const items = this.state.cart.items.map(({ menu: m }) => ({
        menu: {
          _id: m._id._id,
          title: m._id.title,
          price: m._id.price,
          populatedOptions: m.populatedOptions,
          quantity: m.quantity,
          __v: m.__v,
        },
      }));

      const order = await orderApi.createOrder(
        this.state.user._id,
        this.state.cart.deliveryNote,
        items
        //use this api call to add the address of the user to the order...the address will be taken at the start before anything and will be stored in the app component..
      );
      const sessionId = await stripeApi.createSession(
        this.state.cart.kitchen._id,
        this.state.user._id,
        order._id
      );
      await orderApi.addSessionId(sessionId, order._id);
      await stripe.redirectToCheckout({
        sessionId,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  handleDeliveryNoteChange = (e) => {
    let cart = { ...this.state.cart };
    cart.deliveryNote = e.currentTarget.value;
    this.setState({ cart });
    const items = this.state.cart.items.map(({ menu: m }) => ({
      _id: m._id._id,
      populatedOptions: m.populatedOptions,
      quantity: m.quantity,
    }));
  };

  handleTipChange = async (amount) => {
    try {
      //the main app comonent needs to be updated so if the user leaves the page, the tips can be reset
      let appCart = { ...this.props.cart };
      appCart.tip = amount;
      this.props.onCartChange(appCart);
      //..........

      let cart = { ...this.state.cart };
      cart.tip = amount;
      cart.total = await Api.updateTip(this.state.user._id, amount);

      this.setState({ cart });
    } catch (ex) {
      console.log(ex.message);
    }
  };

  render() {
    if (this.state.cart.total < 0.1) {
      return (
        <div className="align-items-center min-vh-100 d-flex justify-content-center">
          <p1>Cart Empty</p1>
        </div>
      );
    }

    return (
      <Main
        onChange={this.handleDeliveryNoteChange}
        cart={this.state.cart}
        itemTotals={this.state.itemTotals}
        onDelete={this.handleDelete}
        onEdit={this.handleEdit}
        onCheckout={this.handleCheckout}
        onTipChange={this.handleTipChange}
      />
    );
  }
}

const InjectedCart = (props) => {
  return (
    <ElementsConsumer>
      {({ elements, stripe }) => (
        <Cart elements={elements} stripe={stripe} {...props} />
      )}
    </ElementsConsumer>
  );
};

const stripePromise = loadStripe(
  "pk_test_51HQJy6BM729ohvyifq4T8IZm1ZJZY8oF5G4z7c5wzAhUKZB9n0XrJt0mJLxzhHFsjvga4v6nezG4HUzvgZUE1z0x00Y8y4K6Jw"
);

const AppCart = (props) => {
  return (
    <Elements stripe={stripePromise}>
      <InjectedCart {...props} />
    </Elements>
  );
};

export default AppCart;
