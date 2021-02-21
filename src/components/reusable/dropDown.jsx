import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const DropDown = (props) => {
  const { list, title, onSelect } = props;

  return (
    <div className="mt-2">
      <DropdownButton id="dropdown-basic-button" title={title} variant="light">
        <Dropdown.Item onClick={() => onSelect("All")}>All</Dropdown.Item>
        {list.map((m) => (
          <React.Fragment key={m._id}>
            <Dropdown.Item onClick={() => onSelect(m._id)}>
              {m.name.toUpperCase()}
            </Dropdown.Item>
          </React.Fragment>
        ))}
      </DropdownButton>
    </div>
  );
};

export default DropDown;
