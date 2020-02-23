import React, { useState, useEffect } from "react";

function EditReview(props) {
  const [review, setReview] = useState(props.review);

  useEffect(() => {
    window.scrollTo(0, 0);
    props.fetchReview(props.match.params.reviewId);
    props.fetchSingleSpot(props.match.params.spotId);

    if (props.review) setReview(props.review)
  }, [props.review])

  function update() {
    return e => {
      setReview(e.target.value)
    };
  }

  function handleSubmit(e) {
    e.preventDefault();

    let payload = { 'description': description }
    props.updateReview(props.match.params.spotId, payload)
      .then(() => goBack());
  }

  function goBack() {
    props.history.goBack();
  }

  return (
    <div className="create_review_form">
      <div className="review_spot_title">{props.spot.title}</div>
      <form className="review_form" onSubmit={handleSubmit}>
        <textarea
          className="review_description"
          cols="50"
          rows="10"
          maxLength="500"
          value={state.description}
          onChange={update()}
        />
        <input
          className="create_review_submit"
          type="submit"
          value="Submit Review"
        />
      </form>
    </div>
  );

}

export default EditReview;