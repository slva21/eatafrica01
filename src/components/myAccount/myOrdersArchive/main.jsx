import React from "react";
import { useSpring, animated } from "react-spring";
import config from "../../../config.json";
import OrderInfoSection from "./orderInfoSection";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt, faCoins, faTruck } from "@fortawesome/free-solid-svg-icons";

import RenderItems from "./renderItems";

const Main = (props) => {
  const propss = useSpring({
    config: { mass: 1, tension: 150, friction: 14, clamp: false },
    to: { marginTop: 0, opacity: 1 },
    from: { marginTop: 500, opacity: 1 },
  });

  return (
    <animated.div style={propss}>
      <main className="mt-2">
        <img
          className="  card-img-top mr-n2 "
          alt="Sellers Banner"
          src={props.order.kitchen.banner}
          style={{ height: "220px" }}
        />
        <OrderInfoSection {...props} />
        <div>
          <div className=" d-flex  justify-content-between">
            <h5 style={{ fontSize: "17px" }}>
              YOUR ORDER -<small>#{props.order.orderNumber}</small>
            </h5>
            {/* Add addition element in row here */}
          </div>
          <RenderItems order={props.order} itemTotals={props.itemTotals} />
          <div className="border-top">
            <h5 style={{ fontSize: "15px" }} className="mt-2">
              <FontAwesomeIcon icon={faTruck} color="" /> DELIVERY FEE : £0.00
            </h5>
            <h5 style={{ fontSize: "15px" }} className="mt-4">
              <FontAwesomeIcon icon={faCoins} color="gold" /> YOU TIPPED : £
              {Number(
                props.order.total - props.order.total / props.order.tip
              ).toFixed(2)}
            </h5>
          </div>
          <div className="border-top">
            <h5 className="mt-4">
              <FontAwesomeIcon icon={faReceipt} color="" /> TOTAL: £
              {Number(props.order.total).toFixed(2)}
            </h5>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <button
              className="btn btn-light btn-dark mb-4"
              style={{ width: "100%", fontFamily: "poppins" }}
              onClick={() =>
                props.onReOrder(props.order.customerId, props.order)
              }
            >
              ORDER AGAIN
            </button>
          </div>
        </div>
      </main>
    </animated.div>
  );
};

export default Main;
