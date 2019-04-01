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

    const { spot } = this.props;

    return (
      <>
      <main className="spot_main_section">
      <div className="photo_slider">
      <PhotoSlideshow />
      </div>
       <div className="spot_page">
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
                      <img src="https://image.flaticon.com/icons/svg/678/678406.svg" />
                      <p> Bring your own tents </p>
                    </li>
                    <li>
                      <img src="https://image.flaticon.com/icons/svg/1535/1535442.svg" />
                      <p> 15 sites </p>
                    </li>
                    <li>
                      <img src="https://image.flaticon.com/icons/svg/58/58038.svg" />
                      <p> Up to 30 guests per site </p>
                    </li>
                    <li>
                      <img src="https://image.flaticon.com/icons/svg/8/8818.svg" />
                      <p> Short walk </p>
                    </li>
                    <li>
                      <img src="https://image.flaticon.com/icons/svg/93/93191.svg" />
                      <p> Wheelchair access </p>
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
                      <img src="https://image.flaticon.com/icons/svg/1535/1535413.svg" />
                      <p> Campfires allowed </p>
                    </li>
                    <li>
                      <img src="https://image.flaticon.com/icons/svg/71/71702.svg" />
                      <p> Pets allowed </p>
                    </li>
                    <li>
                      <img src="https://image.flaticon.com/icons/svg/75/75263.svg" />
                      <p> No toilet </p>
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
                      <img src="https://image.flaticon.com/icons/svg/71/71423.svg" />
                      <p> Hiking Trails </p>
                    </li>
                    <li>
                      <img src="https://image.flaticon.com/icons/svg/565/565350.svg" />
                      <p> Bike Trails </p>
                    </li>
                    <li>
                      <img src="https://image.flaticon.com/icons/svg/74/74797.svg" />
                      <p> Beach Access </p>
                    </li>
                    <li>
                      <img src="https://image.flaticon.com/icons/svg/38/38607.svg" />
                      <p> Rowing </p>
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