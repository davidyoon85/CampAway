import React, { useState, useEffect } from "react";

function CreateReview(props) {
  const [description, setDescription] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0);
    props.fetchSingleSpot(props.match.params.spotId);
  }, [])

  function update() {
    return e => {
      setDescription(e.target.value)
    };
  }

  function handleSubmit(e) {
    e.preventDefault();

    let payload = { 'description': description }
    props.createReview(props.match.params.spotId, payload)
      .then(() =>
        props.history.push(`/spots/${props.match.params.spotId}`)
      );
  }

  if (!props.spot) {

    return null;
  } else {

    return (
      <div className="create_review_form">
        <div className="review_spot_title">{props.spot.title}</div>
        <form className="review_form" onSubmit={handleSubmit}>
          <textarea
            className="review_description"
            cols="50"
            rows="10"
            maxLength="500"
            value={description}
            onChange={update()}
            placeholder="Leave a review about your experience here!"
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


}

export default CreateReview;