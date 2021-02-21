import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt, faCoins, faTruck } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";

const RenderCustomerInfoSection = (props) => {
  return (
    <main className="border-top mt-4">
      <h5 style={{ fontSize: "19px" }} className="mt-2">
        <FontAwesomeIcon icon={faTruck} color="" /> Delivery Info :
      </h5>
      <h5 style={{ fontSize: "17px" }} className="mt-2">
        Address Line 1:
      </h5>
      <h5 style={{ fontSize: "17px" }} className="mt-2">
        Address Line 2:
      </h5>
      <h5 style={{ fontSize: "17px" }} className="mt-2">
        City:
      </h5>
      <h5 style={{ fontSize: "17px" }} className="mt-2">
        Postcode:
      </h5>
      <h5 style={{ fontSize: "17px" }} className="mt-2">
        Mobile:
      </h5>
    </main>
  );
};

export default RenderCustomerInfoSection;
