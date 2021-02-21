import React from "react";
import Navbar from "react-bootstrap/Navbar";

const AddToCartBtn = (props) => {
  return (
    <button
      onClick={props.onAddToCart}
      type="button"
      className="btn btn-success btn-lg btn-block  mt-3"
      style={{ width: "90%" }}
    >
      ADD TO CART
    </button>
  );
};

export default AddToCartBtn;
