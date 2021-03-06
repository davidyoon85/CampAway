export const fetchBookings = () =>
  $.ajax({
    method: "GET",
    url: "api/bookings"
  });

export const createBooking = booking => {
  return $.ajax({
    method: "POST",
    url: `api/spots/${booking.spot_id}/bookings`,
    data: { booking }
  });
};

export const deleteBooking = id => {
  return $.ajax({
    method: "DELETE",
    url: `api/bookings/${id}`
  });
};
