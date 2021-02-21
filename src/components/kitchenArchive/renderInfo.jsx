import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faGlobeAfrica,
} from "@fortawesome/free-solid-svg-icons";

class RenderInfo extends Component {
  render() {
    const { info } = this.props;
    return (
      <React.Fragment>
        <div>
          <FontAwesomeIcon icon={faGlobeAfrica} color="lightBlue" />
          <small className="text-muted ml-1">{info.origin.path}</small>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="text-muted"
            size="xs"
          />
          <small className="text-muted ml-1">{info.city.name}</small>
        </div>
      </React.Fragment>
    );
  }
}

export default RenderInfo;
