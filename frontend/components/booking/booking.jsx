import React from 'react';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check_in: '',
      check_out: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const booking = Object.assign({}, this.state);
    booking.guest_id = this.props.currentUserId;
    booking.listing_id = this.props.match.params.spotId
    this.props.createBooking(booking)
      .then(() => this.props.requestAllBookings())
      .then(() => this.props.history.push(`/users/${this.props.currentUserId}`));
  }

  handleDateChange (type) {
    this.setState({[type]: [e.currentTarget.value]})
  }

  render() {
    return (
      <h1>hi</h1>
    )
    // const spotId = this.props.match.params.spotId;
    // const currentSpot = this.props.spots[spotId];
    // const today = new Date().toJSON().slice(0, 10).toString();

    // if (this.props.match.params['spotId'] === undefined) return null

    // if (!this.props.currentUserId) {
    //   return (
    //     <div>
    //       <button className="booking-login sticky-button" onClick={() => this.props.openModal("login")}>Log In to Book</button>
    //     </div>
    //   )
    // } else {
    //   return (
    //     <div className="booking-form-container">
    //       <form onSubmit={this.handleSubmit}>
    //         <div className="daily-price-header">
    //           ${currentSpot.price}<br/>
    //           <p className="per-night">per night</p>
    //         </div>
    //         <div className="booking-form">
    //           <br />
    //           <div className="booking-details">
    //             <div className="booking-date-input">
    //               <h5 className="check">Check in</h5>
    //               <input type="date"
    //                 min={ today }
    //                 onChange={this.update("check_in")}
    //                 className="booking-check-in booking-date"
    //               />
    //             </div>
    //             <div className="booking-date-input">
    //               <h5 className="check">Check out</h5>
    //               <input type="date"
    //                 min={this.state.check_in}
    //                 onChange={this.update("check_out")}
    //                 className="booking-check-out booking-date"
    //               />  
    //             </div>
    //           </div>
    //           <br />
    //           <input className="booking-submit" type="submit" value="Request to book" />
    //         </div>
    //         <br />
    //       </form>
    //     </div>
      // );
    // }
  }
}

export default withRouter(Booking)