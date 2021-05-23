import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

class DeliveryFilter extends Component {
  render() {
    const { onSelectType } = this.props;

    return (
      <div className="mt-1 ml-2">
        <DropdownButton
          id="dropdown-basic-button"
          title="Delivery"
          variant="light"
          drop="left"
          size="sm"
        >
          <Dropdown.Item onClick={() => onSelectType("All")}>All</Dropdown.Item>
          {[
            { value: false, name: "Pickup" },
            { value: true, name: "Delivery" },
          ].map((option) => (
            <React.Fragment key={option.value}>
              <Dropdown.Item onClick={() => onSelectType(option.value)}>
                {option.name}
              </Dropdown.Item>
            </React.Fragment>
          ))}
        </DropdownButton>
      </div>
    );
  }
}

export default DeliveryFilter;
