import React from 'react';
import Slider from 'react-slick';

class PhotoSlideshow extends React.Component {

  render () {
    const photos = [
        "https://media.glampinghub.com/CACHE/images/accommodations/lakefront-log-cabin-rental-set-in-forestry-of-adirondack-park-new-1544021446627/c945344c2274acf3e6d32650b7e86f2e.jpg",
        "https://media.glampinghub.com/CACHE/images/accommodations/lakefront-log-cabin-rental-set-in-forestry-of-adirondack-park-new-1544021446318/c5e52bb1535628282aec8e7192952620.jpg",
        "https://media.glampinghub.com/CACHE/images/accommodations/lakefront-log-cabin-rental-set-in-forestry-of-adirondack-park-new-1544021446961/7a3456e174a701696598d3cbd57a3efe.jpg",
        "https://media.glampinghub.com/CACHE/images/accommodations/lakefront-log-cabin-rental-set-in-forestry-of-adirondack-park-new-1544021446109/289912a17fa205e8efbd19a31c1679f2.jpg",
        "https://media.glampinghub.com/CACHE/images/accommodations/lakefront-log-cabin-rental-set-in-forestry-of-adirondack-park-new-1475584283044/99d5ab112a59b3ff38415c598806a300.jpg",
        "https://media.glampinghub.com/CACHE/images/accommodations/ny-vacation-rentals-lake-pleasant-log-cabin-1470216702389/157d25f8e4d5fb7aea11967753203cdb.jpg",
        "https://media.glampinghub.com/CACHE/images/accommodations/ny-vacation-rentals-lake-pleasant-log-cabin-1470216702402/5b92aa1792eae1ffec137239a4b2aeea.jpg",
        "https://media.glampinghub.com/CACHE/images/accommodations/lakefront-log-cabin-rental-set-in-forestry-of-adirondack-park-new-1475584283975/83aaad239656f2b215806f7edfb35af3.jpg",
        "https://media.glampinghub.com/CACHE/images/accommodations/lakefront-log-cabin-rental-set-in-forestry-of-adirondack-park-new-1475584283865/4c6caaa4de9b355f57d3cffac7f0e639.jpg",
        "https://media.glampinghub.com/CACHE/images/accommodations/ny-vacation-rentals-lake-pleasant-log-cabin-1470216723084/954fee6f30334ec2b88c825d0d37c81d.jpg",
        "https://media.glampinghub.com/CACHE/images/accommodations/lakefront-log-cabin-rental-set-in-forestry-of-adirondack-park-new-1534494928306/0a7a8af155c5470222a8b1e9de59a5df.jpg",
        "https://media.glampinghub.com/CACHE/images/accommodations/ny-vacation-rentals-lake-pleasant-log-cabin-1470216723036/5b74a8a3562e6cd04000e1d739957d14.jpg",
        "https://media.glampinghub.com/CACHE/images/accommodations/ny-vacation-rentals-lake-pleasant-log-cabin-1470216723047/887c08404823dba78a101fb23c8ae279.jpg",
        "https://media.glampinghub.com/CACHE/images/accommodations/lakefront-log-cabin-rental-set-in-forestry-of-adirondack-park-new-1534494928218/570c0c746af84418ead48d9a7968adfd.jpg",
        "https://media.glampinghub.com/CACHE/images/accommodations/lakefront-log-cabin-rental-set-in-forestry-of-adirondack-park-new-1475584283776/7221ed7b1333ae5ab5a22b2cc2730707.jpg",
        "https://media.glampinghub.com/CACHE/images/accommodations/ny-vacation-rentals-lake-pleasant-log-cabin-1470216702304/4b0d45d974b9660d7a3e7efba8ebdd85.jpg",
        "https://media.glampinghub.com/CACHE/images/accommodations/ny-vacation-rentals-lake-pleasant-log-cabin-1470216722880/cea08508e60c648ce811a6f02aa5f29c.jpg"
    ];

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
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            variableWidth: false,
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
            variableWidth: false,
          }
        },
      ]
    }

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