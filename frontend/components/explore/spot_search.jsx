import React, { Component } from 'react';

import SpotMap from './spot_map';
import SpotIndex from '../spot/spot_index';
import SpotFilterContainer from '../spot/spot_filter_container';

class SpotSearch extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
        <div className="spot_search_container">
            <SpotFilterContainer />

            <div className="spot_search_main">
            <SpotIndex 
                spots={this.props.spots}
                fetchAllSpots={this.props.fetchAllSpots}
                filters={this.props.filters}
                updateFilter={this.props.updateFilter}
                clearAllFilters={this.props.clearAllFilters}
                />

            <SpotMap 
                spots={this.props.spots}
                geoLocation={this.props.geoLocation}
                filters={this.props.filters}
                updateFilter={this.props.updateFilter}
                receiveGeolocation={this.props.receiveGeolocation}
            />
            </div>
        </div>
        )
    }
}

export default SpotSearch;