import React from "react";
import { Fragment } from "react";

const RenderETAsection = (props) => {
  return (
    <Fragment>
      {props.order.orderType == 2 && ( // catered
        <Fragment>
          <h5 style={{ fontSize: "15px" }}>
            Let{" "}
            <h5
              style={{
                fontSize: "15px",
                color: "green",
                display: "inline",
              }}
            >
              {props.order.customerId.name}
            </h5>{" "}
            {props.order.isDelivery == false
              ? `know when to pick up: ${props.etaTime}`
              : `know an estimated delivery time: ${props.etaTime}`}
          </h5>
          <div class="input-group mb-3">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={props.onETASave}
              id="button-addon1"
            >
              ADD DATE
            </button>
            <input
              type="date"
              className="form-control"
              placeholder=""
              value={props.etaDate}
              onChange={props.onETAChange}
              name="date"
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
            />
          </div>
          <div class="input-group mb-3">
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon1"
              onClick={props.onETASave}
            >
              ADD TIME
            </button>
            <input
              type="time"
              className="form-control"
              placeholder=" Length in minutes.. e.g 20"
              value={props.etaTime}
              onChange={props.onETAChange}
              name="time"
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
            />
          </div>
        </Fragment>
      )}
      {props.order.orderType == 1 && ( //regular order
        <Fragment>
          <h5 style={{ fontSize: "15px" }} className="">
            Let{" "}
            <h5
              style={{
                fontSize: "15px",
                color: "green",
                display: "inline",
              }}
            >
              {props.order.customerId.name}
            </h5>{" "}
            {props.order.isDelivery == false
              ? `know when to pick up: ${props.order.ETA.time}`
              : `know an estimated delivery time: ${props.order.ETA.time}`}
          </h5>
          <div class="input-group mb-3">
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon1"
              onClick={props.onETASave}
            >
              ADD ETA
            </button>
            <input
              type="time"
              className="form-control"
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
              value={props.etaTime}
              onChange={props.onETAChange}
              name="time"
            />
          </div>
        </Fragment>
      )}
      <button
        className="btn btn-light btn-dark "
        style={{ width: "100%", fontFamily: "poppins" }}
        onClick={props.onETASave}
      >
        MARK AS COMPLETED
      </button>
    </Fragment>
  );
};

export default RenderETAsection;
