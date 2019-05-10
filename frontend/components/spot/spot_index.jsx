import React from 'react';
import { withRouter } from 'react-router-dom';
import SpotIndexItem from './spot_index_item';

class SpotIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllSpots();
      }

    applyFilters() {
        const { spots, filters, geolocation, mapBounds } = this.props;

        let filteredSpots = spots.filter(spot => {
            if (filters['campfire'] && !spot.campfire) return;
            if (filters['pets_allow'] && !spot.pets_allow) return;
            if (filters['tent'] && !spot.tent) return;
            if (filters['parking'] && !spot.parking) return;
            if (filters['toilet'] && !spot.toilet) return;
            if (filters['shower'] && !spot.shower) return;
            if (filters['hiking'] && !spot.hiking) return;
            if (filters['biking'] && !spot.biking) return;
            if (filters['paddling'] && !spot.paddling) return;
            if (filters.pricing < spot.price) return;
            if (filters.group_size > spot.group_size) return;

            return spots
        });

        // if (Object.keys(mapBounds).length > 0 && geolocation.length > 0) {
        //     filteredSpots = filteredSpots.filter(spot =>
        //     spot.lat > mapBounds.f.b &&
        //     spot.lat < mapBounds.f.f &&
        //     spot.lng > mapBounds.b.b &&
        //     spot.lng < mapBounds.b.f
        //     )
        // }

        return filteredSpots;
    }

    render() {
        const { spots } = this.props;

        if (spots.length === 0) {
          return (
            <div></div>
          )
        }

        const filteredSpots = this.applyFilters();
        if (filteredSpots.length === 0) {
          return (
            <div className="spots-index">
              <p>
                <strong>
                  0 spots
                </strong>
              </p>
              <div className='no-results'>
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