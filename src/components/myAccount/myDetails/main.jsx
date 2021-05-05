import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useSpring, animated } from "react-spring";

const Main = ({
  phone,
  name,
  addresses,
  onLogoutUser,
  onUserInfoChange,
  onSaveUser,
  onPushToAddresses,
}) => {
  const propss = useSpring({
    config: { mass: 1, tension: 150, friction: 14, clamp: false },
    to: { marginTop: 0, opacity: 1 },
    from: { marginTop: -500, opacity: 1 },
  });

  return (
    <animated.div style={propss}>
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
            <li
              class="list-group-item d-flex justify-content-between "
              onClick={onPushToAddresses}
            >
              <p class="card-text" style={{ fontFamily: "poppins" }}>
                My Places
              </p>
              <FontAwesomeIcon icon={faArrowRight} color="gold" />
            </li>
            <li class="list-group-item d-flex justify-content-between ">
              <p class="card-text" style={{ fontFamily: "poppins" }}>
                Promotions
              </p>
              <FontAwesomeIcon icon={faArrowRight} color="gold" />
            </li>
          </ul>
        </div>

        <button
          className="btn btn-light mt-4 d-block"
          style={{ width: "100%", fontFamily: "poppins" }}
          onClick={onSaveUser}
        >
          Save
        </button>

        <button
          className="btn btn-warning mt-2"
          onClick={onLogoutUser}
          style={{ width: "100%", color: "white", fontFamily: "poppins" }}
        >
          Logout
        </button>
      </main>
    </animated.div>
  );
};

export default Main;
