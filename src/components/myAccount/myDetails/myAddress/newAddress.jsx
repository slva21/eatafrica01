import React from "react";
import FormControl from "../../../reusable/formControl";

const AddAddress = ({ cities, onNewAddressChange, onSaveUserAddress }) => {
  return (
    <main
      className="
    "
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="pl-2 pr-2">
        <div className="">
          <label for="exampleInputPassword1" className="form-label">
            Address Line 1
          </label>
          <input
            type="text"
            onChange={onNewAddressChange}
            style={{
              color: "",
              fontFamily: "poppins",
            }}
            className="form-control"
            id="exampleFormControlInput1"
            name="addressLine1"
          />
        </div>
        <div className="mt-3">
          <label for="exampleInputPassword1" className="form-label">
            Address Line 2
          </label>
          <input
            onChange={onNewAddressChange}
            name="addressLine2"
            style={{
              color: "",
              fontFamily: "poppins",
            }}
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div className="mt-3">
          <label for="exampleInputPassword1" className="form-label">
            Postcode
          </label>
          <input
            onChange={onNewAddressChange}
            name="postcode"
            style={{
              color: "",
              fontFamily: "poppins",
            }}
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div className="mt-3">
          <label for="exampleInputPassword1" className="form-label">
            City
          </label>
          <FormControl
            list={cities}
            onChange={onNewAddressChange}
            name="cityID"
          />
        </div>
      </div>

      <button
        className="btn btn-success mt-2 mb-2 ml-1 mr-2"
        style={{ width: "98%", fontFamily: "poppins" }}
        onClick={onSaveUserAddress}
      >
        Save
      </button>
    </main>
  );
};

export default AddAddress;
