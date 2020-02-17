import React, { Component } from "react";
import { Link } from "react-router-dom";

class SpotIndexItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.push(`/spots/${this.props.spot.id}`);
  }

  render() {
    const defaultPhoto = [
      "https://media.glampinghub.com/CACHE/images/accommodations/lakefront-log-cabin-rental-set-in-forestry-of-adirondack-park-new-1544021446318/c5e52bb1535628282aec8e7192952620.jpg"
    ];

    if (!this.props.spot.photoUrls) {
      this.props.spot.photoUrls = defaultPhoto;
    }
    debugger;
    return (
      <div
        className="spot_index_item"
        id={`spot-${this.props.spot.id}`}
        onClick={this.handleClick}
      >
        <Link
          className="spot_index_item_link"
          to={`/spots/${this.props.spot.id}`}
        >
          <img
            className="spot_index_photo"
            src={this.props.spot.photoUrls[0]}
            alt=""
          />
          <div className="spot_details">
            <div className="spot_details_title">{this.props.spot.title}</div>
            <div className="spot_details_body">{this.props.spot.body}</div>
            <div className="spot_details_price">
              <div className="spot_details_reviews">
                {this.props.spot.reviews.length} reviews
              </div>
              <div>${this.props.spot.price}/night</div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default SpotIndexItem;
