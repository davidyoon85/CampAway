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
                <div className="spot_index_header">
                    <h1>Discover camping...</h1>
                </div>
            
                <div className="spot_index_spot">
                    {this.props.spots.map((spot, id) => (
                        <div className="spot_index_parent" key={id}>
                            <SpotIndexItem className="index_spots" push={this.props.history.push} spot={spot} key={spot.id} user={this.props.user}/>
                        </div>
                    ))
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(SpotIndex);