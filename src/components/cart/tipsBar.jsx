import React from "react";

const TipsBAr = ({ onTipChange }) => {
  return (
    <div className="d-flex justify-content-between pl-3 pr-3 mb-n1 bg-dark pt-2">
      <p className="h6 mt-1" style={{ color: "white", fontFamily: "poppins" }}>
        Tip?
      </p>
      <div className=" mb-2 d-flex" role="group" aria-label="First group">
        <button
          type="button"
          className="btn btn-sm btn-dark ml-1 mr-1"
          onClick={() => onTipChange(0)}
        >
          0%
        </button>
        <button
          type="button"
          className="btn btn-sm btn-dark ml-1 mr-1"
          onClick={() => onTipChange(1.03)}
        >
          3%
        </button>
        <button
          type="button"
          className=" ml-1 mr-1 btn btn-sm btn-dark"
          onClick={() => onTipChange(1.05)}
        >
          5%
        </button>
        <button
          type="button"
          className=" ml-1 mr-1 btn btn-sm btn-dark"
          onClick={() => onTipChange(1.1)}
        >
          10%
        </button>
      </div>
    </div>
  );
};

export default TipsBAr;
