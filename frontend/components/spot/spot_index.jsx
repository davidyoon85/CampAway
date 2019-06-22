import React from 'react';
import { withRouter } from 'react-router-dom';
import { applyFilters } from '../../util/filter_util';
import { FadeLoader } from 'react-spinners';

import SpotIndexItem from './spot_index_item';


class SpotIndex extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        loading: true
      }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { spots, filters } = this.props;
    const filteredSpots = applyFilters(filters, spots);

    if (filteredSpots.length === 0) {
      return (
        <div className="spot_index">
          <div className='spot_index_empty'>
            <h2> No spots match your current search. </h2>
          </div>
        </div>
      )
    } else {
      return (
          <div className="spot_index">
            {filteredSpots.map((spot) => (
              <SpotIndexItem 
                push={this.props.history.push} 
                spot={spot} 
                key={spot.id} 
                user={this.props.user}
              />
            ))}
          </div>
      )
    }
  }
}

export default withRouter(SpotIndex);