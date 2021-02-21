import React, { Component } from "react";
import { getOrigins } from "../fakeOrigins";
import { getCities } from "../fakeCities";
import Main from "../components/kitchenDash/main";
import Api from "../server/sellersAPI";

import { toast } from "react-toastify";

class KitchenDash extends Component {
  state = {
    kitchens: [],

    origins: getOrigins(),
    cities: getCities(),
    selectedOrigin: "select",
    selectedCity: "All",
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

  handleSelectCity = (city) => {
    this.setState({ selectedCity: city });
  };

  handleFilterOrigin = (e) => {
    let selectedOrigin = e.currentTarget.value;
    this.setState({ selectedOrigin });
  };

  render() {
    let filtered =
      this.state.selectedCity !== "All"
        ? this.state.kitchens.filter(
            (m) => m.sellerInfo.city.name === this.state.selectedCity
          )
        : this.state.kitchens;

    this.state.selectedOrigin !== "select"
      ? (filtered = filtered.filter(
          (m) => m.sellerInfo.origin.path === this.state.selectedOrigin
        ))
      : (filtered = filtered);

    return (
      <Main
        cities={this.state.cities}
        onSelectCity={this.handleSelectCity}
        origins={this.state.origins}
        onFilterOrigin={this.handleFilterOrigin}
        filtered={filtered}
      />
    );
  }
}

export default KitchenDash;
