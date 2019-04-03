import { RECEIVE_SINGLE_SPOT, RECEIVE_ALL_SPOTS, CREATE_SPOT, DESTROY_SPOT } from '../actions/spot_actions';

const spotsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_SPOTS:
      return action.spots;
    case RECEIVE_SINGLE_SPOT:
      return action.spot;
    case CREATE_SPOT:
      return action.spot;
    case DESTROY_SPOT:
      let newState = Object.assign({}, state);
      delete newState[action.spotId];
      return newState;
    default:
      return state;
  }
};

export default spotsReducer;
