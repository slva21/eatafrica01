import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStoreAlt } from "@fortawesome/free-solid-svg-icons";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
class SellersNav extends Component {
  state = {};
  render() {
    return (
      <Navbar
        className="ml-n3 mr-n3 mt-n1 pl-5 "
        variant="light"
        bg="white"
        sticky="top"
      >
        <Nav className="justify-content-between" fill variant="tabs">
          <NavLink className="nav-item nav-link mr-4" to="/myKitchen/menu">
            MENU
          </NavLink>
          <NavLink className="nav-item nav-link mr-4" to="/myKitchen/edit">
            EDIT
          </NavLink>
          <NavLink className="nav-item nav-link mr-4" to="/myKitchen/orders">
            ORDERS
          </NavLink>
        </Nav>
        <Link className="navbar-brand " to="/myKitchen/view">
          <FontAwesomeIcon icon={faStoreAlt} size="sm" color="gold" />
        </Link>
      </Navbar>
    );
  }
}

export default SellersNav;
