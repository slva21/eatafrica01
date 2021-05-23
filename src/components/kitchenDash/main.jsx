import React, { Component } from "react";
import RenderKitchens from "./renderKitchens";
import CityFilter from "./cityFilter";
import Navbar from "react-bootstrap/Navbar";
import OriginFilter from "./originFilter";
import { Link } from "react-router-dom";
import CurrentAddress from "./currentAddress";

class Main extends Component {
  render() {
    const {
      cities,
      onSelectCity,
      origins,
      onFilterOrigin,
      filtered,
      addresses,
      onCurrentAddressChange,
    } = this.props;

    return (
      <div style={{ marginBottom: 70 }}>
        <Navbar bg="white" sticky="top">
          <div className="d-flex  justify-content-center">
            <CityFilter cities={cities} onSelectCity={onSelectCity} />
            {/* <OriginFilter origins={origins} onFilterOrigin={onFilterOrigin} /> */}
            <CurrentAddress
              addresses={addresses}
              onChange={onCurrentAddressChange}
            />
          </div>
        </Navbar>

        <div className="d-flex justify-content-center">
          <RenderKitchens sellers={filtered} />
        </div>
      </div>
    );
  }
}

export default Main;
