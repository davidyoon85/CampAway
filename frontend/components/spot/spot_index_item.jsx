import React from 'react';
import { Link } from 'react-router-dom';

class SpotIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.push(`/spots/${this.props.spot.id}`);
    }

    render() {

        const defaultPhoto = ["https://media.glampinghub.com/CACHE/images/accommodations/lakefront-log-cabin-rental-set-in-forestry-of-adirondack-park-new-1544021446318/c5e52bb1535628282aec8e7192952620.jpg"];
        
        if (!this.props.spot.photoUrls) {
            this.props.spot.photoUrls = defaultPhoto;
        }
        
        return (
            <nobr className="index_spots" onClick={this.handleClick}>
                <div className="spot_index_spot">
                    <Link to={`/spots/${this.props.spot.id}`}>
                        <img className="spot_index_photo" src={this.props.spot.photoUrls[0]}/>
                        <div className="index_photo_title">
                            {this.props.spot.title}
                        </div>
                    </Link>
                </div>
            </nobr>
        )    
    }
};


export default SpotIndexItem;