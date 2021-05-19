import React from "react";
import { useSpring, animated } from "react-spring";
import AddressList from "../../components/myAccount/myDetails/myAddress/addressList";


const MyAddresses = ({ userInfo }) => {
  const propss = useSpring({
    config: { mass: 1, tension: 150, friction: 14, clamp: false },
    to: { marginLeft: 0, opacity: 1 },
    from: { marginLeft: 500, opacity: 1 },
  });

  

  return (
    <animated.div style={propss}> 
      <main>
        <AddressList userInfo = {userInfo}/>
        {/* List of current user addresses */}
        <button className="btn btn-dark mt-2" style={{ width: "100%" }}>
          Add Place
        </button>
      </main>
    </animated.div>
  );
};

export default MyAddresses;
