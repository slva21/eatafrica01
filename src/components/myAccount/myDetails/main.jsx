import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Main = ({
  phone,
  name,
  addresses,
  onLogoutUser,
  onUserInfoChange,
  onSaveUser,
}) => {
  return (
    <main style={{ maxWidth: "100%" }}>
      <div class="mb-3 mt-3">
        <input
          type="text"
          value={name}
          name="name"
          class="form-control"
          onChange={onUserInfoChange}
          id="exampleFormControlInput1"
          placeholder="Full Name"
        />
      </div>
      <div class="mb-3 mt-3">
        <input
          type="text"
          value={phone}
          name="phone"
          class="form-control"
          onChange={onUserInfoChange}
          id="exampleFormControlInput1"
          placeholder="Phone"
        />
      </div>

      <div class="card" style={{ width: "100%" }}>
        <ul class="list-group list-group-flush">
          <li class="list-group-item d-flex justify-content-between ">
            <p class="card-text">My Addresses</p>
            <FontAwesomeIcon icon={faArrowRight} color="gold" />
          </li>
          <li class="list-group-item d-flex justify-content-between ">
            <p class="card-text">Promotions</p>
            <FontAwesomeIcon icon={faArrowRight} color="gold" />
          </li>
        </ul>
      </div>

      <button
        className="btn btn-dark mt-4 d-block"
        style={{ width: "100%" }}
        onClick={onSaveUser}
      >
        Save
      </button>

      <button
        className="btn btn-warning mt-2"
        onClick={onLogoutUser}
        style={{ width: "100%", color: "white" }}
      >
        Logout
      </button>
    </main>
  );
};

export default Main;
