import * as APIUtil from '../actions/spot_actions';
import { fetchAllSpots } from './spot_actions';

export const UPDATE_FILTER = 'UPDATE_FILTER';
export const RECEIVE_GEOLOCATION = 'RECEIVE_GEOLOCATION';

export const receiveGeolocation = (geolocation) => ({
  type: RECEIVE_GEOLOCATION,
  geolocation
});

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return fetchAllSpots(getState().ui.mapBounds)(dispatch);
}