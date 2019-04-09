import React from 'react';
import { withRouter } from 'react-router-dom';
import SpotIndexItem from './spot_index_item';

class SpotIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="spot_index">
                    {this.props.spots.map((spot) => (
                        <SpotIndexItem 
                        push={this.props.history.push} 
                        spot={spot} 
                        key={spot.id} 
                        user={this.props.user}
                        />
                    ))
                    }
            </div>
        )
    }
}

export default withRouter(SpotIndex);