import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const EditForm1 = ({
  menu,
  categories,
  menuTypes,
  onOptionToggle,
  onMenuChange,
  onMenuSave,
}) => {
  return (
    <main>
      <form className="" style={{ position: "relative", marginBottom: 150 }}>
        <div className="form-group mt-2">
          <label htmlFor="title" style={{ fontFamily: "poppins" }}>
            Title
          </label>
          <input
            className="form-control"
            id="title"
            aria-describedby="title"
            value={menu.title}
            name="title"
            onChange={onMenuChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title" style={{ fontFamily: "poppins" }}>
            Price
          </label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span
                className="input-group-text"
                style={{ fontFamily: "poppins" }}
              >
                £
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Amount"
              name="price"
              onChange={onMenuChange}
              value={parseFloat(menu.price).toFixed(2)}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="decription" style={{ fontFamily: "poppins" }}>
            Description
          </label>
          <textarea
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={onMenuChange}
            height="100"
            value={menu.description}
            rows="5"
            cols="25"
            placeholder="This is the default text"
          />
        </div>

        <div className="form-group">
          <label
            htmlFor="exampleFormControlSelect1"
            style={{ fontFamily: "poppins" }}
          >
            Category
          </label>
          <select
            className="form-control"
            name="category"
            onChange={onMenuChange}
            value={menu.category}
          >
            {categories.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Type</label>
          <select
            className="form-control"
            id="exampleFormControlSelect1"
            name="type"
            onChange={onMenuChange}
            value={menu.type}
          >
            {menuTypes.map((m) => (
              <option
                key={m._id}
                defaultValue={menu.type === m._id}
                value={m._id}
              >
                {m.name.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </form>
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
          OPTIONS
        </button>
        <button
          onClick={onMenuSave}
          type="submit"
          className="btn btn-light btn-block "
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

export default EditForm1;
