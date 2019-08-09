import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const ReviewIndexItem = ({ review, deleteReview, currentUser }) => {
  if (review.user.id === currentUser) {
    let createDate = format(review.created_at, "MMMM Do, YYYY");
    return (
      <div className="review-index-item">
        <div className="review-item-values">
          <li className="review-user-name">
            <div className="review_name">{review.user.first_name}</div>
            <div className="review_date">{createDate}</div>
          </li>
          <li className="review-user-description">{review.description}</li>
        </div>
        <div className="delete-edit-review">
          <Link
            className="delete-review-button"
            to={`/spots/${review.spot_id}/reviews/${review.id}`}
          >
            Edit
          </Link>
          <li>
            <button
              className="delete-review-button"
              onClick={() => deleteReview(review.id)}
            >
              Delete
            </button>
          </li>
        </div>
      </div>
    );
  } else {
    let createDate = format(review.created_at, "MMMM Do, YYYY");
    return (
      <div className="review-index-item">
        <div className="review-item-values">
          <li className="review-user-name">
            <div className="review_name">{review.user.first_name}</div>
            <div className="review_date">{createDate}</div>
          </li>
          <li className="review-user-description">{review.description}</li>
        </div>
      </div>
    );
  }
};

export default ReviewIndexItem;
