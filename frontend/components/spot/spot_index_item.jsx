import React from "react";
import { Link } from "react-router-dom";

function SpotIndexItem(props) {

  const handleClick = (e) => {
    props.push(`/spots/${props.spot.id}`);
  }

  const defaultPhoto = [
    "https://media.glampinghub.com/CACHE/images/accommodations/lakefront-log-cabin-rental-set-in-forestry-of-adirondack-park-new-1544021446318/c5e52bb1535628282aec8e7192952620.jpg"
  ];

  if (!props.spot.photoUrls) {
    props.spot.photoUrls = defaultPhoto;
  }

  return (
    <div
      className="spot_index_item"
      id={`spot-${props.spot.id}`}
      onClick={handleClick}
    >
      <Link
        className="spot_index_item_link"
        to={`/spots/${props.spot.id}`}
      >
        <img
          className="spot_index_photo"
          src={props.spot.photoUrls[0]}
          alt=""
        />
        <div className="spot_details">
          <div className="spot_details_title">{props.spot.title}</div>
          <div className="spot_details_body">{props.spot.body}</div>
          <div className="spot_details_price">
            <div className="spot_details_reviews">
              {props.spot.reviews.length} reviews
              </div>
            <div>${props.spot.price}/night</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SpotIndexItem;