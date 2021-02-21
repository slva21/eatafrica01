import React from "react";
import Navbar from "react-bootstrap/Navbar";

const CheckoutBtn = ({ onCheckout }) => {
  return (
    <Navbar bg="light" expand="sm" variant="light" sticky="bottom">
      <button
        type="button"
        className="btn btn-success btn-lg btn-block"
        onClick={onCheckout}
        style={{ fontFamily: "poppins" }}
      >
        CHECKOUT
      </button>
    </Navbar>
  );
};

export default CheckoutBtn;
