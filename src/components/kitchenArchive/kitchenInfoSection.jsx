import React, { Component } from "react";
import RenderRating from "./renderRating";
import RenderInfo from "./renderInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { useSpring, animated } from "react-spring";

const KitchenInfoSection = ({ currentKitchenInfo: sellerInfo }) => {
  const propss = useSpring({
    config: { mass: 1, tension: 150, friction: 14, clamp: false },
    to: { marginTop: 0, opacity: 1 },
    from: { marginTop: 500, opacity: 0 },
  });

  const propsss = useSpring({
    config: { mass: 1, tension: 150, friction: 14, clamp: false },
    to: { marginTop: 0, opacity: 1 },
    from: { marginTop: -500, opacity: 0 },
  });
  return (
    <main>
      <animated.div style={propsss}>
        <img
          className="  card-img-top  "
          alt="Sellers Banner"
          src={sellerInfo.banner}
          style={{
            height: "220px",

            width: "100%",
          }}
        />
      </animated.div>

      <div
        className="card-body"
        style={{
          marginTop: "-50px",
          backgroundColor: "white",
          zIndex: "1",
          position: "relative",
        }}
      >
        <animated.div style={propss}>
          <div
            className=" d-flex  justify-content-between "
            style={{ backgroundColor: "white" }}
          >
            <h5
              className="card-title pl-4 pr-4 pt-2 rounded-top "
              style={{
                marginTop: "-50px",
                backgroundColor: "white",
                width: "100%",
                textAlign: "center",
              }}
            >
              {sellerInfo.storeName}
            </h5>
            <FontAwesomeIcon
              icon={faMedal}
              color="gold"
              size="lg"
              style={{ marginTop: "-50px", backgroundColor: "white" }}
              className="ml-n4"
            />
          </div>

          <div
            className=" d-flex  justify-content-between mt-n2 mb-1"
            style={{ backgroundColor: "white" }}
          >
            <RenderRating stars={sellerInfo.stars} />
            <RenderInfo info={sellerInfo} />
          </div>

          <p
            className="card-text ml-n4 mr-n4"
            style={{ backgroundColor: "white" }}
          >
            {sellerInfo.description}
          </p>
        </animated.div>
      </div>
    </main>
  );
};

export default KitchenInfoSection;
