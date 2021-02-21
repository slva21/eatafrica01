import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const StripeSetup = (props) => {
  return (
    <Fragment>
      <div onClick={props.onStripeLoginLink} className="mt-2">
        <div className="card" style={{ width: "21.5rem" }}>
          <img
            src="https://kinsta.com/wp-content/uploads/2017/01/stripe-for-wordpress.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body d-flex justify-content-center">
            <p className="card-text text-xl-center">GET PAID WITH STRIPE</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default StripeSetup;
