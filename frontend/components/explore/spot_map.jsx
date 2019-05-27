import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { fetchAllSpots } from '../../actions/spot_actions';
import { applyFilters } from '../../util/filter_util';
    
class SpotMap extends React.Component {
    constructor(props) {
      super(props);

      this.geoCoder = new google.maps.Geocoder();
      this.centerMapOnSearch = this.centerMapOnSearch.bind(this);
      this.centerMap = this.centerMap.bind(this);
      this.registerListeners = this.registerListeners.bind(this);
    }

    componentDidMount() {
      fetchAllSpots();
      let mapCenter = { lat: 40.751626, lng: -73.983926 };
      const mapOptions = {
        center : mapCenter,
        zoom: 11
      };
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

    centerMap() {
      const geolocation = this.props.geoLocation;
      let mapCenter;
      this.geoCoder.geocode({ 'address': geolocation }, function (results, status) {
        if (status === "OK") {
          if (results[0]) {
            let lat = results[0].geometry.location.lat();
            let lng = results[0].geometry.location.lng();
            mapCenter = { lat, lng }
          } else {
            mapCenter = { lat: 40.751626, lng: -73.983926 };
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
    return (
    <div id='map-container'>
        <div className="map" ref={ map => this.mapNode = map }>
        </div>
    </div>
    )
  }
}

export default SpotMap;