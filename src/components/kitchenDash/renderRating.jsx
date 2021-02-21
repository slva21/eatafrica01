import React, { Component } from "react";
import { getRating } from "../../ratings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

class RenderDashRating extends Component {
  state = {
    ratingsTexts: getRating(),
  };

  handleRenderRatingText = (stars) => {
    const text = this.state.ratingsTexts.find((m) => m.value == stars).rating;
    return text;
  };

  render() {
    const { rating, numberOfReviews } = this.props;
    return (
      <div>
        <small className="mr-1 ">{rating}</small>
        <FontAwesomeIcon icon={faStar} color="lightGreen" />
        <small style={{ color: "green" }}>({numberOfReviews})</small>
        <small className="ml-1">{this.handleRenderRatingText(rating)}</small>
      </div>
    );
  }
}

export default RenderDashRating;
