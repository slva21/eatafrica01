import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import RenderDashRating from "./renderRating";
import DashInfo from "./renderDashInfo";

const RenderKitchens = ({ sellers }) => {
  const propss = useSpring({
    config: { mass: 1, tension: 150, friction: 14, clamp: false },
    to: { marginTop: 0, opacity: 1 },
    from: { marginTop: 500, opacity: 1 },
  });

  return (
    <div className="card mt-2 border-0" style={{ width: "540px" }}>
      <animated.div style={propss}>
        {sellers.map(({ sellerInfo }) => (
          <React.Fragment key={sellerInfo._id}>
            <Link to={`/kitchens/${sellerInfo._id}`}>
              <img
                className="card-img-top rounded"
                alt="Sellers Banner"
                src={sellerInfo.banner}
                style={{ height: "215px", width: "100%" }}
              ></img>
            </Link>
            <div className=" mt-2 mb-3 ">
              <h5 className="card-title  " style={{ fontSize: 18 }}>
                {sellerInfo.storeName}{" "}
                <small
                  className=""
                  style={{ color: "gold", fontFamily: "poppins" }}
                >
                  - Africa's Choice
                </small>
              </h5>
              <div className=" d-flex mt-n2 justify-content-between">
                <RenderDashRating
                  rating={sellerInfo.stars}
                  numberOfReviews={sellerInfo.ratingAverage.numberOfReviews}
                />
                <DashInfo info={sellerInfo} />
              </div>
            </div>
          </React.Fragment>
        ))}
      </animated.div>
    </div>
  );
};

export default RenderKitchens;
