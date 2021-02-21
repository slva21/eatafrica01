import React from "react";

const Credentials = ({ onSubmit, onChange }) => {
  return (
    <div className="card border-0 mt-2" style={{ width: "21.5rem" }}>
      <img
        src="https://t3.ftcdn.net/jpg/02/73/53/32/240_F_273533205_nL07ay0novw8AizElXHVtRF7j3YkdjSH.jpg"
        className="card-img-top"
        style={{ width: "100%", height: "auto" }}
      />
      <div className="card-body d-flex justify-content-center">
        <p className="card-text text-xl-center">YOU REPRESENT YOUR COUNTRY!</p>
      </div>

      <form className="" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            onChange={onChange}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            onChange={onChange}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
          />
        </div>
        <button
          type="submit"
          className="btn btn-dark "
          style={{ color: "white", width: "100%" }}
        >
          LOGIN
        </button>
      </form>
      <div className="d-flex justify-content-center ">
        <p className>or</p>
      </div>
      <button
        className="btn btn-light mt-n2"
        style={{ backgroundColor: "gold", color: "white" }}
      >
        CREATE A KITCHEN!
      </button>
    </div>
  );
};

export default Credentials;
