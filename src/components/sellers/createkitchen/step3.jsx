import React from "react";
import { Fragment } from "react";

const Step3 = ({ onFormChange, info }) => {
  return (
    <Fragment>
      <main
        className="mb-3 mt-3 d-flex align-items-center "
        style={{ height: "73vh" }}
      >
        <div style={{ width: "100%" }}>
          <div className="mb-3 mt-3 d-flex justify-content-center">
            <h5>Email</h5>
          </div>
          <input
            className="form-control form-control-lg mt-n1"
            type="text"
            name="email"
            onChange={onFormChange}
            value={info.email}
            style={{ borderColor: "gold" }}
          />
          <small className="text-muted">
            You may use the same email as your regular account if you wish
          </small>
          <div className="mb-3 mt-3 d-flex justify-content-center">
            <h5>Password</h5>
          </div>
          <input
            className="form-control form-control-lg mt-n1"
            type="password"
            name="password"
            onChange={onFormChange}
            value={info.password}
            style={{ borderColor: "gold" }}
          />
          <small className="text-muted">
            Make sure it's secure and memorable!
          </small>
          <div className="mb-3 mt-3 d-flex justify-content-center">
            <h5> Confirm Password</h5>
          </div>
          <input
            className="form-control form-control-lg mt-n1"
            type="password"
            name="confirmPassword"
            onChange={onFormChange}
            value={info.confirmPassword}
            style={{ borderColor: "gold" }}
          />
          <div className="mb-3 mt-3 d-flex justify-content-center">
            <h5>Mobile</h5>
          </div>
          <input
            className="form-control form-control-lg mt-n1"
            type="text"
            name="mobile"
            onChange={onFormChange}
            value={info.mobile}
            style={{ borderColor: "gold" }}
          />
          <small className="text-muted">
            Customers may contact you using this number!
          </small>
        </div>
      </main>
    </Fragment>
  );
};

export default Step3;
