import { RECEIVE_SINGLE_SPOT, RECEIVE_ALL_SPOTS } from '../actions/spot_actions';

const spotsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_SPOTS:
      return action.payload.spots;
    case RECEIVE_SINGLE_SPOT:
      return action.payload.spots;
    default:
      return state;
  }
};

export default spotsReducer;