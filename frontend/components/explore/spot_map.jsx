import React, { Component } from "react";
import MarkerManager from "../../util/marker_manager";
import { applyFilters } from "../../util/filter_util";

class SpotMap extends Component {
  constructor(props) {
    super(props);

    this.geoCoder = new google.maps.Geocoder();
    this.centerMapOnSearch = this.centerMapOnSearch.bind(this);
    this.centerMap = this.centerMap.bind(this);
    this.registerListeners = this.registerListeners.bind(this);
  }

  componentDidMount() {
    let mapCenter = { lat: 40.751626, lng: -73.983926 };
    const mapOptions = {
      center: mapCenter,
      zoom: 11
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.spots);
    this.registerListeners();
  }

  registerListeners() {
    google.maps.event.addListener(this.map, "idle", () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      let bounds = {
        northEast: { lat: north, long: east },
        southWest: { lat: south, long: west }
      };

      this.props.updateFilter("location", bounds);
    });
  }

  centerMapOnSearch() {
    this.geoCoder.geocode(
      { address: this.props.geoLocation },
      (results, status) => {
        if (status === "OK") {
          if (results[0]) {
            this.map.setZoom(12);
            let mapCenter = results[0].geometry.location;
            this.map.setCenter(mapCenter);
            const newBounds = this.map.getBounds();
            this.map.fitBounds(newBounds);
            this.props.receiveGeolocation(mapCenter);
          } else {
            return { lat: 40.751626, lng: -73.983926 };
          }
        }
      }
    );
  }

  centerMap(callBack) {
    this.geoCoder.geocode(
      { address: this.props.geoLocation },
      (results, status) => {
        if (status === "OK") {
          if (results[0]) {
            let lat = results[0].geometry.location.lat();
            let lng = results[0].geometry.location.lng();
            let mapCenter = { lat, lng };
            callBack(mapCenter);
          } else {
            mapCenter = { lat: 40.751626, lng: -73.983926 };
            callBack(mapCenter);
          }
        }
      }
    );
  }

  componentDidUpdate() {
    const filteredSpots = applyFilters(this.props.filters, this.props.spots);
    this.MarkerManager.updateMarkers(filteredSpots);
    if (this.props.geoLocation.length > 0) this.centerMapOnSearch();
  }

  render() {
    return (
      <div id="map-container">
        <div className="map" ref={map => (this.mapNode = map)} />
      </div>
    );
  }
}

export default SpotMap;
