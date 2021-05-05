import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import ShowAddress from "../../components/myAccount/myDetails/myAddress/showAddress";

const MyAddresses = ({ userInfo }) => {
  const propss = useSpring({
    config: { mass: 1, tension: 150, friction: 14, clamp: false },
    to: { marginLeft: 0, opacity: 1 },
    from: { marginLeft: 500, opacity: 1 },
  });

  const [currentAddress, setCurrentAddress] = useState(0);

  return (
    <animated.div style={propss}>
      <main>
        <div class="card mt-3" style={{ maxWidth: "100%" }}>
          <ul class="list-group list-group-flush">
            {userInfo.address.map((m) => (
              <li
                class="list-group-item"
                style={{ fontFamily: "poppins" }}
                key={m._id}
              >
                <div className="d-flex justify-content-between">
                  <p onClick={() => setCurrentAddress(m._id)}>
                    {m.addressLine1}, {m.postcode}
                  </p>
                  {currentAddress == m._id && (
                    <FontAwesomeIcon
                      icon={faArrowUp}
                      color="gold"
                      size="lg"
                      onClick={() => setCurrentAddress("")}
                    />
                  )}
                  <FontAwesomeIcon icon={faTrashAlt} color="red" size="lg" />
                </div>

                {currentAddress == m._id && <ShowAddress m={m} />}
              </li>
            ))}
          </ul>
        </div>
        <button className="btn btn-dark mt-2" style={{ width: "100%" }}>
          Add Place
        </button>
      </main>
    </animated.div>
  );
};

export default MyAddresses;
