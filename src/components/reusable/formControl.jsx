import React from "react";

const FormControl = (props) => {
  const { list, onChange, name } = props;
  return (
    <select className="custom-select  " onChange={onChange} name={name}>
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
