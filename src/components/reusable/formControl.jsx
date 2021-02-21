import React from "react";

const FormControl = (props) => {
  const { list, onChange } = props;
  return (
    <select className="custom-select mt-2 ml-2" onChange={onChange}>
      <option>Select</option>
      {list.map((m) => (
        <option key={m._id} value={m._id}>
          {m.name}
        </option>
      ))}
    </select>
  );
};

export default FormControl;
