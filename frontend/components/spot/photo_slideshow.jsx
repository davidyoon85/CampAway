import React from 'react';
import Slider from 'react-slick';

class PhotoSlideshow extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let photos = ["https://media.glampinghub.com/CACHE/images/accommodations/lakefront-log-cabin-rental-set-in-forestry-of-adirondack-park-new-1544021446318/c5e52bb1535628282aec8e7192952620.jpg"];

    if (this.props.spot.photoUrls) {
      photos = this.props.spot.photoUrls;
    }

    const settings = {
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      infinite: true,
      variableWidth: true,
      className: 'slider',
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            variableWidth: false,
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            variableWidth: false,
          }
        },
      ]
    };

  return (
    <section className="spot_photo">
      <Slider {...settings}>
        {
          photos.map((photo, id) => {
            return (
              <div key={id}>
                <img src={photo} />
              </div>
            )
          })
        }
      </Slider>
    </section>
    )
  }
};

export default PhotoSlideshow;