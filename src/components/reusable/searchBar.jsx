import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div className="input-group mb-3 mt-2 ml-2">
        <input
          type="text"
          className="form-control"
          placeholder="Search continent"
          aria-label="Username"
          aria-describedby="basic-addon1"
          autoFocus
        />
      </div>
    );
  }
}

export default SearchBar;
