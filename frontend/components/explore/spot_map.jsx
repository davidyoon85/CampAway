import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { fetchAllSpots } from '../../actions/spot_actions';
import { applyFilters } from '../../util/filter_util';
    
const mapOptions = {
  center : { lat: 40.751626, lng: -73.983926 },
  zoom: 11
};

class SpotMap extends React.Component {
    constructor(props) {
        super(props);

        this.geoCoder = new google.maps.Geocoder();
        // this.retrieveBounds = this.retrieveBounds.bind(this);
        this.centerMapOnSearch = this.centerMapOnSearch.bind(this);
        this.getCenter = this.getCenter.bind(this);
    }

    componentDidMount() {
        // fetchAllSpots();

        let geoLocation = this.props.geoLocation;
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);   
        this.MarkerManager.updateMarkers(this.props.spots); 
        this.registerListeners();
    }

    registerListeners() {
      google.maps.event.addListener(this.map, 'idle', () => {
        const { north, south, east, west } = this.map.getBounds().toJSON();
        let bounds = {
          northEast: { lat: north, long: east },
          southWest: { lat: south, long: west }
        };

        this.props.updateFilter('location', bounds);
      });
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

      getCenter (callBack) {
        const geolocation = this.props.geoLocation;
        let centerCoords;
        this.geoCoder.geocode({ 'address': geolocation }, function (results, status) {
          if (status === "OK") {
            if (results[0]) {
              let lat = results[0].geometry.location.lat();
              let lng = results[0].geometry.location.lng();
              centerCoords = { lat, lng }
              callBack(centerCoords);
            } else {
              centerCoords = { lat: 37.865101, lng: -119.538329 };
              callBack(centerCoords);
            }
          }
        });
      }

    componentDidUpdate() {

      this.filteredSpots = applyFilters(this.props.filters, this.props.spots);
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