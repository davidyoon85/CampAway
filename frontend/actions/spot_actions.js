import * as APIUtil from '../util/spot_api_util';

export const RECEIVE_SINGLE_SPOT = 'RECEIVE_SINGLE_SPOT';
export const RECEIVE_ALL_SPOTS = 'RECEIVE_ALL_SPOTS';

export const fetchSingleSpot = (id) => dispatch => (
    APIUtil.fetchSingleSpot(id).then(spot => dispatch(receiveSingleSpot(spot)))
);

export const fetchAllSpots = () => dispatch => (
    APIUtil.fetchAllSpots().then(spots => dispatch(receiveAllSpots(spots)))
  );

const receiveAllSpots = (spots) => ({
    type: RECEIVE_ALL_SPOTS,
    spots
  });

const receiveSingleSpot = spot => ({
    type: RECEIVE_SINGLE_SPOT,
    spot
});