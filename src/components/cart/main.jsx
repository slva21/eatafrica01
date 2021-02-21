import React from "react";
import { useSpring, animated } from "react-spring";
import KitchenDetailsSection from "./kitchenDetailSection";
import CartItemsSection from "./cartItemsSection";
import BottomBarSection from "./bottomBarSection";

const Main = (props) => {
  const propss = useSpring({
    config: { mass: 1, tension: 150, friction: 14, clamp: false },
    to: { marginLeft: 0, opacity: 1 },
    from: { marginLeft: 500, opacity: 1 },
  });

  const {
    cart,
    itemTotals,
    onDelete,
    onEdit,
    onCheckout,
    onChange,
    onTipChange,
  } = props;
  return (
    <animated.div style={propss}>
      <div className="card mt-2 border-0" style={{ maxWidth: "inherit" }}>
        <KitchenDetailsSection cart={cart} />
        <CartItemsSection
          cart={cart}
          onDelete={onDelete}
          onEdit={onEdit}
          itemTotals={itemTotals}
          onChange={onChange}
        />
        <BottomBarSection
          cart={cart}
          onCheckout={onCheckout}
          onTipChange={onTipChange}
        />
      </div>
    </animated.div>
  );
};

export default Main;
