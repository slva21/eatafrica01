import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBasket,
  faHome,
  faSearch,
  faUserAlt,
  faStore,
} from "@fortawesome/free-solid-svg-icons";

class MobileNav extends Component {
  state = {
    color: "",
  };

  renderMyKitchenMenu = () => {
    return (
      <NavLink className="navbar-brand mt-n2" to="/mykitchen/login">
        <FontAwesomeIcon icon={faUserAlt} size="lg" />
        <small
          className="d-block"
          style={{ fontSize: 10, textAlign: "center", color: "black" }}
        >
          Kitchen
        </small>
      </NavLink>
    );
  };

  render() {
    return (
      <Navbar
        bg="white"
        expand="sm"
        variant="light"
        fixed="bottom"
        className="pb-3  pl-4 pr-4"
      >
        {this.props.seller && !this.props.user._id && (
          <NavLink
            to="/logout"
            className="navbar-brand mt-n2"
            style={{ textDecoration: "none", color: "grey" }}
            activeStyle={{
              fontWeight: "bold",
              color: "gold",
              textDecoration: "none",
            }}
          >
            <FontAwesomeIcon icon={faHome} size="lg" />
            <small
              className="d-block"
              style={{ fontSize: 10, textAlign: "center", color: "black" }}
            >
              logout
            </small>
          </NavLink>
        )}
        {!this.props.seller && (
          <React.Fragment>
            <NavLink
              to="/kitchens"
              className="navbar-brand mt-n2"
              style={{ textDecoration: "none", color: "grey" }}
              activeStyle={{
                fontWeight: "bold",
                color: "gold",
                textDecoration: "none",
              }}
            >
              <FontAwesomeIcon icon={faHome} size="lg" />
              <small
                className="d-block"
                style={{ fontSize: 10, textAlign: "center", color: "black" }}
              >
                Home
              </small>
            </NavLink>
            <NavLink
              to="/search"
              className="navbar-brand mt-n2"
              style={{ textDecoration: "none", color: "grey" }}
              activeStyle={{
                fontWeight: "bold",
                color: "gold",
                textDecoration: "none",
              }}
            >
              <FontAwesomeIcon icon={faSearch} size="lg" />
              <small
                className="d-block"
                style={{ fontSize: 10, textAlign: "center", color: "black" }}
              >
                Search
              </small>
            </NavLink>
            <NavLink
              to="/cart"
              className="navbar-brand mt-n2"
              style={{ textDecoration: "none", color: "grey" }}
              activeStyle={{
                fontWeight: "bold",
                color: "gold",
                textDecoration: "none",
              }}
            >
              <FontAwesomeIcon icon={faShoppingBasket} size="lg" />
              <small
                className="d-block"
                style={{ fontSize: 10, textAlign: "center", color: "black" }}
              >
                Cart
              </small>
            </NavLink>
          </React.Fragment>
        )}

        {this.props.user._id && (
          <NavLink
            to="/myaccount/details"
            className="navbar-brand mt-n2"
            style={{ textDecoration: "none", color: "grey" }}
            activeStyle={{
              fontWeight: "bold",
              color: "gold",
              textDecoration: "none",
            }}
          >
            <FontAwesomeIcon icon={faUserAlt} size="lg" />
            <small
              className="d-block"
              style={{ fontSize: 10, textAlign: "center", color: "black" }}
            >
              Me
            </small>
          </NavLink>
        )}
        {!this.props.user._id && !this.props.seller && (
          <React.Fragment>
            <NavLink
              to="/login"
              className="navbar-brand mt-n2"
              style={{ textDecoration: "none", color: "grey" }}
              activeStyle={{
                fontWeight: "bold",
                color: "gold",
                textDecoration: "none",
              }}
            >
              <FontAwesomeIcon icon={faUserAlt} size="lg" />
              <small
                className="d-block"
                style={{ fontSize: 10, textAlign: "center", color: "black" }}
              >
                Login
              </small>
            </NavLink>
            <NavLink
              to="/mykitchen/login"
              className="navbar-brand mt-n2"
              style={{ textDecoration: "none", color: "grey" }}
              activeStyle={{
                fontWeight: "bold",
                color: "gold",
                textDecoration: "none",
              }}
            >
              <FontAwesomeIcon icon={faStore} size="lg" />
              <small
                className="d-block"
                style={{ fontSize: 10, textAlign: "center", color: "black" }}
              >
                Kitchen
              </small>
            </NavLink>
          </React.Fragment>
        )}
      </Navbar>
    );
  }
}

export default MobileNav;
