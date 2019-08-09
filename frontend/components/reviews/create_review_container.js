import { connect } from "react-redux";
import { withRouter } from "react-router";
import CreateReview from "./create_review";
import {
  fetchReviews,
  fetchReview,
  createReview,
  deleteReview
} from "../../actions/review_actions";
import { fetchSingleSpot } from "../../actions/spot_actions";

const mapStateToProps = (state, ownProps) => ({
  reviews: state.entities.reviews,
  current_user: state.session.id,
  spot: state.entities.spots[ownProps.match.params.spotId]
});

const mapDispatchToProps = dispatch => ({
  fetchReviews: spotId => dispatch(fetchReviews(spotId)),
  fetchReview: reviewId => dispatch(fetchReview(reviewId)),
  createReview: (spotId, review) => dispatch(createReview(spotId, review)),
  deleteReview: reviewId => dispatch(deleteReview(reviewId)),
  fetchSingleSpot: spotId => dispatch(fetchSingleSpot(spotId))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CreateReview)
);
