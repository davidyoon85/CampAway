import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import ReviewIndex from './review_index';

import { fetchReviews, fetchReview, deleteReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  return{
    reviews: state.entities.reviews,
    currentUser: state.session.id
  };
};

const mapDispatchToProps = dispatch => ({
  fetchReviews: spotId => dispatch(fetchReviews(spotId)),
  fetchReview: reviewId => dispatch(fetchReview(reviewId)),
  deleteReview: reviewId => dispatch(deleteReview(reviewId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewIndex));
