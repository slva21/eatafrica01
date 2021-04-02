import React from "react";
import { useSpring, animated } from "react-spring";
import Legals from "./legals";
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
      <div className="progress mt-3">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          style={{
            width:
              props.onCurrentPercentage(props.currentStep, 1, 4, 5, 100) + "%",
            backgroundColor: "gold",
          }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>

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
      {props.currentStep == 4 && <Legals />}
    </animated.div>
  );
};

export default Main;
