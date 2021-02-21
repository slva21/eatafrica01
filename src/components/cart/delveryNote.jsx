import React from "react";

const DeliveryNotes = ({ onChange }) => {
  return (
    <input
      type="text"
      className="form-control mt-2 "
      placeholder="Delivery notes..."
      aria-label="Username"
      name="deliveryNote"
      aria-describedby="addon-wrapping"
      onChange={onChange}
    />
  );
};

export default DeliveryNotes;
