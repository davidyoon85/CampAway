import React, { useEffect } from "react";

import ReviewIndexItem from "./review_index_item";

function ReviewIndex(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
    props.fetchReviews(props.match.params.spotId);
  }, [])

  const { reviews, deleteReview, currentUser } = props;

  if (!reviews) {
    return null;
  }

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

export default ReviewIndex;