import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const CreateKitchen = (props) => {
  return (
    <Fragment>
      <Link to="/" style={{ color: "inherit" }}>
        <div className="card" style={{ width: "inherit" }}>
          <img
            src="https://t3.ftcdn.net/jpg/02/73/53/32/240_F_273533205_nL07ay0novw8AizElXHVtRF7j3YkdjSH.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body d-flex justify-content-center">
            <p className="card-text text-xl-center">CREATE YOUR KITCHEN NOW!</p>
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

export default CreateKitchen;
