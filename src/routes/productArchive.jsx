import React, { Component } from "react";

import Main from "../components/productArchive/main";
import Api from "../server/menuApi";
import API from "../server/cartApi";
import { toast } from "react-toastify";

class ProductArchive extends Component {
  state = {
    currentProduct: {
      options: [],
    },
    selectedOptions: [],
    userId: "",
    isMenuInCart: "",
    total: "",
  };

  async componentDidMount() {
    if (this.props.userId === undefined) {
      toast.error("Let's get you logged in first!", {
        position: "bottom-center",
        autoClose: 2500,
      });
      this.props.history.push("/login", {
        from: "productArchive",
        url: this.props.location.pathname,
      });
      return;
    }
    try {
      await this.resetTip();
      let currentProduct = "";
      if (this.props.kitchens.length == 0) {
        currentProduct = await Api.getMenu(this.props.match.params.productId);
      } else {
        const currentKitchen = this.props.kitchens.find(
          ({ sellerInfo: m }) => m._id == this.props.match.params.sellerId
        );
        console.log(currentKitchen);

        currentProduct = currentKitchen.menu.find(
          (m) => m._id == this.props.match.params.productId
        );
      }

      const userId = this.props.userId;

      const { selectedOptionsId, res } = await API.getCart(
        userId,
        this.props.match.params.productId
      );
      console.log(res);

      const total = res.cart.total;

      const selectedOptions = selectedOptionsId.map((id) => ({
        _id: id,
      }));

      //finding the current quantity
      const menu = res.cart.items.find(
        ({ menu }) => menu._id === this.props.match.params.productId
      );
      let quantity;
      if (!menu) {
        quantity = 1;
      } else {
        quantity = menu.menu.quantity;
      }

      this.props.updateQuantity(quantity);

      //..............................................

      this.props.onCartChange(res.cart); //this sends the cart object up to the app component

      this.isMenuInCart();
      this.setState({ currentProduct, userId, selectedOptions, total });
    } catch (ex) {
      console.log(ex);
    }
  }

  resetTip = async () => {
    try {
      if (this.props.cart.tip !== 1) {
        toast.success("I removed the tip for now", {
          position: "top-center",
          autoClose: 2500,
        });
        const total = await API.updateTip(this.props.userId, 0);
        this.setState({ total });
      }
    } catch (ex) {
      console.log(ex.message);
    }
  };

  handleSelect = async (option) => {
    let initialState = [...this.state.selectedOptions];
    try {
      let selectedOptions = [...this.state.selectedOptions];
      if (selectedOptions.find((m) => m._id === option._id)) {
        const filtered = selectedOptions.filter((m) => m._id !== option._id);

        //  updating the cart........................
        const { cart } = await API.updateCart({
          menuId: this.props.match.params.productId,
          userId: this.state.userId,
          optionId: option._id,
        });

        this.props.onCartChange(cart);

        this.setState({ total: cart.total, selectedOptions: filtered });

        console.log(cart.total);
        return;
      }

      //if option is not in the array
      selectedOptions.push(option);
      //updating the cart..................................

      const { cart } = await API.updateCart({
        menuId: this.props.match.params.productId,
        userId: this.state.userId,
        optionId: option._id,
      });
      this.setState({ selectedOptions, total: cart.total });
      console.log(cart.total);
      this.props.onCartChange(cart);
    } catch (ex) {
      this.setState({ selectedOptions: initialState });
    }
  };

  isMenuInCart = async () => {
    let isMenuInCart = this.props.cart.items.find(
      ({ menu }) => menu._id === this.props.match.params.productId
    );
    if (!isMenuInCart) {
      isMenuInCart = false;
    } else {
      isMenuInCart = true;
    }
    this.setState({ isMenuInCart });
  };

  handleAddToCart = async () => {
    toast(`${this.state.currentProduct.title} it is!`, {
      position: "top-right",
      autoClose: 2000,
    });
    const { cart } = await API.updateCart({
      menuId: this.props.match.params.productId,
      menu__v: this.state.currentProduct.__v,
      userId: this.state.userId,
    });

    this.props.onCartChange(cart);
    this.isMenuInCart();
    this.setState({ total: cart.total });
  };

  onDecrement = async () => {
    await this.props.onDecrement(this.props.match.params.productId);
    const { res } = await API.getCart(
      this.state.userId,
      this.props.match.params.productId
    );
    this.setState({ total: res.cart.total });
  };

  onIncrement = async () => {
    await this.props.onIncrement(this.props.match.params.productId);
    const { res } = await API.getCart(
      this.state.userId,
      this.props.match.params.productId
    );
    this.setState({ total: res.cart.total });
  };

  handleProceedToCheckout = () => {
    this.props.history.push("/cart");
  };

  render() {
    return (
      <Main
        currentProduct={this.state.currentProduct}
        onSelect={this.handleSelect}
        selectedOptions={this.state.selectedOptions}
        onAddToCart={this.handleAddToCart}
        onProceedToCheckout={this.handleProceedToCheckout}
        isMenuInCart={this.state.isMenuInCart}
        quantity={this.props.quantity}
        onIncrement={this.onIncrement}
        onDecrement={this.onDecrement}
        total={this.state.total}
      />
    );
  }
}

export default ProductArchive;
