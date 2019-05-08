import React from 'react';
import { withRouter } from 'react-router-dom';

import PhotoSlideshow from './photo_slideshow';
import ReviewIndexContainer from '../reviews/review_index_container';
import BookingContainer from '../booking/booking_container';

class Spot extends React.Component {
  constructor(props) {
    super(props);
   
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.spotId);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteSpot(this.props.match.params.spotId).then(response => {
      this.props.history.push('/spots');
    });
  }

  handleClick(e) {
    e.preventDefault();
    if (!this.props.currentUserId) {
      this.props.openModal('login')
    } else {
      this.props.history.push(`/spots/${this.props.spot.id}/review/new`);
    }
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   if (!this.props.currentUserId) {
  //     this.props.openModal('login')
  //   } else {
  //     const booking = Object.assign({}, this.state);
  //       booking.guest_id = this.props.currentUserId;
  //       booking.spot_id = this.props.match.params.spotId;
  //     this.props.makeBooking(booking).then(response => {
  //       this.props.history.push(`/users/${this.props.currentUserId}`);
  //     }  
  //     )
  //   }
  // }

  render() {
    const { spot } = this.props;
    if (Object.values(spot).length === 0) {
      return (
        null
        )
      } else {
        
        const { firstname } = this.props.spot.user;
        return (
      <>
        <main className="spot_main_section">
          <div className="photo_slider">
            <PhotoSlideshow spot={spot} />
          </div>
          <div className="spot_page">

            <div className="spot_div_main">
                <div className="spot_div">
                  <h1 className="spot_title">{spot.title}</h1>
                  
                  {
                    spot.host_id === this.props.currentUserId ?
                      <button className="delete_spot_button" 
                      onClick={this.handleDelete.bind(this)}>Delete Spot</button>
                      :
                      null
                  }

                </div>

                <div className="spot_div">
                  <div className="hosted_container">
                    <nobr className="hosted_by_title">Hosted By</nobr><br/>
                    <nobr className="host_name">{spot.user.first_name + " " + spot.user.last_name[0] + "."}</nobr>
                  </div>
                  <p className="spot_body">{spot.body}</p>
                </div>

                <div className="spot_div" id="spot_details">
                  <div className="spot_detail_header">
                    Details
                  </div>

                  <div id="spot_details_subsection">
                    <div className="spot_div_details">
                      <ul>
                        <li className="test">
                          <nobr className="bold">Max Capacity: </nobr>
                          {spot.group_size}
                        </li><p></p>
                        <li>
                          <nobr className="bold">Daily Cost: </nobr>
                          ${spot.price}
                        </li>
                      </ul>
                    </div>
                    <div className="spot_div_details">
                      <ul>
                        <li>
                          <nobr className="bold">Check In After: </nobr>
                          {spot.check_in}
                        </li><p></p>
                        <li>
                          <nobr className="bold">Check Out Before: </nobr>
                          {spot.check_out}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="spot_section">
                  <div className="spot_div_info">
                    <div>
                      <p className="spot_section_title">
                        Campsite area
                      </p>
                      <ul className="spot_subsection">

                        <li>
                          {
                            spot.tent ?
                              <span>
                                <img src="https://image.flaticon.com/icons/svg/1535/1535412.svg" />
                                <p> Tent provided </p>
                              </span>
                              :
                              <span>
                                <img src="https://image.flaticon.com/icons/svg/678/678406.svg" />
                                <p> Bring your own tents </p>
                              </span>
                          }
                        </li>

                        <li>
                          <span>
                            <img src="https://image.flaticon.com/icons/svg/1535/1535442.svg" />
                            <p> {spot.sites} sites </p>
                          </span>
                        </li>

                        <li>
                          <span>
                            <img src="https://image.flaticon.com/icons/svg/58/58038.svg" />
                            <p> Up to {spot.group_size} guests per site </p>
                          </span>
                        </li>

                        <li>
                          {
                            spot.parking ?
                              <span>
                                <img src="https://image.flaticon.com/icons/svg/818/818383.svg" />
                                <p> Parking</p>
                              </span>
                              :
                              <span>
                                <img src="https://image.flaticon.com/icons/svg/652/652339.svg" />
                                <p> No parking</p>
                              </span>
                          }
                        </li>

                      </ul>
                    </div>
                  </div>

                  <div className="spot_div_info">
                    <div>
                      <p className="spot_section_title">
                        Essentials
                      </p>
                      <ul className="spot_subsection">
                        <li>
                          {
                            spot.campfire ?
                              <span>
                                <img src="https://image.flaticon.com/icons/svg/1535/1535413.svg" />
                                <p> Campfires allowed</p>
                              </span>
                              :
                              <span>
                                <img src="https://image.flaticon.com/icons/svg/678/678405.svg" />
                                <p> No campfires allowed</p>
                              </span>
                          }
                        </li>
                        <li>
                          {
                            spot.pets_allow ?
                              <span>
                                <img src="https://image.flaticon.com/icons/svg/71/71702.svg" />
                                <p> Pets allowed</p>
                              </span>
                              :
                              <span>
                                <img src="https://image.flaticon.com/icons/svg/1596/1596681.svg" />
                                <p> No pets allowed</p>
                              </span>
                          }
                        </li>
                        <li>
                          {
                            spot.toilet ?
                              <span>
                                <img src="https://image.flaticon.com/icons/svg/93/93156.svg" />
                                <p> Toilet available</p>
                              </span>
                              :
                              <span>
                                <img src="https://image.flaticon.com/icons/svg/75/75263.svg" />
                                <p> No toilet</p>
                              </span>
                          }
                        </li>
                        <li>
                          {
                            spot.shower ?
                              <span>
                                <img src="https://image.flaticon.com/icons/svg/1536/1536456.svg" />
                                <p> Showers</p>
                              </span>
                              :
                              <span>
                                <img src="https://image.flaticon.com/icons/svg/274/274595.svg" />
                                <p> No Showers</p>
                              </span>
                          }
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="spot_div_info">
                    <div>
                      <p className="spot_section_title">
                        Activities
                      </p>
                      <ul className="spot_subsection">
                        <li>
                          {
                            spot.hiking ?
                              <span>
                                <img src="https://image.flaticon.com/icons/svg/71/71423.svg" />
                                <p> Hiking Trails</p>
                              </span>
                              :
                              null
                          }
                        </li>
                        <li>
                          {
                            spot.biking ?
                              <span>
                                <img src="https://image.flaticon.com/icons/svg/565/565350.svg" />
                                <p> Biking Trails</p>
                              </span>
                              :
                              null
                          }
                        </li>
                        <li>
                          {
                            spot.biking ?
                              <span>
                                <img src="https://image.flaticon.com/icons/svg/54/54127.svg" />
                                <p> Wildlife Watching</p>
                              </span>
                              :
                              null
                          }
                        </li>
                        <li>
                          {
                            spot.paddling ?
                              <span>
                                <img src="https://image.flaticon.com/icons/svg/38/38607.svg" />
                                <p> Paddling</p>
                              </span>
                              :
                              null
                          }
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

          { spot.length === 0 ? null : 
          <>
          <div className='spot_review_container'>
            <div className='review_header'>
              <p className="review_title">{this.props.numReviews} Written reviews</p>
              <button onClick={this.handleClick} className="review_submit_button">Submit Review</button>
            </div>
          </div>

          <div>
            <ReviewIndexContainer spotId={this.props.match.params.spotId}/>
          </div>
          </>
          }
            </div>
          <BookingContainer spotId={this.props.match.params.spotId}/>
          </div>

        </main >
      </>
    )

        }

  }
}

export default withRouter(Spot);





