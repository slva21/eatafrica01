import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

class CityFilter extends Component {
  render() {
    const { cities, onSelectCity } = this.props;
    return (
      <div className="mt-2">
        <DropdownButton id="dropdown-basic-button" title="CITY" variant="light">
          <Dropdown.Item onClick={() => onSelectCity("All")}>All</Dropdown.Item>
          {cities.map((city) => (
            <React.Fragment key={city._id}>
              <Dropdown.Item onClick={() => onSelectCity(city.name)}>
                {city.name.toUpperCase()}
              </Dropdown.Item>
            </React.Fragment>
          ))}
        </DropdownButton>
      </div>
    );
  }
}

export default CityFilter;
