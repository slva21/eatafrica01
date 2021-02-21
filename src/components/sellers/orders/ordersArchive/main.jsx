import React from "react";
import { useSpring, animated } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt, faCoins, faTruck } from "@fortawesome/free-solid-svg-icons";
import OrderInfoSection from "./orderinfosection";
import RenderItems from "../../../myAccount/myOrdersArchive/renderItems";
import { Fragment } from "react";
import RenderETAsection from "./renderETAsection";
import RenderCustomerInfoSection from "./renderCustomerInfo";

const Main = (props) => {
  const propss = useSpring({
    config: { mass: 1, tension: 150, friction: 14, clamp: false },
    to: { marginTop: 0, opacity: 1 },
    from: { marginTop: 500, opacity: 1 },
  });

  return (
    <animated.div style={propss}>
      <main className="mt-2">
        <OrderInfoSection {...props} order={props.order} />
        <div>
          <div className=" d-flex flex-column  justify-content-between">
            <h5 style={{ fontSize: "17px" }}>
              ORDER -<small>#{props.order.orderNumber}</small>
            </h5>
            <h5 style={{ fontSize: "17px" }} className="pt-2">
              Delivery Note: <small> "{props.order.deliveryNote}"</small>
            </h5>
            {/* Add addition element in row here */}
          </div>
          <RenderItems order={props.order} itemTotals={props.itemTotals} />
          <div className="border-top">
            <h5 style={{ fontSize: "15px" }} className="mt-2">
              <FontAwesomeIcon icon={faTruck} color="" /> DELIVERY FEE : £0.00
            </h5>
            <h5 style={{ fontSize: "15px" }} className="mt-4">
              <FontAwesomeIcon icon={faCoins} color="gold" /> THEY TIPPED : £
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
          <RenderCustomerInfoSection />

          <div className="d-flex justify-content-center mt-4 flex-column">
            {props.order.status < 3 && (
              <RenderETAsection
                order={
                  props.order // if the status is still just paid
                }
                onETAChange={props.onETAChange}
                etaDate={props.etaDate}
                etaTime={props.etaTime}
                onETASave={props.onETASave}
              />
            )}

            {props.order.status != 4 && (
              <button
                className="btn btn-warning mt-2"
                style={{ width: "100%", fontFamily: "poppins", color: "white" }}
              >
                REFUND ORDER
              </button>
            )}
          </div>
        </div>
      </main>
    </animated.div>
  );
};

export default Main;
