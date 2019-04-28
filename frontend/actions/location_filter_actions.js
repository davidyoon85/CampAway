import * as APIUtil from '../util/spot_api_util';
import { fetchAllSpots } from './spot_actions';

export const RECEIVE_GEOLOCATION = 'RECEIVE_GEOLOCATION';

export const receiveGeolocation = (geolocation) => ({
  type: RECEIVE_GEOLOCATION,
  geolocation
});