import React from "react";
import { Fragment } from "react";

const Step1 = () => {
  return (
    <Fragment>
      <div className="progress mt-3">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          style={{ width: "0%", backgroundColor: "gold" }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
      <main
        className="mb-4 mt-3 d-flex align-items-center "
        style={{ height: "73vh" }}
      >
        <div style={{ width: "100%" }}>
          <div className="mb-3 mt-3 d-flex justify-content-center">
            <h5>KITCHEN NAME</h5>
          </div>
          <input
            className="form-control form-control-lg mt-n1"
            type="text"
            // S
            aria-label=".form-control-lg example"
            style={{ borderColor: "gold" }}
          />
          <small className="text-muted">People will know you as this!</small>
        </div>
      </main>
    </Fragment>
  );
};

export default Step1;
