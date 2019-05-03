import * as APIUtil from '../util/booking_api_util';

export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const RECEIVE_ALL_BOOKINGS = 'RECEIVE_ALL_BOOKINGS';
export const CREATE_BOOKING = 'CREATE_BOOKING';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';

export const fetchAllBookings = () => dispatch => (
    APIUtil.fetchBookings().then(
        bookings => {dispatch(receiveAllBookings(bookings))}
    )
)

export const makeBooking = (booking) => dispatch => (
    APIUtil.createBooking(booking).then(
      booking => {dispatch(receiveBooking(booking))}
    )
)

export const deleteBooking = (bookingId) => dispatch => (
    APIUtil.deleteBooking(bookingId).then(
        booking => {dispatch(removeBooking(booking))}
    )
)

export const receiveBooking = (booking) => ({
    type: RECEIVE_BOOKING,
    booking
})

export const receiveAllBookings = (bookings) => ({
  type: RECEIVE_ALL_BOOKINGS,
  bookings
})

export const removeBooking = (bookingId) => ({
  type: REMOVE_BOOKING,
  bookingId
})