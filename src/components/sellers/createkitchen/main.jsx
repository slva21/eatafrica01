import React from "react";
import { useSpring, animated } from "react-spring";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
const Main = (props) => {
  const propss = useSpring({
    config: { mass: 1, tension: 130, friction: 14, clamp: false },
    to: { marginTop: 0, opacity: 1 },
    from: { marginTop: 500, opacity: 1 },
  });

  return (
    <animated.div style={propss}>
      {/* kitchen name */}
      {props.currentStep == 1 && (
        <Step1 onFormChange={props.onFormChange} info={props.info} />
      )}
      {props.currentStep == 2 && (
        <Step2
          onOriginChange={props.onOriginChange}
          origins={props.origins}
          onFormChange={props.onFormChange}
          info={props.info}
        />
      )}
      {props.currentStep == 3 && (
        <Step3 onFormChange={props.onFormChange} info={props.info} />
      )}
    </animated.div>
  );
};

export default Main;
