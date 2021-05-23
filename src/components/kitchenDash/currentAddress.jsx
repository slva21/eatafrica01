import React from "react";

const CurrentAddress = ({ addresses, onChange }) => {
  return (
    <select
      className="custom-select mt-2 ml-2"
      id="inputGroupSelect01 "
      onChange={onChange}
      name="origin"
    >
      <option value="select">Dilvery Address...</option>
      {addresses.map((address) => (
        <React.Fragment key={address._id}>
          <option value={address._id}>{address.addressLine1}</option>
        </React.Fragment>
      ))}
    </select>
  );
};

export default CurrentAddress;
