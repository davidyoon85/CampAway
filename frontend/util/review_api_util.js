export const fetchReviews = spotId => (
  $.ajax({
    method: 'GET',
    url: `api/spots/${spotId}/reviews`
  })
);

export const fetchReview = reviewId => (
  $.ajax({
    method: 'GET',
    url: `api/reviews/${reviewId}`
  })
);

export const createReview = (spotId, review) => (
  $.ajax({
    method: 'POST',
    url: `api/spots/${spotId}/reviews`,
    data: {review}
  })
);

export const updateReview = (spotId, review) => (
  $.ajax({
    method: 'PATCH',
    url: `api/spots/${spotId}/reviews/${review.id}`,
    data: {review}
  })
);

export const deleteReview = review => (
  $.ajax({
    method: 'DELETE',
    url: `api/reviews/${review.id}`
  })
);

//add receiveErrors util action