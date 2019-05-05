import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import moment from 'moment';
import { withRouter } from 'react-router-dom';


class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check_in: new Date(),
      check_out: new Date()
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllBookings();
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.props.currentUserId) {
      this.props.openModal('login')
    } else {
      const booking = Object.assign({}, this.state);
        booking.guest_id = this.props.currentUserId;
        booking.spot_id = this.props.match.params.spotId;
      this.props.makeBooking(booking)
        .then(() => this.props.fetchAllBookings())
        .then(() => this.props.history.push(`/users/${this.props.currentUserId}`));
      }  
    }

    handleDateChange(type) {
      return day => {
        let currentDay = moment(day).format("YYYY-MM-DD");
        this.setState({ [type]: currentDay });
        console.log(day)
      };
    }

  render() {
    const { spot } = this.props;

    // if (Object.values(this.props.bookings).length > 0) {
    //   Object.values(this.props.bookings).map(booking => {
    //     if (booking.guest_id === this.props.currentUserId) {

      return (
      <div className="widget_container">
        <form onSubmit={this.handleSubmit}>
          <div className="booking_widget">
          <div className="booking_banner">
            <h2>${spot.price}</h2>
            <p id="widget_per_night">per night</p>
          </div>
          <div className="booking_well">
            <div className="well_dates_guests">
              <div className="booking_checkin">
                <div className="label">Check in</div>
                    <DayPickerInput
                      value={moment(this.state.check_in).format("ddd, MMM Do")}
                      selected={this.state.check_in}
                      onDayChange={this.handleDateChange('check_in')}
                      selected={this.state.check_in}
                    />
                </div>
                <div className="booking_checkout">
                  <div className="label">Check out</div>

                    <DayPickerInput
                      value={moment(this.state.check_out).format("ddd, MMM Do")}
                      selected={this.state.check_in}
                      onDayChange={this.handleDateChange('check_out')}
                      selected={this.state.check_out}
                    />
                    
                  </div>
                  <div className="booking_guests">
                  <div className="label">Guests</div>
                    <span className="value">4</span>
                  </div>
                </div>
                <div className="datepickers">
                </div>
              <div className="booking_submit">
                <input className="widget_button" type="submit" value="Request to book"/>
              </div>
            </div>
          </div>
        </form>
        </div>
    )
      }
}


export default withRouter(Booking)
