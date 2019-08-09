import React, { Component } from "react";

import ReviewIndexItem from "./review_index_item";

class ReviewIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchReviews(this.props.match.params.spotId);
  }

  render() {
    const { reviews, deleteReview, currentUser } = this.props;

    if (!reviews) {
      return null;
    }
    const spotId = this.props.match.params.spotId;

    const reviewsList = Object.values(reviews).map(review => {
      return (
        <ReviewIndexItem
          key={review.id}
          review={review}
          deleteReview={deleteReview}
          currentUser={currentUser}
        />
      );
    });

    return <ul className="reviews_container">{reviewsList}</ul>;
  }
}

export default ReviewIndex;
