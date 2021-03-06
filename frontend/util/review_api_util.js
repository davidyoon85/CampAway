export const fetchReviews = spotId =>
  $.ajax({
    method: "GET",
    url: `api/spots/${spotId}/reviews`
  });

export const fetchReview = reviewId =>
  $.ajax({
    method: "GET",
    url: `api/reviews/${reviewId}`
  });

export const createReview = (spotId, review) => {
  return $.ajax({
    method: "POST",
    url: `api/spots/${spotId}/reviews`,
    data: { review }
  });
};

export const updateReview = (spotId, review) => {
  return $.ajax({
    method: "PATCH",
    url: `api/spots/${spotId}/reviews/${review.id}`,
    data: { review }
  });
};

export const deleteReview = reviewId => {
  return $.ajax({
    method: "DELETE",
    url: `api/reviews/${reviewId}`
  });
};
