import { RECEIVE_GEOLOCATION } from '../actions/location_filter_actions';

const geolocationReducer = (state = {address: ''}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_GEOLOCATION:
      return {address: action.geolocation}
    default:
      return state;
  }
}

export default geolocationReducer;


