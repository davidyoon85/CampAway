import React from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class PhotoSlideshow extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    let photos = ["https://media.glampinghub.com/CACHE/images/accommodations/lakefront-log-cabin-rental-set-in-forestry-of-adirondack-park-new-1544021446318/c5e52bb1535628282aec8e7192952620.jpg"];
debugger
    if (this.props.spot) {
      debugger

      photos = [this.props.spot.photoUrls];
    }
    debugger

    const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    infinite: true,
    variableWidth: true,
    className: 'slider',
    };

    
  return (
    <section className="spot_photo">
      <Slider {...settings}>
        {
          photos ? photos.map((photo, id) => {
            return (
              <div key={id}>
                <img src={photo} />
              </div>
            )
          })
          :
          null
        }
      </Slider>
    </section>
    )
  }
};


export default PhotoSlideshow;