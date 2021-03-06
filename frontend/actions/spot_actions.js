import * as APIUtil from '../util/spot_api_util';

export const RECEIVE_SINGLE_SPOT = 'RECEIVE_SINGLE_SPOT';
export const RECEIVE_ALL_SPOTS = 'RECEIVE_ALL_SPOTS';
export const CREATE_SPOT = 'CREATE_SPOT';
export const DESTROY_SPOT = 'DESTROY_SPOT';
export const RECEIVE_SPOTS_ERRORS = 'RECEIVE_SPOTS_ERRORS';

export const fetchSingleSpot = (id) => dispatch => (
  APIUtil.fetchSingleSpot(id).then(spot => dispatch(receiveSingleSpot(spot)))
);

export const fetchAllSpots = (bounds) => dispatch => (
  APIUtil.fetchSearchSpots(bounds).then(spots => dispatch(receiveAllSpots(spots)))
);

export const hostSpot = (spot) => dispatch => (
  APIUtil.hostSpot(spot).then(spot => dispatch(createSpot(spot))
  )
);

export const deleteSpot = (spotId) => dispatch => (
  APIUtil.deleteSpot(spotId).then(spotId => dispatch(destroySpot(spotId)))
);

export const receiveSpotErrors = errors => ({
  type: RECEIVE_SPOTS_ERRORS,
  errors
});

const receiveSingleSpot = spot => ({
  type: RECEIVE_SINGLE_SPOT,
  spot
});

const receiveAllSpots = (spots) => ({
  type: RECEIVE_ALL_SPOTS,
  spots
});

const createSpot = (spot) => ({
  type: CREATE_SPOT,
  spot
});

const destroySpot = (spotId) => ({
  type: DESTROY_SPOT,
  spotId
});

