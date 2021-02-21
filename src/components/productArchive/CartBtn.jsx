import React from "react";
import Navbar from "react-bootstrap/Navbar";

const CartBtn = (props) => {
  return (
    <button
      onClick={props.onProceedToCheckout}
      type="button"
      className="btn btn-success btn-lg btn-block "
      style={{ width: "90%" }}
    >
      PROCEED TO CART
    </button>
  );
};

export default CartBtn;
