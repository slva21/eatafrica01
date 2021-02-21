import React from "react";

const BannerUpload = (props) => {
  return (
    <div className="form-group mt-3">
      <div className="input-group mb-3">
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="inputGroupFile02"
          />
          <label
            className="custom-file-label"
            for="inputGroupFile02"
            aria-describedby="inputGroupFileAddon02"
          >
            Choose banner
          </label>
        </div>
        <div className="input-group-append">
          <button className=" btn btn-success" id="inputGroupFileAddon02">
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerUpload;
