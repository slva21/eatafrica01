import React from "react";

const RenderButton = (props) => {
  if (props.order.status == 2) {
    return (
      <button
        className="btn btn-warning btn rounded-pill"
        onClick={() => props.history.push("/")}
        style={props.style}
      >
        Track
      </button>
    );
  } else if (props.order.orderRated == true) {
    return (
      <button
        className="btn btn-success btn rounded-pill"
        style={props.style}
        onClick={() => props.history.push("/")}
      >
        Re-Order
      </button>
    );
  } else if (props.order.orderRated == false) {
    return (
      <button
        className="btn btn-warning btn rounded-pill"
        style={props.style}
        onClick={() => props.history.push("/")}
      >
        Review
      </button>
    );
  } else {
    return null;
  }
};

export default RenderButton;
