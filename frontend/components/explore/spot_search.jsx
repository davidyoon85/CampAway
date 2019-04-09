import React from 'react';

import SpotMap from './spot_map';
import SpotIndex from '../spot/spot_index';

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
                // user={state.entities.users[state.session.id]}
                />
            <SpotMap 
                spots={this.props.spots}
            />
        </div>
        )
    }
}

export default SpotSearch;