import React, { Component } from "react";

class OriginFilter extends Component {
  render() {
    const { origins, onFilterOrigin } = this.props;
    return (
      <select
        className="custom-select mt-2 ml-2"
        id="inputGroupSelect01 "
        onChange={onFilterOrigin}
        name="origin"
      >
        <option value="select">Choose Origin...</option>
        {origins.map((origin) => (
          <React.Fragment key={origin._id}>
            <option value={origin.path}>{origin.name}</option>
          </React.Fragment>
        ))}
      </select>
    );
  }
}

export default OriginFilter;
