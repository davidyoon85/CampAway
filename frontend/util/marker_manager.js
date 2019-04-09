export default class MarkerManager {
    constructor(map) {
        // super(map);
        debugger
        this.map = map;
        debugger

        this.markers = {};
    }

    updateMarkers(spots) {
        debugger
        spots.map(spot => {
            if (!this.markers.hasOwnProperty(`${spot.id}`)) {
                this.createMarker(spot)
            }
        })    
    }

    createMarker({ lat, long }) {
        const lng = long;
        const myLatLng = {lat, lng};
        debugger
        
        const marker = new google.maps.Marker({
            position: myLatLng,
            map: this.map,
            title: 'Hello World!'
        })
    }
}   
