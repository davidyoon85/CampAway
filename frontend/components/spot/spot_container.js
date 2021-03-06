import { connect } from "react-redux";
import Spot from "./spot";
import { deleteSpot, fetchSingleSpot } from "../../actions/spot_actions";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
  const spot = state.entities.spots[ownProps.match.params.spotId] || {};
  const currentUserId = state.session.id;
  const numReviews = Object.values(state.entities.reviews).length;

  return {
    spot,
    currentUserId,
    numReviews
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSpot: id => dispatch(fetchSingleSpot(id)),
  deleteSpot: spotId => dispatch(deleteSpot(spotId)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Spot);
