import { connect } from 'react-redux';
import { fetchReview, updateReview, deleteReview } from '../../actions/review_actions';
import { fetchSingleSpot } from '../../actions/spot_actions';
import EditReview from './edit_review';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  return {
    reviews: state.entities.reviews,
    review: state.entities.reviews[ownProps.match.params.reviewId],
    current_user: state.session.id,
    spot: state.entities.spots[ownProps.match.params.spotId],
  }
};

const mapDispatchToProps = dispatch => ({
  fetchReview: reviewId => dispatch(fetchReview(reviewId)),
  updateReview: (spotId, review) => dispatch(updateReview(spotId, review)),
  deleteReview: reviewId => dispatch(deleteReview(reviewId)),
  fetchSingleSpot: spotId => dispatch(fetchSingleSpot(spotId))
});

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(EditReview));