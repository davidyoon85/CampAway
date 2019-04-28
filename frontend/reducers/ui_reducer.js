import { combineReducers } from 'redux';

import modal from './modal_reducer';
import geoLocation from './geolocation_reducer';

export default combineReducers({
    modal,
    geoLocation
});