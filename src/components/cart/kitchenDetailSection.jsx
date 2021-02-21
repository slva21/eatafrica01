import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";

const KitchenDetailsSection = (props) => {
  const { cart } = props;
  return (
    <div className="card-body">
      <h5 className="card-title" style={{ fontFamily: "poppins" }}>
        <FontAwesomeIcon className="mr-1" icon={faReceipt} />
        {cart.kitchen.storeName}
      </h5>
      {cart.kitchen.storeNotes.map((m) => (
        <p className="card-text" id={m._id} style={{ fontFamily: "poppins" }}>
          Kitchen's notes: <small>{m.note}</small>
        </p>
      ))}
    </div>
  );
};

export default KitchenDetailsSection;
