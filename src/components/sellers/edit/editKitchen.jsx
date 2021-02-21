import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import React, { Fragment } from "react";

const EditKitchen = (props) => {
  const { seller, onChange, cities, onSaveDetails } = props;
  return (
    <div className="card mt-2" style={{ width: "inherit" }}>
      <div className="card-body">
        <p className="card-text" style={{ fontSize: "15px" }}>
          <FontAwesomeIcon icon={faCopyright} color="gold" /> RE-BRAND KITCHEN
        </p>
        <form>
          <div className="form-group">
            <label htmlFor="storeName" style={{ fontFamily: "poppins" }}>
              Kitchen Name
            </label>
            <input
              type="text"
              className="form-control"
              id="storeName"
              name="storeName"
              value={seller.storeName}
              onChange={onChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              Customers will know you as this
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="description" style={{ fontFamily: "poppins" }}>
              Description
            </label>
            <textarea
              type="text"
              className="form-control"
              id="description"
              name="description"
              height="100"
              value={seller.description}
              onChange={onChange}
              rows="5"
              cols="25"
              placeholder="This is the default text"
            />
          </div>
          <div className="form-group">
            <label style={{ fontFamily: "poppins" }}>City</label>
            <select className="form-control" onChange={onChange} name="city">
              {cities.map((city) => (
                <React.Fragment key={city._id}>
                  <option
                    selected={seller.city._id === city._id}
                    value={city._id}
                  >
                    {city.name}
                  </option>
                </React.Fragment>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="btn btn-light btn-lg btn-block"
            onClick={onSaveDetails}
            style={{ fontFamily: "poppins" }}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditKitchen;
