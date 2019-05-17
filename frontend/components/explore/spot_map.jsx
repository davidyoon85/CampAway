import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { fetchAllSpots } from '../../actions/spot_actions';
import { receiveGeolocation } from '../../actions/location_filter_actions';
    
const mapOptions = {
  center : { lat: 40.751626, lng: -73.983926 },
  zoom: 11
};

class SpotMap extends React.Component {
    constructor(props) {
        super(props);

        this.geoCoder = new google.maps.Geocoder();
        this.retrieveBounds = this.retrieveBounds.bind(this);
    }

    componentDidMount() {
        fetchAllSpots();

        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);    
        this.retrieveBounds();

    }

    centerMapOnSearch() {
        const geolocation = this.props.geoLocation
        this.geoCoder.geocode({ 'address': geolocation}, (results, status) => {
          if (status === "OK") {
            if (results[0]) {
              this.map.setZoom(12);
              let center = results[0].geometry.location;
              this.map.setCenter(center);
              const newBounds = this.map.getBounds();
              this.map.fitBounds(newBounds);
              this.props.receiveGeolocation("");
            } else {
              return { lat: 40.751626, lng: -73.983926 };
           }}
        });
      }

      retrieveBounds() {
          google.maps.event.addListener(this.map, 'idle', () => {
              const { north, south, east, west } = this.map.getBounds().toJSON();
            const bounds = {
              northEast: {lat: north, long: east},
              southWest: {lat: south, long: west}
            };
            // this.props.updateFilter('location', bounds);
          });
      }

      applyFilters() {
        const { spots, filters } = this.props;

        if (filters === undefined) {
          return spots;
        }

        const filteredSpots = spots.filter(spot => {
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

            return spots
        });

        return filteredSpots;
    }


    componentDidUpdate() {
      this.filteredSpots = this.applyFilters();
      this.MarkerManager.updateMarkers(this.filteredSpots);

      if (this.props.geoLocation.length > 0) this.centerMapOnSearch();

    }

    render () {

      const { spots } = this.props;

      if (Object.keys(spots) === 0 ) {
        return ( <div> </div> );
      }

      return (
      <div id='map-container'>
          <div className="map" ref={ map => this.mapNode = map }>
          </div>
      </div>
      )
    }
}

export default SpotMap;