import React, { Component } from "react";
import { getOrigins } from "../fakeOrigins";
import { getCities } from "../fakeCities";
import Main from "../components/kitchenDash/main";
import Api from "../server/sellersAPI";

import { toast } from "react-toastify";

class KitchenDash extends Component {
  state = {
    selectedAddressIndex: "",
    kitchens: [],
    origins: getOrigins(),
    cities: getCities(),
    selectedOrigin: "select",
    selectedCity: "All",
    selectedDeliveryType: "All",
    location: {
      postcode: "",
      state: "",
      state_district: "",
      city: "",
      continent: "",
      suburb: "",
    },
  };

  async componentDidMount() {
    let kitchens = [];
    try {
      localStorage.setItem("url", "/home");
      if (this.props.kitchens.length == 0) {
        // page has been refreshed on dash so api call is neede
        kitchens = await Api.getSellers();
      }
      if (this.props.kitchens.length != 0) {
        //kitchen props is available
        kitchens = this.props.kitchens;
      }

      this.setState({ kitchens });
      if (this.props.user && localStorage.getItem("prevLocation") == "/login") {
        toast(`Hey ${this.props.user.name}`, {
          position: "bottom-center",
          autoClose: 2000,
        });
        localStorage.removeItem("prevLocation");
      } else if (!this.props.user && !localStorage.getItem("hasToast")) {
        toast("Anyone else feeling hungry?", {
          position: "bottom-center",
          autoClose: 2000,
        });

        localStorage.setItem("hasToast", true);
      }
    } catch (error) {}
  }

  handleSelectAddress = async (addressIndex: Number) => {
    try {
      const kitchens = await Api.getNearSellers(
        this.props.user._id,
        addressIndex
      );

      this.setState({
        kitchens,
        selectedDeliveryType: "All",
        selectedOrigin: "select",
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  handleCurrentAddressChange = async (e) => {
    try {
      const selectedAddressID = e.currentTarget.value;

      let selectedAddressIndex = this.props.user.address.findIndex(
        ({ _id }) => _id == selectedAddressID
      );

      if (selectedAddressIndex == -1) return; //no address selected

      await this.handleSelectAddress(selectedAddressIndex);
    } catch (error) {
      console.log(error.message);
    }
  };

  handleSelectDeliveryType = (type) => {
    this.setState({ selectedDeliveryType: type });
  };

  handleSelectCity = (city) => {
    this.setState({ selectedCity: city });
  };

  handleFilterOrigin = (selectedOrigin) => {
    this.setState({ selectedOrigin });
  };

  render() {
    let filtered =
      this.state.selectedDeliveryType !== "All"
        ? this.state.kitchens.filter(
            (m) =>
              m.sellerInfo.offersDelivery === this.state.selectedDeliveryType
          )
        : this.state.kitchens;

    this.state.selectedOrigin !== "select"
      ? (filtered = filtered.filter(
          (m) => m.sellerInfo.origin.path === this.state.selectedOrigin
        ))
      : (filtered = filtered);

    return (
      <Main
        onSelectAddress={this.handleSelectAddress}
        addresses={this.props.user.address}
        cities={this.state.cities}
        onCurrentAddressChange={this.handleCurrentAddressChange}
        onSelectCity={this.handleSelectCity}
        origins={this.state.origins}
        onFilterOrigin={this.handleFilterOrigin}
        filtered={filtered}
        onSelectType={this.handleSelectDeliveryType}
      />
    );
  }
}

export default KitchenDash;
