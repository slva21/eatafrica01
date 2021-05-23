import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

class OriginFilter extends Component {
  render() {
    const { origins, onFilterOrigin } = this.props;
    return (
      <div className="mt-2 ml-2">
        <DropdownButton
          id="dropdown-basic-button"
          title="Origin"
          variant="light"
          size="sm"
          drop="left"
        >
          <Dropdown.Item onClick={() => onFilterOrigin("select")}>
            All
          </Dropdown.Item>
          {origins.map((origin) => (
            <React.Fragment key={origin._id}>
              <Dropdown.Item onClick={() => onFilterOrigin(origin.path)}>
                {origin.path}
              </Dropdown.Item>
            </React.Fragment>
          ))}
        </DropdownButton>
      </div>
    );
  }
}

export default OriginFilter;
