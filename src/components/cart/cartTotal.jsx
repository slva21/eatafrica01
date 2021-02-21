import React from "react";

const CartTotal = ({ cart }) => {
  return (
    <div className="d-flex justify-content-between pl-3 pr-3 mb-n2 bg-light pt-1 mt-2">
      <h5 style={{ fontFamily: "poppins" }}>Total</h5>
      <p>{`£${Number(cart.total).toFixed(2)}`}</p>
    </div>
  );
};

export default CartTotal;
