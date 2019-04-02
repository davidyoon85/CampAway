import { connect } from 'react-redux';
import SpotForm from './spot_form';
import { hostSpot } from '../../actions/spot_actions';

const mapStateToProps = (state) => ({
    state
});

const mapDispatchToProps = (dispatch) => ({
    hostSpot: () => dispatch(hostSpot())
});

export default connect(mapStateToProps, mapDispatchToProps)(SpotForm);