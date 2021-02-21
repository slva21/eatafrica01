import React from "react";
import ProductInfoSection from "./productInfoSection";
import RenderOptions from "./renderOptions";
import Navbar from "react-bootstrap/Navbar";
import AddToCartBtn from "./addToCartBtn";
import CartBtn from "./CartBtn";
import Counter from "./counter";

const Main = (props) => {
  const {
    currentProduct,
    onSelect,
    selectedOptions,
    onAddToCart,
    onProceedToCheckout,
    isMenuInCart,
    onDecrement,
    onIncrement,
    quantity,
    total,
  } = props;
  return (
    <main className="mt-2">
      <div className="d-flex justify-content-center">
        <div className="card border-0" style={{ width: "540px" }}>
          <ProductInfoSection currentProduct={currentProduct} />
          {isMenuInCart && (
            <ul className="list-group list-group-flush ">
              <li className="list-group-item bg-light">OPTIONS</li>
            </ul>
          )}
          <RenderOptions
            isMenuInCart={isMenuInCart}
            options={currentProduct.options}
            onSelect={onSelect}
            selectedOptions={selectedOptions}
          />
        </div>
      </div>
      {/* <div className="  position-sticky  fixed-bottom  ml-n3 mr-n3 mt-5"> */}
      <Navbar
        bg="light"
        expand="sm"
        variant="light"
        fixed="bottom"
        className="pb-4 flex-column ml-n3 mr-n3"
        style={{ marginBottom: 70 }}
      >
        <Counter
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          quantity={quantity}
        />
        {total !== 0 && (
          <div
            className="d-flex justify-content-between pl-3 pr-3 mb-n1 bg-light pt-1"
            style={{ width: "100%" }}
          >
            <h5 style={{ fontFamily: "poppins" }}>Total</h5>
            <p>{`£${Number(total).toFixed(2)}`}</p>
          </div>
        )}
        {isMenuInCart && <CartBtn onProceedToCheckout={onProceedToCheckout} />}
        {!isMenuInCart && <AddToCartBtn onAddToCart={onAddToCart} />}
      </Navbar>

      {/* </div> */}
    </main>
  );
};

export default Main;
