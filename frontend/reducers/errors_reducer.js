import { combineReducers } from 'redux';
import session from './session_errors_reducer';
import spots from './spots_errors_reducer';
import bookings from './bookings_errors_reducer';

export default combineReducers({
    session,
    spots,
    bookings
});