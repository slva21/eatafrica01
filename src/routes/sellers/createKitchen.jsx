import React, { Component } from "react";
import { Fragment } from "react";
import Main from "../../components/sellers/createkitchen/main";
import { getOrigins } from "../../fakeOrigins";

class CreateKitchen extends Component {
  state = {
    info: {
      storeName: "", //1
      origin: "", //2
      addressline1: "", //2
      addressline2: "", //2
      postcode: "", //2
      city: "", //2
      email: "", //3
      password: "", //3
      confirmPassword: "", //3
      mobile: "", //3
      name: "", //4
    },
    currentStep: 1,
    origins: getOrigins(),
  };

  handleIncrementStep = () => {
    let currentStep = this.state.currentStep;
    currentStep++;
    this.setState({ currentStep });
  };

  handleDecrementStep = () => {
    let currentStep = this.state.currentStep;
    currentStep--;
    this.setState({ currentStep });
  };

  handleOriginChange = (e) => {
    let info = { ...this.state.info };
    info.origin = e.currentTarget.value;
    this.setState({ info });
  };

  handleFormChange = (e) => {
    let info = { ...this.state.info };
    info[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ info });
  };

  handlesCurrentPecentage = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };

  render() {
    return (
      <main className="mb-4">
        <Main
          onFormChange={this.handleFormChange}
          currentStep={this.state.currentStep}
          origins={this.state.origins}
          info={this.state.info}
          onOriginChange={this.handleOriginChange}
          onCurrentPercentage={this.handlesCurrentPecentage}
          onDecrementStep={this.handleDecrementStep}
          onIncrementStep={this.handleIncrementStep}
        />
      </main>
    );
  }
}

export default CreateKitchen;
