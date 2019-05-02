import React from 'react';

const ReviewIndexItem = ({ review, deleteReview, currentUser }) => {
  if (review.user.id === currentUser) {
    return (
      <div className='review-index-item'>

      <div className='review-item-values'>
        <li className='review-user-name'>{review.user.first_name}</li>
        <li className='review-user-description'>{review.description}</li>
      </div>

        <div className='delete-review-opt'>
          <li><button className='delete-review-button' onClick={() => deleteReview(review)}>Delete</button></li>
        </div>

      </div>
    )
  } else {
    return (
      <div className='review-index-item'>

        <div className='review-item-values'>
          <li className='review_user_name'>{review.user.first_name}</li>

          <li className='review-user-description'>{review.description}</li>
        </div>

      </div>
    )
  }
};

export default ReviewIndexItem;