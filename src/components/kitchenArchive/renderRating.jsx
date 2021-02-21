import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { getRating } from "../../ratings";

class RenderRating extends Component {
  state = {
    ratingsTexts: getRating(),
  };

  handleRenderRatingText = (stars) => {
    const text = this.state.ratingsTexts.find((m) => m.value == stars).rating;
    return text;
  };

  render() {
    const { stars } = this.props;

    if (stars === 0) {
      return (
        <div>
          <FontAwesomeIcon icon={faStar} color="lightGreen" />
          <small>No Ratings</small>
        </div>
      );
    }
    return (
      <div>
        {[...Array(+stars).keys()].map((n) => (
          <React.Fragment key={n + 1}>
            <FontAwesomeIcon icon={faStar} color="lightGreen" />
          </React.Fragment>
        ))}
        <small className=" ml-1 text-muted">
          {this.handleRenderRatingText(stars)}
        </small>
      </div>
    );
  }
}

export default RenderRating;
