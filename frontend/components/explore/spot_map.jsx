import React from 'react';
import MarkerManager from '../../util/marker_manager';

const mapOptions = {
    center : { lat: 40.751626, lng: -73.983926 },
    zoom: 11
    };
    
class SpotMap extends React.Component {
    // constructor() {
    //     super(props);
    // }

    componentDidMount() {
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        // this.MarkerManager = new MarkerManager(this.map);    
    }

    // componentDidUpdate() {
    //     this.MarkerManager.updateMarkers();
    // }

    render () {
        return (
        <div id='map-container' ref={ map => this.mapNode = map }>

        </div>
        )
    }
}

export default SpotMap;