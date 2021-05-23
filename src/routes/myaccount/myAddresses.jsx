import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import AddressList from "../../components/myAccount/myDetails/myAddress/addressList";
import AddAddress from "../../components/myAccount/myDetails/myAddress/newAddress";

const MyAddresses = ({
  userInfo,
  onNewAddressChange,
  cities,
  onSaveUserAddress,
}) => {
  const propss = useSpring({
    config: { mass: 1, tension: 150, friction: 14, clamp: false },
    to: { marginLeft: 0, opacity: 1 },
    from: { marginLeft: 500, opacity: 1 },
  });

  const [AddPlaceBtn: Boolean, setAddPlaceBtn] = useState(false);

  return (
    <animated.div style={propss}>
      <main>
        <AddressList userInfo={userInfo} />
        {/* List of current user addresses */}
        <button
          className="btn btn-light mt-2"
          style={{ width: "100%" }}
          onClick={() => setAddPlaceBtn(!AddPlaceBtn)}
        >
          Add Place
        </button>

        {AddPlaceBtn && (
          <AddAddress
            onNewAddressChange={onNewAddressChange}
            cities={cities}
            onSaveUserAddress={onSaveUserAddress}
          />
        )}
      </main>
    </animated.div>
  );
};

export default MyAddresses;
