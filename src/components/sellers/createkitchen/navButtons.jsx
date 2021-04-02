import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const NavButtons = ({ currentStep, onDecrementStep, onIncrementStep }) => {
  return (
    <div
      className="d-flex justify-content-between"
      style={{
        width: "100%",
        backgroundColor: "white",
        position: "fixed",
        bottom: 70,
        paddingBottom: 20,
      }}
    >
      {currentStep != 1 && (
        <button
          className="btn"
          style={{
            //   marginLeft: "75%",
            backgroundColor: "white",
          }}
          onClick={onDecrementStep}
        >
          <FontAwesomeIcon
            className="ml-2"
            icon={faArrowCircleLeft}
            size="3x"
            color="gold"
          />
        </button>
      )}
      <button
        className="btn"
        style={{
          //   margin: "75%",
          marginRight: 40,
          backgroundColor: "white",
        }}
        onClick={onIncrementStep}
      >
        <FontAwesomeIcon
          className="ml-2"
          icon={faArrowCircleRight}
          size="3x"
          color="gold"
        />
      </button>
    </div>
  );
};

export default NavButtons;
