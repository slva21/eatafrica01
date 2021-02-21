import React from "react";
import shares from "../../../../shares/renderStatus";
const OrderInfoSection = (props) => {
  return (
    <div
      className=" "
      style={{
        backgroundColor: "white",
        zIndex: "1",
        position: "relative",
      }}
    >
      <div className=" d-flex  justify-content-between">
        <h5 className="card-title" style={{ color: "lightGreen" }}>
          <small>Order - {shares.renderStatus(props.order.status)}</small>
        </h5>
        <h5 className="card-title">
          <small>{props.order.date}</small>
        </h5>
        <h5 className="card-title">
          <small>{props.order.time}</small>
        </h5>
      </div>
    </div>
  );
};

export default OrderInfoSection;
