import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { applyFilters } from "../../util/filter_util";
import SpotIndexItem from "./spot_index_item";

function SpotIndex({ spots, filters, history, user }) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const filteredSpots = applyFilters(filters, spots);

  if (filteredSpots.length === 0) {
    return (
      <div className="spot_index">
        <div className="spot_index_empty">
          <h2> No spots match your current search. </h2>
        </div>
      </div>
    );
  } else {
    return (
      <div className="spot_index">
        {filteredSpots.map(spot => (
          <SpotIndexItem
            push={history.push}
            spot={spot}
            key={spot.id}
            user={user}
          />
        ))}
      </div>
    );
  }
}

export default withRouter(SpotIndex);