import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import MyOrders from "./myOrdersDash";
import OrdersApi from "../../server/orders";
import cartApi from "../../server/cartApi";
import MyOrdersArchive from "./myOrdersArchive";
import MyDetails from "./myDetails";
import UserApi from "../../server/usersAPi";
import { toast } from "react-toastify";

class App extends Component {
  state = {
    isAdmin: "",
    orders: [],
    currentOrder: "",
    userInfo: {
      name: "",
      phone: "",
      addresses: [],
    },
  };

  async componentDidMount() {
    try {
      localStorage.setItem("url", "/myaccount");
      const orders = await OrdersApi.getUserOrders(this.props.user._id);

      console.log(this.props);
      this.setState({
        isAdmin: this.props.user.isAdmin,
        orders,
        userInfo: this.props.user,
      });
    } catch (error) {}
  }

  handleReOrder = async (userId, order) => {
    //refactoring....
    try {
      order.kitchen = order.kitchen._id;
      order.note = order.deliveryNote;
      order.items.forEach(({ menu }) => {
        menu._id = menu._id._id;
      });

      await cartApi.setCart(userId, order);
      this.props.history.push("/cart");
    } catch (error) {
      alert(error.message);
    }
  };

  handleChangeUserInfo = (e) => {
    let userInfo = { ...this.state.userInfo };
    userInfo[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ userInfo });
  };

  handleSaveUser = async () => {
    const res = await UserApi.editUser({
      userId: this.state.userInfo._id,
      name: this.state.userInfo.name,
      phone: this.state.userInfo.phone,
    });

    if (res == "Saved") {
      toast.success("Got it! Re-login to see changes", {
        position: "top-center",
        autoClose: 2500,
      });
    }
  };

  render() {
    return (
      <main className="mt-2">
        <Nav
          variant="tabs"
          fill
          defaultActiveKey="#first"
          className="border-bottom"
        >
          <NavLink
            style={{ color: "black" }}
            className="nav-item nav-link border-right"
            to="/myaccount/orders"
            activeStyle={{
              backgroundColor: "gold",
              color: "white",
            }}
          >
            My Orders
          </NavLink>
          <NavLink
            className="nav-item nav-link ml-n2 border-right"
            to="/myaccount/details"
            style={{ color: "black" }}
            activeStyle={{
              backgroundColor: "gold",
              color: "white",
            }}
          >
            My Details
          </NavLink>
          <NavLink
            className="nav-item nav-link"
            to="/myaccount/FAQ"
            style={{ color: "black" }}
            activeStyle={{
              backgroundColor: "gold",
              color: "white",
            }}
          >
            FAQ
          </NavLink>
          {this.state.isAdmin && (
            <NavLink
              className="nav-item nav-link"
              to="/myaccount/address"
              style={{ color: "black" }}
              activeStyle={{
                backgroundColor: "gold",
                color: "white",
              }}
            >
              Admin
            </NavLink>
          )}
        </Nav>
        <div>
          <Switch>
            <Route
              path="/myaccount/orders/:id"
              render={(props) => (
                <MyOrdersArchive
                  {...props}
                  orders={this.state.orders}
                  onReOrder={this.handleReOrder}
                />
              )}
            />
            <Route
              path="/myaccount/orders"
              render={(props) => (
                <MyOrders {...props} orders={this.state.orders} />
              )}
            />
            <Route
              path="/myaccount/details"
              render={(props) => (
                <MyDetails
                  {...props}
                  userInfo={this.state.userInfo}
                  orders={this.state.orders}
                  onUserInfoChange={this.handleChangeUserInfo}
                  onSaveUser={this.handleSaveUser}
                />
              )}
            />
          </Switch>
        </div>
      </main>
    );
  }
}

export default App;
