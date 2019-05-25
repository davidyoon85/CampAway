import * as APIUtil from '../util/booking_api_util';

export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const RECEIVE_ALL_BOOKINGS = 'RECEIVE_ALL_BOOKINGS';
export const CREATE_BOOKING = 'CREATE_BOOKING';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';
export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS';

export const fetchAllBookings = () => dispatch => (
  APIUtil.fetchBookings().then(
    bookings => {
      return dispatch(receiveAllBookings(bookings))
    }
  )
)

export const makeBooking = (booking) => dispatch => (
  APIUtil.createBooking(booking).then(
    booking => {
      return dispatch(receiveBooking(booking))
    }
  )
)

export const deleteBooking = (bookingId) => dispatch => (
  APIUtil.deleteBooking(bookingId).then(
    booking => {
      dispatch(removeBooking(bookingId))
    }
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

export const receiveBookingErrors = (errors) => ({
  type: RECEIVE_BOOKING_ERRORS,
  errors
})