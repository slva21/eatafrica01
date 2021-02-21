import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import renderStatus from "../../../shares/renderStatus";
import RenderButton from "../../../shares/renderButton";
import config from "../../../config.json";

const Main = (props) => {
  const propss = useSpring({
    config: { mass: 1, tension: 150, friction: 14, clamp: false },
    to: { marginLeft: 0, opacity: 1 },
    from: { marginLeft: -500, opacity: 1 },
  });

  return (
    <animated.div style={propss}>
      {props.orders.map((m) => (
        <div key={m._id}>
          <div
            className=" border-top-0 border-bottom  mt-2 ml-2"
            style={{ maxWidth: "540px" }}
          >
            <div className="d-flex justify-content-between ml mr-2">
              <Link
                to={`/myaccount/orders/` + m._id}
                style={{
                  color: "inherit",
                  textDecoration: "inherit",
                }}
              >
                <div className="d-flex justify-content-between ">
                  <img
                    src={
                      config.apiEndpoint + "/sellers/banner/" + m.kitchen._id
                    }
                    alt="..."
                    className="rounded mt-4"
                    style={{ width: "80px", height: "60px" }}
                  />
                  <div className="card-body mr-n4">
                    <h5
                      className="card-title"
                      style={{ fontFamily: "poppins" }}
                    >
                      {m.kitchen.storeName}
                    </h5>
                    <h5
                      className="card-title mt-n2"
                      style={{ fontFamily: "poppins" }}
                    >
                      <small className="text-muted">{`£${Number(
                        m.total
                      ).toFixed(2)}`}</small>{" "}
                      <small className="text-muted">{`(${m.items.length}-${
                        m.items.length == 1 ? "item" : "items"
                      })`}</small>
                    </h5>

                    <h5
                      className="card-title mt-n2"
                      style={{ fontFamily: "poppins", color: "lightgreen" }}
                    >
                      <small className="">
                        {renderStatus.renderStatus(m.status)}
                      </small>{" "}
                      -{" "}
                      <small
                        className="text-muted mt-n2"
                        style={{ fontSize: "13px" }}
                      >
                        {m.date}
                      </small>
                    </h5>
                  </div>
                </div>
              </Link>
              <div className="d-flex ">
                <RenderButton
                  order={m}
                  {...props}
                  style={{ height: "40px", marginTop: "50%" }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </animated.div>
  );
};

export default Main;
