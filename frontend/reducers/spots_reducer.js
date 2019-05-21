import { RECEIVE_SINGLE_SPOT, RECEIVE_ALL_SPOTS, CREATE_SPOT, DESTROY_SPOT } from '../actions/spot_actions';

const spotsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = {};

  switch (action.type) {
    case RECEIVE_ALL_SPOTS:
      return Object.assign(newState, action.spots)
    case RECEIVE_SINGLE_SPOT:
      return action.spot;
    case CREATE_SPOT:
      return action.spot;
    case DESTROY_SPOT:
      let updatedState = Object.assign({}, state);
      delete updatedState[action.spotId];
      return updatedState;
    default:
      return state;
  }
};

export default spotsReducer;
