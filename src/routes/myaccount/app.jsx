import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import MyOrders from "./myOrdersDash";
import OrdersApi from "../../server/orders";
import cartApi from "../../server/cartApi";
import MyOrdersArchive from "./myOrdersArchive";
import MyDetails from "./myDetails";

class App extends Component {
  state = {
    isAdmin: "",
    orders: [],
    currentOrder: "",
  };

  async componentDidMount() {
    try {
      localStorage.setItem("url", "/myaccount");
      const orders = await OrdersApi.getUserOrders(this.props.user._id);

      console.log(this.props);
      this.setState({ isAdmin: this.props.user.isAdmin, orders });
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
                <MyOrders
                  {...props}
                  orders={this.state.orders}
                  onReOrder={this.handleReOrder}
                />
              )}
            />
            <Route
              path="/myaccount/details"
              render={(props) => (
                <MyDetails
                  {...props}
                  orders={this.state.orders}
                  onReOrder={this.handleReOrder}
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
