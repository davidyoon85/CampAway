import React from 'react';

import SpotMap from './spot_map';
import SpotIndex from '../spot/spot_index_container';

class SpotSearch extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllSpots();
    }

    render () {
        return (
        <div className="spot_search_container">
            <SpotIndex 
                spots={this.props.spots}
                />
            <SpotMap 
                spots={this.props.spots}
                geoLocation={this.props.geoLocation}
                receiveGeolocation={this.props.receiveGeolocation}
            />
        </div>
        )
    }
}

export default SpotSearch;