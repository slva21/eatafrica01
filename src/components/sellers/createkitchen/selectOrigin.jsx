import React from "react";

const SelectOrigin = ({ onOriginChange, origins }) => {
  return (
    <select
      className="custom-select"
      id="inputGroupSelect01 "
      onChange={onOriginChange}
      name="origin"
    >
      <option selected>Select Origin</option>
      {origins.map((m) => (
        <React.Fragment key={m._id}>
          <option value={m._id}>{m.path}</option>
        </React.Fragment>
      ))}
    </select>
  );
};

export default SelectOrigin;
