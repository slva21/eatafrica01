import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUtensils } from "@fortawesome/free-solid-svg-icons";

class NavBar extends Component {
  render() {
    return (
      <Navbar
        bg="light"
        expand="sm"
        variant="light"
        fixed="bottom"
        className="pb-4 "
      >
        <Link to="/cart" className="navbar-brand">
          <FontAwesomeIcon icon={faUtensils} />
          <small> </small>
        </Link>
        <Link to="/kitchens" className="navbar-brand ml-3">
          EAT AFRICA
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink className="nav-item nav-link" to="/kitchens">
              Kitchens
            </NavLink>
            <NavLink className="nav-item nav-link" to="/myaccount/faq">
              My Account
            </NavLink>
            {!this.props.seller && (
              <NavLink className="nav-item nav-link" to="/mykitchen/login">
                My Kitchen
              </NavLink>
            )}
            {!this.props.user && (
              <NavLink className="nav-item nav-link" to="/login">
                Login
              </NavLink>
            )}
            {this.props.user && (
              <NavLink className="nav-item nav-link" to="/logout">
                Logout
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
