import { UPDATE_FILTER } from '../actions/location_filter_actions';

const locationFilterReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case UPDATE_FILTER:
      return action.value
    default:
      return state;
  }
};

export default locationFilterReducer;