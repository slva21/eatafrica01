import React, { Component } from "react";
import RenderKitchens from "./renderKitchens";
import CityFilter from "./deliveryFilter";
import Navbar from "react-bootstrap/Navbar";
import OriginFilter from "./originFilter";
import { Link } from "react-router-dom";
import CurrentAddress from "./currentAddress";
import DeliveryFilter from "./deliveryFilter";

class Main extends Component {
  render() {
    const {
      onSelectType,
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
            <CurrentAddress
              addresses={addresses}
              onChange={onCurrentAddressChange}
            />
            <OriginFilter origins={origins} onFilterOrigin={onFilterOrigin} />
          </div>
          <DeliveryFilter onSelectType={onSelectType} />
        </Navbar>

        <div className="d-flex justify-content-center">
          <RenderKitchens sellers={filtered} />
        </div>
      </div>
    );
  }
}

export default Main;
