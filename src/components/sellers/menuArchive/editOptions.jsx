import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faEdit,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";

const EditOptions = ({
  menu,
  onOptionToggle,
  onDeleteOption,
  onAddOption,
  onOptionChange,
  onMenuSave,
}) => {
  return (
    <main className="mt-3">
      <form>
        {menu.options.map((m) => (
          <div
            className="form-group d-flex justify-content-between"
            key={m._id}
          >
            <div className="input-group ">
              <div className="input-group-prepend">
                <span className="input-group-text">£</span>
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Amount "
                name="price"
                onChange={onOptionChange}
                id={m._id}
                value={parseFloat(m.price).toFixed(2)}
                placeholder="Price"
              />
            </div>
            <div className="input-group ml-2">
              <div className="input-group-prepend"></div>
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                value={m.name}
                onChange={onOptionChange}
                id={m._id}
                name="name"
                placeholder="Title"
              />
            </div>
            <FontAwesomeIcon
              icon={faTrash}
              size="2x"
              color="red"
              className="mt-1 ml-2"
              onClick={() => onDeleteOption(m._id)}
            />
          </div>
        ))}
      </form>

      <button
        type="submit"
        className="btn btn-light btn-block "
        style={{ fontFamily: "poppins" }}
        onClick={onAddOption}
      >
        ADD NEW{" "}
        <FontAwesomeIcon icon={faPlusCircle} color="lightGreen" size="lg" />
      </button>

      <div
        className="d-flex justify-content-between fixed-bottom pl-3 pr-3 bg-light pt-3 pb-3 "
        style={{ marginBottom: 70, position: "" }}
      >
        <button
          type="submit"
          className="btn btn-dark mr-3 "
          style={{ fontFamily: "poppins" }}
          onClick={onOptionToggle}
        >
          BACK
        </button>
        <button
          type="submit"
          className="btn btn-light btn-block "
          onClick={onMenuSave}
          style={{
            fontFamily: "poppins",
            backgroundColor: "gold",
            color: "white",
          }}
        >
          SAVE <FontAwesomeIcon icon={faEdit} />
        </button>
      </div>
    </main>
  );
};

export default EditOptions;
