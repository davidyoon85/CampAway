import { combineReducers } from 'redux';
import modal from './modal_reducer';
import geoLocation from './geolocation_reducer';
import mapBounds from './location_filters_reducer';
import filters from './filters_reducer';

export default combineReducers({
    modal,
    geoLocation,
    filters,
    mapBounds
});