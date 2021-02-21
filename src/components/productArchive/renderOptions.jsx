import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import React, { Fragment } from "react";
import { useSpring, animated } from "react-spring";

const RenderOptions = (props) => {
  const { options, onSelect, selectedOptions, isMenuInCart } = props;
  const propss = useSpring({
    config: { mass: 1, tension: 180, friction: 12, clamp: false },
    to: { marginTop: 0, opacity: 1 },
    from: { marginTop: -500, opacity: 0 },
  });

  function isActive(option) {
    if (selectedOptions.find((m) => m._id === option._id)) {
      return (
        <FontAwesomeIcon
          icon={faShoppingBasket}
          className="mr-1"
          color="gold"
          size="lg"
        />
      );
    } else {
      return null;
    }
  }

  return (
    <animated.div style={propss}>
      {isMenuInCart && (
        <ul className="list-group list-group-flush border-0">
          {options.map((option) => (
            <li className="list-group-item border-0" key={option._id}>
              <a onClick={() => onSelect(option)}>
                <div className="d-flex justify-content-between">
                  <p
                    className="card-text text-muted"
                    style={{ fontSize: "14px", fontFamily: "poppins" }}
                  >
                    {option.name}
                  </p>
                  <div>
                    {isActive(option)}
                    <small
                      className=" text-b "
                      style={{ fontFamily: "poppins" }}
                    >{`+£${Number(option.price).toFixed(2)}`}</small>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </animated.div>
  );
};

export default RenderOptions;
