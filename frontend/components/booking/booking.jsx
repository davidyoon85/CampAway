import React, { useState } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { formatDate, parseDate } from "react-day-picker/moment";
import { withRouter } from "react-router-dom";
import { format, differenceInDays } from "date-fns";

function Booking(props) {
  const [numGuests, setNumGuests] = useState(1);
  const [checkIn, setcheckIn] = useState(null);
  const [checkOut, setcheckOut] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (!props.currentUserId) {

      props.openModal("login");
    } else {

      const num_days = differenceInDays(checkOut, checkIn);
      const booking = {
        num_guests: numGuests,
        check_in: checkIn,
        check_out: checkOut,
        guest_id: props.currentUserId,
        spot_id: props.match.params.spotId,
        total_price: props.spot.price * num_days
      }

      props
        .makeBooking(booking)
        .then(() => props.fetchAllBookings())
        .then(() =>
          props.history.push(`/users/${props.currentUserId}`)
        );
    }
  }

  function handleDateChange(type) {
    return day => {
      let currentDay = format(day, "YYYY-MM-DD");

      if (type === 'checkIn') {
        setcheckIn(currentDay);
      } else {
        setcheckOut(currentDay);
      }
    };
  }

  function nextDay(day) {
    const nextDay = new Date(day);
    nextDay.setDate(day.getDate() + 2);

    return nextDay;
  }

  function handleNumGuests(change) {

    return e => {
      if (change === "+" && numGuests + 1 <= props.spot.group_size) {

        setNumGuests(numGuests + 1)
      } else if (change === "-" && numGuests - 1 >= 1) {

        setNumGuests(numGuests - 1)
      }
    };
  }

  function renderErrors() {
    return (
      <ul className="booking-errors">
        {props.errors.map((error, idx) => (
          <li key={`error-${idx}`} className="bookings_error">
            &#10060; {error}.
          </li>
        ))}
      </ul>
    );
  }

  let today = new Date();
  let checkInDate = checkIn ? nextDay(new Date(checkIn)) : nextDay(today);

  return (
    <div className="widget_container">
      <form onSubmit={handleSubmit}>
        <div className="booking_widget">
          <div className="booking_banner">
            <h2>${props.spot && props.spot.price}</h2>
            <p id="widget_per_night">per night</p>
          </div>
          <div className="booking_well">
            <div className="well_dates_guests">
              <div className="booking_checkin">
                <div className="label">Check in</div>
                <DayPickerInput
                  formatDate={formatDate}
                  parseDate={parseDate}
                  onDayChange={handleDateChange("checkIn")}
                  placeholder="Select Date"
                  dayPickerProps={{
                    disabledDays: {
                      before: today
                    }
                  }}
                />
              </div>
              <div className="booking_checkout">
                <div className="label">Check out</div>

                <DayPickerInput
                  formatDate={formatDate}
                  parseDate={parseDate}
                  onDayChange={handleDateChange("checkOut")}
                  placeholder="Select Date"
                  dayPickerProps={{
                    month: checkInDate,
                    disabledDays: {
                      before: checkInDate
                    }
                  }}
                />
              </div>

              <div className="booking_guests">
                <div className="label">Guests</div>
                <div className="widget_guests">
                  <a onClick={handleNumGuests("-")}> - </a>
                  <p className="booking_num_guests">
                    {numGuests}
                  </p>
                  <a onClick={handleNumGuests("+")}> + </a>
                </div>
              </div>
            </div>

            <div className="booking_error_message">{renderErrors()}</div>

            <div className="booking_submit">
              <input
                className="widget_button"
                type="submit"
                value="Request to book"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default withRouter(Booking);
