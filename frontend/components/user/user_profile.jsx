import React, { Component } from "react";

import { Link } from "react-router-dom";
import { geocodeByAddress } from "react-places-autocomplete";
import { format } from "date-fns";

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: "",
      state: "",
      zipCode: this.props.currentUser.zip_code,
      trips: true,
      reviews: false
    };

    this.tripsButton = this.tripsButton.bind(this);
    this.reviewsButton = this.reviewsButton.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchAllBookings();
    this.props.fetchAllSpots();
    this.getAddressInfoByZip(this.state.zipCode.toString());
  }

  tripsButton(e) {
    e.preventDefault();
    if (this.state.trips === false) {
      this.setState({ trips: true, reviews: false });
    }
  }

  reviewsButton(e) {
    const { reviews, trips } = this.state;
    e.preventDefault();
    if (reviews === false) {
      this.setState({ trips: !trips, reviews: !reviews });
    }
  }

  getAddressInfoByZip(zip) {
    debugger;
    geocodeByAddress(zip).then(results => {
      debugger;
      return this.setState({
        city: results[0].address_components[1].long_name,
        state: results[0].address_components[2].short_name
      });
    });
  }

  getUserReviews() {
    const reviews = [];
    this.props.spots.forEach(spot => {
      if (spot.reviews.length) {
        reviews.push(...spot.reviews);
      }
    });

    const userReviews = reviews.filter(
      spot => spot.author == this.props.match.params.userId
    );

    return userReviews;
  }

  render() {
    const { bookings, deleteReview, deleteBooking } = this.props;

    let userReviews = this.getUserReviews();
    let numTrips = Object.keys(bookings).length;
    let tripName = "";
    let numReviews = userReviews.length;
    let reviewName = "";
    let startDate = format(this.props.currentUser.created_at, "MMMM YYYY");

    numTrips === 1 ? (tripName = "Trip") : (tripName = "Trips");
    numReviews === 1 ? (reviewName = "Review") : (reviewName = "Reviews");

    if (Object.values(bookings).length === 0) {
      return (
        <div className="user_profile_container">
          <div className="user_booking_spot">
            <aside className="user_profile_sidebar">
              <div className="bio_panel">
                <h3 id="bio_panel_name">
                  {this.props.currentUser.first_name}!
                </h3>
                <br />
                <div className="bio_sections">
                  <span id="heart_icon" className="fas fa-heart" />
                  <nobr>CampAwayer since {startDate}</nobr>
                </div>
                <br />
                <div className="bio_sections">
                  <span id="marker_icon" className="fas fa-map-pin" />
                  <nobr>
                    From{" "}
                    {this.state.city
                      ? this.state.city + ", " + this.state.state
                      : "Invalid Zip Code"}
                  </nobr>
                </div>
              </div>
              <div className="panel_body">
                <h3 id="panel_body_header">Trusted Campawayer</h3>
                <br />
                <span id="email_icon" className="far fa-check-circle" />
                Email address
                <br />
                <span id="facebook_icon" className="far fa-check-circle" />
                Facebook
              </div>
            </aside>
            <div className="user_profile_booking_status">
              <div className="user_status_header">
                No current trips. Let's{" "}
                <Link className="user_link_index" to={"/spots"}>
                  {" "}
                  get you outside!
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      if (this.state.trips) {
        let bookingArr = Object.values(bookings);
        bookingArr.sort(function compare(b, a) {
          var dateA = new Date(a.check_in);
          var dateB = new Date(b.check_in);
          return dateA - dateB;
        });

        return (
          <div className="user_profile_container">
            <div className="user_booking_spot">
              <aside className="user_profile_sidebar">
                <div className="bio_panel">
                  <h3 id="bio_panel_name">
                    {this.props.currentUser.first_name}!
                  </h3>
                  <br />
                  <div className="bio_sections">
                    <span id="heart_icon" className="fas fa-heart" />
                    <nobr>CampAwayer since {startDate}</nobr>
                  </div>
                  <br />
                  <div className="bio_sections">
                    <span id="marker_icon" className="fas fa-map-pin" />
                    <nobr>
                      From {this.state.city + ", " + this.state.state}
                    </nobr>
                  </div>
                </div>
                <div className="panel_body">
                  <h3 id="panel_body_header">Trusted Campawayer</h3>
                  <br />
                  <span id="email_icon" className="far fa-check-circle" />
                  Email address
                  <br />
                  <span id="facebook_icon" className="far fa-check-circle" />
                  Facebook
                </div>
              </aside>

              <ul className="booked_spots_list">
                <div className="booked_spots_header">
                  <div className="booked_spots_number">
                    {numTrips}

                    <p
                      name="trips"
                      className="booked_spots_trips_active"
                      onClick={e => this.tripsButton(e)}
                    >
                      {tripName}
                    </p>
                  </div>
                  <div className="booked_user_reviews">
                    {numReviews}
                    <p
                      name="reviews"
                      className="booked_reviews_number"
                      onClick={e => this.reviewsButton(e)}
                    >
                      {reviewName}
                    </p>
                  </div>
                </div>
                {bookingArr.map(booking => {
                  let checkIn = format(booking.check_in, "ddd, MMM Do");
                  let checkOut = format(booking.check_out, "ddd, MMM Do");

                  return (
                    <li className="booked_spot_items" key={booking.id}>
                      <Link
                        className="user_booking_title"
                        to={`/spots/${booking.spot.id}`}
                      >
                        {booking.spot.title}
                      </Link>
                      <div className="user_booking_dates">
                        <img
                          className="booking_img"
                          src={booking.spot.spotImg}
                          alt=""
                        />
                        <div className="user_booking_details">
                          <p>
                            <nobr className="user_booking_subheader">
                              Check In:
                            </nobr>{" "}
                            {checkIn}
                          </p>
                          <p>
                            <nobr className="user_booking_subheader">
                              Check Out:
                            </nobr>{" "}
                            {checkOut}
                          </p>
                          <p>
                            <nobr className="user_booking_subheader">
                              Number of Guests:
                            </nobr>{" "}
                            {booking.num_guests}
                          </p>
                          <p>
                            <nobr className="user_booking_subheader">
                              Total Price:
                            </nobr>{" "}
                            ${booking.total_price}
                          </p>
                        </div>
                      </div>
                      <button
                        className="booking_delete_button"
                        onClick={() => deleteBooking(booking.id)}
                      >
                        Delete
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      } else {
        let reviewArr = userReviews;
        reviewArr.sort(function compare(b, a) {
          var dateA = new Date(a.created_at);
          var dateB = new Date(b.created_at);
          return dateB - dateA;
        });

        return (
          <div className="user_profile_container">
            <div className="user_booking_spot">
              <aside className="user_profile_sidebar">
                <div className="bio_panel">
                  <h3 id="bio_panel_name">
                    {this.props.currentUser.first_name}!
                  </h3>
                  <br />
                  <div className="bio_sections">
                    <span id="heart_icon" className="fas fa-heart" />
                    <nobr>CampAwayer since {startDate}</nobr>
                  </div>
                  <br />
                  <div className="bio_sections">
                    <span id="marker_icon" className="fas fa-map-pin" />
                    <nobr>
                      From {this.state.city + ", " + this.state.state}
                    </nobr>
                  </div>
                </div>
                <div className="panel_body">
                  <h3 id="panel_body_header">Trusted Campawayer</h3>
                  <br />
                  <span id="email_icon" className="far fa-check-circle" />
                  Email address
                  <br />
                  <span id="facebook_icon" className="far fa-check-circle" />
                  Facebook
                </div>
              </aside>

              <ul className="booked_spots_list">
                <div className="booked_spots_header">
                  <div className="booked_spots_number">
                    {numTrips}
                    <p
                      name="trips"
                      className="booked_spots_trips"
                      onClick={e => this.tripsButton(e)}
                    >
                      {tripName}
                    </p>
                  </div>
                  <div className="booked_user_reviews">
                    {numReviews}
                    <p
                      name="reviews"
                      className="booked_reviews_number_active"
                      onClick={e => this.reviewsButton(e)}
                    >
                      {reviewName}
                    </p>
                  </div>
                </div>
                {reviewArr.reverse().map(review => {
                  let reviewDate = format(review.created_at, "MMMM Do, YYYY");
                  return (
                    <li className="booked_spot_items" key={review.id}>
                      <div className="user_booking_details">
                        <div>
                          <nobr className="user_booking_subheader">
                            {reviewDate}
                          </nobr>
                        </div>
                        <div className="user_booking_review">
                          {review.description}
                        </div>
                        <div className="user_booking_review_buttons">
                          <Link
                            className="delete-review-button"
                            to={`/spots/${review.spot_id}/reviews/${review.id}`}
                          >
                            Edit
                          </Link>
                          <button
                            className="delete-review-button"
                            onClick={() => deleteReview(review.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      }
    }
  }
}

export default UserProfile;
