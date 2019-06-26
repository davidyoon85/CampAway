import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {
  constructor(props) {
        super(props)
    }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchReviews(this.props.match.params.spotId);
  }

  render() {
    if (!this.props.reviews) {
      return null;
    }
    const spotId = this.props.match.params.spotId

    const reviews = Object.values(this.props.reviews).map(review => {
      return (
        <ReviewIndexItem
          key={review.id}
          review={review}
          deleteReview={this.props.deleteReview}
          currentUser={this.props.currentUser}
        />
      )
    })

    return (
      <ul className="reviews_container">
        {reviews}
      </ul>
    );
  }
}

export default ReviewIndex;
