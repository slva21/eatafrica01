import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt, faImages } from "@fortawesome/free-solid-svg-icons";
import Api from "../../../server/sellersAPI";
import { toast } from "react-toastify";

const ImageUpload = ({ className, seller }) => {
  const [banner, setBanner] = useState("");

  const handleBannerUpload = async () => {
    try {
      let form = new FormData();
      form.append("banner", banner);
      form.append("_id", seller._id);

      await Api.editBanner(form);
      toast.success(`Picture Saved. Refresh to view!!`, {
        position: "bottom-bottom",
        autoClose: 2000,
      });
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div className="card" style={{ maxWidth: "24rem" }} className={className}>
      <img
        src={seller.banner}
        className="card-img-top rounded"
        alt="..."
        style={{ height: "215px", width: "100%" }}
      />
      <div className="input-group ">
        <div className="input-group-prepend">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="inputGroupFileAddon03"
            style={{ fontFamily: "poppins" }}
            onClick={handleBannerUpload}
          >
            Upload <FontAwesomeIcon icon={faCloudUploadAlt} color="gold" />
          </button>
        </div>
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            onChange={(e) => setBanner(e.target.files[0])}
            name="banner"
            id="inputGroupFile03"
            aria-describedby="inputGroupFileAddon03"
            style={{ fontFamily: "poppins" }}
          />
          <label
            className="custom-file-label"
            htmlFor="inputGroupFile03"
            style={{ fontFamily: "poppins" }}
          >
            {banner.type || "Choose..."}
            <FontAwesomeIcon icon={faImages} color="lightGreen" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
