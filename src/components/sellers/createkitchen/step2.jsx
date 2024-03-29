import React from "react";
import { Fragment } from "react";
import OriginFilter from "../../kitchenDash/originFilter";
import SelectOrigin from "./selectOrigin";

const Step2 = (props) => {
  return (
    <Fragment>
      <main
        className="mb-3 mt-3 d-flex align-items-center "
        style={{ height: "73vh" }}
      >
        <div style={{ width: "100%" }}>
          <div className="mb-3 mt-3 d-flex justify-content-center">
            <h5 className="mt-3">ORIGIN</h5>
          </div>
          <div className="mr-3">
            <SelectOrigin
              onOriginChange={props.onOriginChange}
              origins={props.origins}
            />
            <small className="text-muted">What country do you represent!</small>
          </div>
          <div className="mb-3 mt-3 d-flex justify-content-center">
            <h5>Address Line 1</h5>
          </div>
          <input
            className="form-control  mt-n1"
            type="text"
            name="addressline1"
            onChange={props.onFormChange}
            value={props.info.addressline1}
            style={{ borderColor: "gold" }}
          />
          <small className="text-muted">
            You may use the same email as your regular account if you wish
          </small>
          <div className="mb-3 mt-3 d-flex justify-content-center">
            <h5>Address Line 2</h5>
          </div>
          <input
            className="form-control  mt-n1"
            type="text"
            name="addressline2"
            onChange={props.onFormChange}
            value={props.info.addressline2}
            style={{ borderColor: "gold" }}
          />
          <small className="text-muted">
            You may use the same email as your regular account if you wish
          </small>
          <div className="mb-3 mt-3 d-flex justify-content-center">
            <h5 className="mt-3">Postcode & City/Town</h5>
          </div>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Postcode"
              value={props.info.postcode}
              aria-label="Username"
              name="postcode"
              onChange={props.onFormChange}
              style={{ borderColor: "gold" }}
            />

            <input
              type="text"
              class="form-control"
              placeholder="City/Town"
              name="city"
              value={props.info.city}
              onChange={props.onFormChange}
              style={{ borderColor: "gold" }}
            />
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Step2;
