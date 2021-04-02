import React from "react";
import { Fragment } from "react";

const Step1 = ({ onFormChange, info }) => {
  return (
    <Fragment>
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
            name="storeName"
            value={info.storeName}
            onChange={onFormChange}
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
