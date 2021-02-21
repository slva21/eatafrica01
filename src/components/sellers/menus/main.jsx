import React from "react";
import { useSpring, animated } from "react-spring";
import MenuFactory from "./menuFactory";

const Main = (props) => {
  const propss = useSpring({
    config: { mass: 1, tension: 150, friction: 14, clamp: false },
    to: { marginLeft: 0, opacity: 1 },
    from: { marginLeft: 500, opacity: 1 },
  });
  return (
    <animated.div style={propss}>
      <MenuFactory menu={props.menu} onEditClick={props.onEditClick} />
    </animated.div>
  );
};

export default Main;
