import { connect } from "react-redux";
import MasterForm from "./master_form";
import { hostSpot } from "../../actions/spot_actions";

const mapStateToProps = state => ({
  state,
  user: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => {
  return {
    hostSpot: spot => dispatch(hostSpot(spot))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MasterForm);
