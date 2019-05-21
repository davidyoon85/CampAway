import React from 'react';

import SpotMap from './spot_map';
import SpotIndex from '../spot/spot_index_container';
import SpotFilterContainer from '../spot/spot_filter_container';

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
            <SpotFilterContainer />
            <SpotIndex 
                spots={this.props.spots}
                filters={this.props.filters}
                updateFilteredSpots={this.props.updateFilteredSpots}
                />
            <SpotMap 
                spots={this.props.spots}
                geoLocation={this.props.geoLocation}
                filters={this.props.filters}
                updateFilter={this.props.updateFilter}
                receiveGeolocation={this.props.receiveGeolocation}
            />
        </div>
        )
    }
}

export default SpotSearch;