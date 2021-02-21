import React from "react";

const ProductInfoSection = (props) => {
  const { currentProduct: m } = props;
  return (
    <React.Fragment>
      <div>
        <div
          className="list-group-item-active border-top-0  mt-2 mb-n4"
          style={{ maxWidth: "540px" }}
        >
          <div className="d-flex justify-content-between ml mr-2">
            <div className="card-body mr-n4">
              <h5 className="card-title" style={{ fontFamily: "poppins" }}>
                {m.title}
              </h5>
              <h5
                className="card-title mt-n2"
                style={{ fontFamily: "poppins" }}
              >
                <small className="text-muted">{`£${Number(m.price).toFixed(
                  2
                )}`}</small>{" "}
                <small className="" style={{ color: "lightGreen" }}>
                  - Popular
                </small>
              </h5>
            </div>
            <div className="d-flex ">
              <img
                src={m.foodPicUrl}
                alt="..."
                className="rounded-circle"
                style={{ maxWidth: "150px", height: "85px" }}
              />
            </div>
          </div>
        </div>
        {/*..*/}
        <div className="mt-n4">
          <div className="row no-gutters border-bottom">
            <div className="col-md ">
              <div className="card-body ">
                {/* <h5 className="card-title h6 mt-n2">{m.title}</h5> */}
                <p className="card-text mt-n1 " style={{ fontSize: "14px" }}>
                  {m.description}
                </p>
                {/* <p className="card-text mb-n2 mt-n3">
                    <small className="text-muted">{`£${m.price}`}</small>
                  </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <img
        src={currentProduct.foodPicUrl}
        className="card-img-top"
        alt="CurrentProductBanner"
      />
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">{currentProduct.title}</h5>
          <small>{`£${Number(currentProduct.price).toFixed(2)}`}</small>
        </div>

        <p className="card-text">{currentProduct.description}</p>
      </div> */}
    </React.Fragment>
  );
};

export default ProductInfoSection;
