import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const StripeSetup = (props) => {
  return (
    <Fragment>
      <div class="card mt-2" style={{ width: "21.5rem" }}>
        <img
          src="https://www.jing.fm/clipimg/full/202-2029501_bank-atm-card-credit-debit-finance-cash-money.png"
          className="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">THE BANK CENTER</h5>
          <p class="card-text">
            View payouts or manage your payment information here! (Onboarding
            must to completed inorder to start accepting payments)
          </p>
          <div className="d-flex justify-content-center">
            <button
              class="btn btn-success mr-4"
              onClick={props.onStripeLoginLink}
            >
              Payments
            </button>
            <button
              class="btn btn-warning"
              style={{ color: "white" }}
              onClick={props.onStripeOnboarding}
            >
              Account Setup
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default StripeSetup;
