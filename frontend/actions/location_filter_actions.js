import * as APIUtil from '../actions/spot_actions';
import { requestAllSpots } from './spot_actions';

export const RECEIVE_GEOLOCATION = 'RECEIVE_GEOLOCATION';

export const receiveGeolocation = (geolocation) => ({
  type: RECEIVE_GEOLOCATION,
  geolocation
});
