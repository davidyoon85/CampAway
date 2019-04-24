import { Router } from 'react-router-dom';

class MarkerManager {
    constructor(map) {
        this.map = map;
        // this.geocoder = new google.maps.Geocoder();
        this.markers = {};

        // this.handleClick = this.handleClick.bind(this);
    }

    // handleClick() {
    //     this.props.history.push(`/spots/${spot.id}`);
    // }

    updateMarkers(spots) {
        spots.map(spot => {
            if (!this.markers.hasOwnProperty(`${spot.id}`)) {
                this.createMarker(spot)
            }
        })    
    }

    createMarker(spot) {
        const lat = spot.lat;
        const lng = spot.long;
        const myLatLng = {lat, lng};
        const markerInfoWindow = new google.maps.InfoWindow({
            content:
            `<div class="infowindow">
              <a href="/#/spots/${spot.id}" style="display: flex;">
                <div>
                  <h2 class="infowindow-title">${spot.title}</h2>
                  <p>$${spot.price}/night</p>
                </div>
              </a>
            </div>`,
            maxWidth: 300,
          });
        
        const infoWindow = new google.maps.InfoWindow({
          content: spot.title + "<br/>" + "$" + spot.price + "/day"
        })

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