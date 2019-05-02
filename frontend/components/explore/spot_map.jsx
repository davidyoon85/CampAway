import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { fetchAllSpots } from '../../actions/spot_actions';
import { receiveGeolocation } from '../../actions/location_filter_actions';
    
class SpotMap extends React.Component {
    constructor(props) {
        super(props);
        this.geoCoder = new google.maps.Geocoder();
        this.retrieveBounds = this.retrieveBounds.bind(this);
    }

    componentDidMount() {
        fetchAllSpots();
        const mapOptions = {
            center : { lat: 40.751626, lng: -73.983926 },
            zoom: 11
        };

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

    componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.spots);
        if (this.props.geoLocation.length > 0) this.centerMapOnSearch();
    }

    render () {

        return (
        <div id='map-container'>
            <div className="map" ref={ map => this.mapNode = map }>
            </div>
        </div>
        )
    }
}

export default SpotMap;