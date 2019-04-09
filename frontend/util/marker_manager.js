export default class MarkerManager {
    constructor(map) {
        // super(map);
        this.map = map;

        this.markers = {};
    }

    updateMarkers(spots) {
        spots.map(spot => {
            if (!this.markers.hasOwnProperty(`${spot.id}`)) {
                this.createMarker(spot)
            }
        })    
    }

    createMarker({ lat, long }) {
        const lng = long;
        const myLatLng = {lat, lng};
        
        const marker = new google.maps.Marker({
            position: myLatLng,
            map: this.map,
            title: 'Hello World!',
            url: 'http://www.google.com'
        })
        google.maps.event.addListener(marker, 'click', function () {
            window.location = marker.url;
        });
    }
}   
