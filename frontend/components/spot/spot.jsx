import React from 'react';
import PhotoSlideshow from './photo_slideshow';

class Spot extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.spotId);
  }
  
  render() {
    // debugger
    const { spot } = this.props;

    return (
      <>
      <main className="spot_main_section">
      <div className="photo_slider">
        <PhotoSlideshow/>
      </div>
       <div className="spot_page">

        <div className="booking_widget">
          <div className="widget_price">
            {spot.price}
          </div>

          <div className="widget_subsection">
            <div className="widget_checkin">
  hi1
            </div>
            <div className="widget_checkout">
  hi2
            </div>
            <div className="widget_guests">
  hi3
            </div>
          </div>

          <div className="widget_booking">
            <button className="widget_button">Pay Me</button>
          </div>
        </div>

         <div>
           <section>
            <div className="spot_div">
              <h1 className="spot_title">{spot.title}</h1>
            </div>

             <div className="spot_div">
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
                      </span>
                      <p> {spot.sites} sites </p>
                    </li>

                    <li>
                      <span>
                        <img src="https://image.flaticon.com/icons/svg/58/58038.svg" />
                      </span>
                          <p> Up to {spot.group_size} guests per site </p>
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
                              <h1>hi</h1>
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
                          <h1>hi</h1>
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
                              <h1>hi</h1>
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
                              <h1>hi</h1>
                      }
                    </li>
                  </ul>
                </div>
              </div>
            </div>

           </section>
         </div>
         </div>
       </main >
    </>
    )
  }
}

export default Spot;




