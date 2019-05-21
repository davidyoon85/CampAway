import React from 'react';
import { withRouter } from 'react-router-dom';
import SpotIndexItem from './spot_index_item';
import { applyFilters } from '../../util/filter_util';

class SpotIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
      window.scrollTo(0, 0);
      this.props.fetchAllSpots();
    }

    render() {
        const { spots, filters } = this.props;
        const filteredSpots = applyFilters(filters, spots);

        if (spots.length === 0) {
          debugger
          return (
            <div className="spot_index">
              <div className='spot_index_empty'>
                <h2> No spots match your current search. </h2>
              </div>
            </div>
          )
        }

        return (
            <div className="spot_index">
                    {filteredSpots.map((spot) => (
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