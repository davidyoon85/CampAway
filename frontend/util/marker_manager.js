class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
        this.geocoder = new google.maps.Geocoder();
    }

    clearMarkers() {
      Object.keys(this.markers)
        .forEach((spotId) => this.removeMarker(this.markers[spotId]))
    }

    removeMarker(marker) {
      this.markers[marker.spotId].setMap(null);
      delete this.markers[marker.spotId];
    }

    updateMarkers(spots) {
      const spotsList = {};
      spots.forEach(spot => spotsList[spot.id] = spot);
      spots.filter(spot => !this.markers[spot.id]).forEach(filteredSpot => this.createMarker(filteredSpot, this.handleClick))
      Object.keys(this.markers).filter(spotId => !spotsList[spotId]).forEach((spotId) => this.removeMarker(this.markers[spotId]))
    }

    createMarker(spot) {
        const lat = spot.lat;
        const lng = spot.long;
        const myLatLng = {lat, lng};
        const markerInfoWindow = new google.maps.InfoWindow({
          content:
            `<div class="infowindow">
              <img id="infoWindowImage" src=${spot.photoUrls[0]}>
              <a href="/#/spots/${spot.id}" style="display: flex;">
                <div id="infoWindowDetails">
                  <h2 class="infowindow-title">${spot.title}</h2>
                  <p class="infowindow-price">$${spot.price}/night</p>
                </div>
              </a>
            </div>`,
          maxWidth: 300,
          disableAutoPan : true
        });

        const icon = {
          url: "https://djqvcbmmgpti5.cloudfront.net/assets/map/hipcamp-pin-acd5fbe15a2cc72f5919e5e86a32872fb43c7dbf03ebee8f3f1868c80123f002.png",
          scaledSize: new google.maps.Size(50, 50)
        }

        const marker = new google.maps.Marker({
          position: myLatLng,
          map: this.map,
          spotId: spot.id,
          clicked: false,
          icon: icon,
          infoWindow: markerInfoWindow
        })

        this.markers[marker.spotId] = marker;

        marker.addListener('click', () => {
          const targetSpot = document.getElementById(`spot-${spot.id}`);
          targetSpot.scrollIntoView({behavior: "smooth", block: "center"});
          this.map.setCenter(marker.getPosition());
        });

        marker.addListener('mouseover', () => {
          marker.infoWindow.open(this.map, marker);
        });
      
          marker.addListener('mouseout', () => {
          if (!marker.clicked) marker.infoWindow.close(this.map, marker);
        });
    }
}   

export default MarkerManager;