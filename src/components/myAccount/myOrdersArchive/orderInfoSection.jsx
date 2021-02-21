import React from "react";
import RenderButton from "../../../shares/renderButton";
import shares from "../../../shares/renderStatus";

const OrderInfoSection = (props) => {
  return (
    <div
      className="card-body"
      style={{
        marginTop: "-50px",
        backgroundColor: "white",
        zIndex: "1",
        position: "relative",
      }}
    >
      <div className=" d-flex  justify-content-between">
        <h5
          className="card-title pl-4 pr-4 pt-2 rounded-top "
          style={{
            marginTop: "-50px",
            backgroundColor: "white",
            width: "100%",
            textAlign: "center",
          }}
        >
          {props.order.kitchen.storeName}
        </h5>
      </div>

      <div className=" d-flex  justify-content-between">
        <h5 className="card-title" style={{ color: "lightGreen" }}>
          <small>Order - {shares.renderStatus(props.order.status)}</small>
        </h5>
        <h5 className="card-title">
          <small>{props.order.date}</small>
        </h5>
        <RenderButton
          order={props.order}
          {...props}
          style={{ backgroundColor: "#FBFBFB", marginTop: "-5px" }}
        />
      </div>
    </div>
  );
};

export default OrderInfoSection;
