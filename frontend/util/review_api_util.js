export const fetchReviews = spotId => (
  $.ajax({
    method: 'GET',
    url: `api/spots/${spotId}/reviews`
  })
);

export const fetchAllReviews = () => (
  $.ajax({
    method: "GET",
    url: "api/reviews"
  })
)

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

export const deleteReview = reviewId => (
  $.ajax({
    method: 'DELETE',
    url: `api/reviews/${reviewId}`
  })
);