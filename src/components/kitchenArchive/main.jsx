import React, { Component } from "react";
import KitchenMenuSection from "./kitchenMenuSection";
import KitchenInfoSection from "./kitchenInfoSection";
import MenuFilters from "./menuFilters";
import { useSpring, animated } from "react-spring";

const Main = ({
  dropDownList,
  dropDownTitle,
  onDropDownSelect,
  menu,
  sellerInfo,
  formControlList,
  currentType,
  onFormSelectChange,
}) => {
  const propss = useSpring({
    config: { mass: 1, tension: 150, friction: 14, clamp: false },
    to: { marginTop: 0, opacity: 1 },
    from: { marginTop: 500, opacity: 0 },
  });
  return (
    <main>
      <div className="d-flex justify-content-center">
        <div className="card mt-2  border-0" style={{ width: "540px" }}>
          {/* <animated.div style={propss}> */}
          <KitchenInfoSection currentKitchenInfo={sellerInfo} />

          <ul className="list-group list-group-flush mr-n3 ml-n3">
            <li className="list-group-item bg-light">{`MENU     -    ${currentType.toUpperCase()}`}</li>
            <li className="list-group-item mt-n2 bg-light ">
              <MenuFilters
                dropDownList={dropDownList}
                dropDownTitle={dropDownTitle}
                onDropDownSelect={onDropDownSelect}
                formControlList={formControlList}
                onFormSelectChange={onFormSelectChange}
              />
            </li>
          </ul>

          <KitchenMenuSection
            currentKitchenMenu={menu}
            sellerId={sellerInfo._id} //used to pass url params
          />
          {/* </animated.div> */}
        </div>
      </div>
    </main>
  );
};

export default Main;
