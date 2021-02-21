import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt, faImages } from "@fortawesome/free-solid-svg-icons";
import Api from "../../../../server/menuApi";
import { toast } from "react-toastify";

const FoodPicUpload = ({ menu }) => {
  const [foodPic, setFoodPic] = useState("");

  const handleBannerUpload = async () => {
    try {
      let form = new FormData();
      form.append("foodPic", foodPic);
      form.append("menu_id", menu._id);

      await Api.editFoodPic(form);
      toast.success(`Picture Saved. Refresh to view!!`, {
        position: "bottom-center",
        autoClose: 2000,
      });
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div className="card" style={{ maxWidth: "24rem" }} className="mt-2">
      <img
        src={menu.foodPicUrl}
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
            onChange={(e) => setFoodPic(e.target.files[0])}
            name="foodPic"
            id="inputGroupFile03"
            aria-describedby="inputGroupFileAddon03"
            style={{ fontFamily: "poppins" }}
          />
          <label
            className="custom-file-label"
            htmlFor="inputGroupFile03"
            style={{ fontFamily: "poppins" }}
          >
            {foodPic.type || "Choose..."}
            <FontAwesomeIcon icon={faImages} color="lightGreen" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default FoodPicUpload;
