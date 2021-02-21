import React from "react";

const Counter = ({ quantity, onIncrement, onDecrement }) => {
  return (
    <div
      className="d-flex justify-content-center  bg-dark ml-n4 mr-n4"
      style={{ width: "100%" }}
    >
      <button
        type="button"
        className="btn  btn-dark ml-2"
        onClick={onDecrement}
        disabled={quantity === 0}
      >
        -
      </button>
      <button disabled type="button" className="btn btn-sm btn-dark ml-1">
        {quantity}
      </button>
      <button
        type="button"
        className="btn btn-dark btn ml-1"
        onClick={onIncrement}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
