export const RECEIVE_GEOLOCATION = 'RECEIVE_GEOLOCATION';

export const receiveGeolocation = (geolocation) => ({
  type: RECEIVE_GEOLOCATION,
  geolocation
});