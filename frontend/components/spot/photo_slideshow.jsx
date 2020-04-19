import React from "react";
import Slider from "react-slick";

function PhotoSlideshow({ spot }) {

  const photos = [
    "https://media.glampinghub.com/CACHE/images/accommodations/lakefront-log-cabin-rental-set-in-forestry-of-adirondack-park-new-1544021446318/c5e52bb1535628282aec8e7192952620.jpg"
  ];

  if (spot.photoUrls) {
    photos = spot.photoUrls;
  }

  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    infinite: true,
    variableWidth: true,
    className: "slider",
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          variableWidth: false
        }
      }
    ]
  };

  return (
    <section className="spot_photo">
      <Slider {...settings}>
        {photos.map((photo, id) => {
          return (
            <div key={id}>
              <img src={photo} alt="" />
            </div>
          );
        })}
      </Slider>
    </section>
  );
}

export default PhotoSlideshow;