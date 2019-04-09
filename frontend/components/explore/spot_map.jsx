import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { fetchAllSpots } from '../../actions/spot_actions';
    
class SpotMap extends React.Component {
    constructor(props) {

        super(props);
    }

    componentDidMount() {
        fetchAllSpots();
        const mapOptions = {
            center : { lat: 40.751626, lng: -73.983926 },
            zoom: 11
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions);

        this.MarkerManager = new MarkerManager(this.map);    
    }

    componentDidUpdate() {

        this.MarkerManager.updateMarkers(this.props.spots);
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