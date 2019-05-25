import { RECEIVE_SPOTS_ERRORS } from '../actions/spot_actions';

export default (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SPOTS_ERRORS:
            return action.errors;
        default:
            return state;
    }
};