import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const ReviewIndexItem = ({ review, deleteReview, currentUser }) => {
  if (review.user.id === currentUser) {
    return (
      <div className='review-index-item'>

      <div className='review-item-values'>
      <li className='review-user-name'>
            <div className="review_name">{review.user.first_name}</div>
            <div className="review_date">{moment(review.created_at).format("MMMM Do, YYYY")}</div>
          </li>

        <li className='review-user-description'>{review.description}</li>
      </div>

        <div className='delete-edit-review'>
          <Link className='delete-review-button' to={`/spots/${review.spot_id}/reviews/${review.id}`}>Edit</Link>
          <li><button className='delete-review-button' onClick={() => deleteReview(review.id)}>Delete</button></li>
        </div>

      </div>
    )
  } else {
    return (
      <div className='review-index-item'>

        <div className='review-item-values'>
          <li className='review-user-name'>
            <div className="review_name">{review.user.first_name}</div>
            <div className="review_date">{moment(review.created_at).format("MMMM Do, YYYY")}</div>
          </li>

          <li className='review-user-description'>{review.description}</li>
        </div>

      </div>
    )
  }
};

export default ReviewIndexItem;