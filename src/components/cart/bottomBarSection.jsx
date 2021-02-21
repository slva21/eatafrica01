import React from "react";
import CartTotal from "./cartTotal";
import CheckoutBtn from "./checkOutbtn";

import TipsBAr from "./tipsBar";

const BottomBarSection = (props) => {
  const { cart, onCheckout, onTipChange } = props;
  return (
    <div className="fixed-bottom" style={{ marginBottom: 70 }}>
      <TipsBAr onTipChange={onTipChange} />
      <CartTotal cart={cart} />
      <CheckoutBtn onCheckout={onCheckout} />
    </div>
  );
};

export default BottomBarSection;
