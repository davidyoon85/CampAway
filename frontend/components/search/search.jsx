import React, { useState } from "react";
import { withRouter } from "react-router-dom";

function Search(props) {
  const [searchParams, setSearchParams] = useState("");

  function update() {
    return e => {
      setSearchParams(e.currentTarget.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.receiveGeolocation(e.target.children[0].value);
    props.history.push("/spots");
  }

  if (
    props.location.pathname === "/host" ||
    props.location.pathname.includes("review")
  ) {
    return null;
  } else {
    return (
      <div className="search_container">
        <i className="fas fa-search search_icon" />
        <form className="search_form" onSubmit={handleSubmit}>
          <input
            placeholder="Search..."
            className="search_nav_bar"
            onChange={update()}
            value={searchParams}
          />
        </form>
      </div>
    );
  }

}

export default withRouter(Search);