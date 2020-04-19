import React, { useEffect, useRef } from "react";
import MarkerManager from "../../util/marker_manager";
import { applyFilters } from "../../util/filter_util";

function SpotMap({ spots, filters, geoLocation, updateFilter, receiveGeolocation }) {
  let ref = useRef();
  let geoCoder, map, markerManager;

  useEffect(() => {

    let mapCenter = { lat: 40.751626, lng: -73.983926 };

    const mapOptions = {
      center: mapCenter,
      zoom: 11
    };

    geoCoder = new google.maps.Geocoder();
    map = new google.maps.Map(ref, mapOptions);
    markerManager = new MarkerManager(map);
    markerManager.updateMarkers(spots);
    registerListeners();
  }, [])

  useEffect(() => {
    const filteredSpots = applyFilters(filters, spots);

    if (markerManager && filteredSpots.length > 0) {

      markerManager.updateMarkers(filteredSpots);
      if (geoLocation.length > 0) centerMapOnSearch();
    }
  })

  const registerListeners = () => {
    google.maps.event.addListener(map, "idle", () => {
      const { north, south, east, west } = map.getBounds().toJSON();
      let bounds = {
        northEast: { lat: north, long: east },
        southWest: { lat: south, long: west }
      };

      updateFilter("location", bounds);
    });
  }

  const centerMapOnSearch = () => {
    geoCoder.geocode(
      { address: geoLocation },
      (results, status) => {
        if (status === "OK") {
          if (results[0]) {
            map.setZoom(12);
            let mapCenter = results[0].geometry.location;
            map.setCenter(mapCenter);
            const newBounds = map.getBounds();
            map.fitBounds(newBounds);
            receiveGeolocation(mapCenter);
          } else {
            return { lat: 40.751626, lng: -73.983926 };
          }
        }
      }
    );
  }

  return (
    <div id="map-container">
      <div className="map" ref={map => (ref = map)} />
    </div>
  );
}

export default SpotMap;