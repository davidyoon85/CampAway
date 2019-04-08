export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markets = {};
    }

    updateMarkers(spots) {
        spots.map(spot => {
            this.createMarker(spot)
        })    
    }

    createMarker(spot) {
        const coords = new google.maps.LatLng(spot.lat, spot.long);
    }
}   