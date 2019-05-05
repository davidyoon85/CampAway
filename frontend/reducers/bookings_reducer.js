import merge from 'lodash/merge';

import { RECEIVE_BOOKING, RECEIVE_ALL_BOOKINGS, CREATE_BOOKING, REMOVE_BOOKING } from '../actions/booking_actions';

const bookingsReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = {};

    switch (action.type) {
        case RECEIVE_BOOKING:
        return action.booking
        case RECEIVE_ALL_BOOKINGS:
            return action.bookings || {};
        case CREATE_BOOKING:
            return merge(newState, state, {booking: action.booking})
        case REMOVE_BOOKING:
            let updatedState = merge(newState, state);
            delete updatedState[action.bookingId];
            return updatedState;
        default:
            return state;
    }
}

export default bookingsReducer;