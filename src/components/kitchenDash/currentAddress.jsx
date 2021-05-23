import React from "react";

const CurrentAddress = ({ addresses, onChange }) => {
  return (
    <select
      className="custom-select ml-n2 mt-2 "
      id="inputGroupSelect01 "
      onChange={onChange}
      name="origin"
    >
      <option value="select">Delivery Address...</option>
      {addresses.map((address) => (
        <React.Fragment key={address._id}>
          <option value={address._id}>{address.addressLine1}</option>
        </React.Fragment>
      ))}
    </select>
  );
};

export default CurrentAddress;
