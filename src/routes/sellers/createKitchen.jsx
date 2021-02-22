import React, { Component } from "react";
import { Fragment } from "react";
import Main from "../../components/sellers/createkitchen/main";
import { getOrigins } from "../../fakeOrigins";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";

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

  render() {
    return (
      <main className="mb-4">
        <Main
          onFormChange={this.handleFormChange}
          currentStep={this.state.currentStep}
          origins={this.state.origins}
          info={this.state.info}
          onOriginChange={this.handleOriginChange}
        />
        <div
          className="d-flex justify-content-between"
          style={{ width: "100%" }}
        >
          {this.state.currentStep != 1 && (
            <button
              className="btn"
              style={{
                //   marginLeft: "75%",
                backgroundColor: "white",
              }}
              onClick={this.handleDecrementStep}
            >
              <FontAwesomeIcon
                className="ml-2"
                icon={faArrowCircleLeft}
                size="3x"
                color="gold"
              />
            </button>
          )}
          <button
            className="btn"
            style={{
              //   margin: "75%",
              backgroundColor: "white",
            }}
            onClick={this.handleIncrementStep}
          >
            <FontAwesomeIcon
              className="ml-2"
              icon={faArrowCircleRight}
              size="3x"
              color="gold"
            />
          </button>
        </div>
      </main>
    );
  }
}

export default CreateKitchen;
