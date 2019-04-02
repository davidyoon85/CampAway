import React from 'react';
import SpotIndexContainer from './spot/spot_index_container';

const Splash = () => {
    return (
    <>
    <div className="splash_main">
        <div className="splash_subtitle1">
        Find yourself outside.
        </div>
        <div className="splash_subtitle2">
        Book unique camping experiences on over <nobr className="bold">300,000</nobr> campsites, ranches, vineyards, public parks and more.
        </div>
    </div>
    {/* <div className="spot_index_container">
        <SpotIndexContainer />
    </div> */}
    </>
    )
}

export default Splash;