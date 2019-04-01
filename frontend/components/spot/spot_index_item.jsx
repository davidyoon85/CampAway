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
        return (
            <nobr className="index_spots" onClick={this.handleClick}>
                <div>
                    <h1>image</h1>
                </div>
                <div className="spot_index_spot_title">
                    <Link to={`/spots/${this.props.spot.id}`}>
                        {this.props.spot.title}
                    </Link>
                </div>
            </nobr>
        )    
    }
};


export default SpotIndexItem;