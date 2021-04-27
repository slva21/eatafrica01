import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import Api from "../server/Login";
import { toast } from "react-toastify";

class Login extends Component {
  state = {
    user: {
      email: "",
      password: "",
    },
  };

  handleChange = (e) => {
    let user = { ...this.state.user };
    user[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ user });
  };

  handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const token = await Api.loginUser(
        this.state.user.email,
        this.state.user.password
      );

      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("prevLocation", this.props.location.pathname);

        if (!this.props.history.location.state) {
          window.location = "/kitchens";
          return;
        }

        if (this.props.history.location.state.from == "/cart") {
          console.log("here");
          window.location = "/cart";
          return;
        }
        if (this.props.history.location.state.from == "productArchive") {
          window.location = this.props.history.location.state.url;
          return;
        }
      }
    } catch (ex) {}
  };

  render() {
    return (
      <Fragment>
        <form className="mt-2" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              onChange={this.handleChange}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              onChange={this.handleChange}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
            />
          </div>
          <button type="submit" className="btn btn-success">
            LOGIN
          </button>
        </form>
        <button
          type="submit"
          className="btn btn-primary mt-2 btn"
          onClick={() => {
            toast("Let's get you signed up!", {
              position: "bottom-center",
            });
            this.props.history.push("/user/createAccount");
          }}
        >
          NEW TO EAT-AFRICA? <FontAwesomeIcon icon={faDoorOpen} />
        </button>
      </Fragment>
    );
  }
}

export default Login;
