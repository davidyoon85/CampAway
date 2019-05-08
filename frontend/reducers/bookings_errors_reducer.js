import { RECEIVE_BOOKING_ERRORS } from '../actions/booking_actions';

const BookingsErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BOOKING_ERRORS:
         action.errors;
        default:
            return state;
    }
};

export default BookingsErrorsReducer;