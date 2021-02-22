import React, { Component } from "react";
import "./index.css";
import NavBar from "./components/Navbar";
import KitchenDash from "./routes/KitchesDash";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import KitchenArchive from "./routes/kitchenArchive";
import ProductArchive from "./routes/productArchive";
import Login from "./routes/login";
import jwtDecode from "jwt-decode";
import Logout from "./routes/logout";
import Cart from "./routes/cart";
import API from "./server/cartApi";
import "react-toastify/dist/ReactToastify.css";
import MyKitchen from "./routes/sellers/App";
import KitchenLogin from "./routes/kitchenLogin";
import CreateAccount from "./routes/createAccount";
import AppCart from "./routes/cart";
import OrderComplete from "./routes/orderComplete";
import http from "./server/httpConfig";
import SellersApi from "./server/sellersAPI";
import AppMyAccount from "./routes/myaccount/app";
import MobileNav from "./mobileNav";
import CreateKitchen from "./routes/sellers/createKitchen";

class App extends Component {
  state = {
    user: "",
    cart: {},
    quantity: "1",
    seller: "",
    location: {
      postcode: "",
      state: "",
      state_district: "",
      city: "",
      continent: "",
      suburb: "",
    },
    kitchens: [],
  };

  UNSAFE_componentWillMount() {
    try {
      const jwt = localStorage.getItem("token");
      const decoded = jwtDecode(jwt);
      const user = decoded.userInfo;
      const cart = decoded.cart;
      const seller = decoded.seller;

      this.setState({
        user,
        cart,
        seller,
      });
    } catch (error) {}
  }

  async componentDidMount() {
    try {
      const kitchens = await SellersApi.getSellers();
      this.setState({ kitchens });
      // await this.getLocation();
    } catch (err) {}
  }

  //.................................location... this needs to be here becuase you cant return in a cb function ...
  getCooo = async (position) => {
    try {
      console.log("here");
      const apikey = "ead74a4a21334df0a5fc82c265a20ba1"; // opencage
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const api_url = "https://api.opencagedata.com/geocode/v1/json";

      const request_url =
        api_url +
        "?" +
        "key=" +
        apikey +
        "&q=" +
        encodeURIComponent(latitude + "," + longitude) +
        "&pretty=1" +
        "&no_annotations=1";

      // see full list of required and optional parameters:
      // https://opencagedata.com/api#forward
      const { data } = await http.get(request_url);

      const location = data.results[0].components;

      this.setState({ location });

      console.log(position);
    } catch (error) {
      console.log(error.message);
    }
  };

  failed = (err) => {
    console.log(err);
  };

  getLocation = async function () {
    navigator.geolocation.getCurrentPosition(this.getCooo, this.failed);
  };

  //.......................location <ends...................................

  updateQuantity = (quantity) => {
    this.setState({
      quantity,
    });
  };

  handleCartChange = (cart) => {
    this.setState({
      cart,
    });
  };

  handleIncrement = async (productId) => {
    let quantity = this.state.quantity;
    quantity = await API.handleQuantityChange(
      "+",
      productId,
      this.state.user._id
    );

    this.setState({
      quantity,
    });
  };

  handleDecrement = async (productId) => {
    let quantity = this.state.quantity;
    quantity = await API.handleQuantityChange(
      "-",
      productId,
      this.state.user._id
    );

    this.setState({
      quantity,
    });
  };

  render() {
    return (
      <div>
        <ToastContainer />
        <main className="container-fluid">
          <Switch>
            <Route
              path="/myaccount"
              render={(props) => (
                <AppMyAccount {...props} user={this.state.user} />
              )}
            />
            <Route
              path="/kitchens/:sellerId/:productId"
              render={(props) => (
                <ProductArchive
                  {...props}
                  kitchens={this.state.kitchens}
                  userId={this.state.user._id}
                  onCartChange={this.handleCartChange}
                  cart={this.state.cart}
                  quantity={this.state.quantity}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                  updateQuantity={this.updateQuantity}
                />
              )}
            />{" "}
            <Route path="/mykitchen/login" component={KitchenLogin} />{" "}
            <Route
              path="/mykitchen"
              render={(props) => (
                <MyKitchen {...props} seller={this.state.seller} />
              )}
            />
            <Route
              path="/kitchens/:id"
              render={(props) => (
                <KitchenArchive {...props} kitchens={this.state.kitchens} />
              )}
            />
            <Route
              path="/kitchens"
              render={(props) => (
                <KitchenDash
                  {...props}
                  user={this.state.user}
                  kitchens={this.state.kitchens}
                />
              )}
            />
            <Route
              path="/cart"
              render={(props) => (
                <AppCart
                  {...props}
                  user={this.state.user}
                  cart={this.state.cart}
                  onCartChange={this.handleCartChange}
                />
              )}
            />
            <Route
              path="/complete/:orderId"
              render={(props) => (
                <OrderComplete {...props} user={this.state.user} />
              )}
            />
            <Route path="/user/createAccount" component={CreateAccount} />
            <Route
              path="/createkitchen"
              render={(props) => <CreateKitchen />}
            />
            <Route path="/login" component={Login} />
            <Route component={Login} path="/not-found" />
            <Route path="/logout" component={Logout} />
            <Redirect to="/not-found" />
          </Switch>{" "}
        </main>{" "}
        {/* <NavBar user={this.state.user} seller={this.state.seller} />{" "} */}
        <MobileNav user={this.state.user} seller={this.state.seller} />
      </div>
    );
  }
}

export default App;
