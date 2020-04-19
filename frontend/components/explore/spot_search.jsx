import React from "react";

import SpotMap from "./spot_map";
import SpotIndex from "../spot/spot_index";
import SpotFilterContainer from "../spot/spot_filter_container";

function SpotSearch({ spots, fetchAllSpots, filters, updateFilter, clearAllFilters, geoLocation, receiveGeolocation }) {

  return (
    <div className="spot_search_container">
      <SpotFilterContainer />

      <div className="spot_search_main">
        <SpotIndex
          spots={spots}
          fetchAllSpots={fetchAllSpots}
          filters={filters}
          updateFilter={updateFilter}
          clearAllFilters={clearAllFilters}
        />

        <SpotMap
          spots={spots}
          geoLocation={geoLocation}
          filters={filters}
          updateFilter={updateFilter}
          receiveGeolocation={receiveGeolocation}
        />
      </div>
    </div>
  );

}

export default SpotSearch;