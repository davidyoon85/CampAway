import React from "react";
import SearchBar from "../search/search_container";
import GreetingContainer from "../greeting/greeting_container";
import Modal from "../modal/modal";

const Nav = () => (
  <nav className="main_nav">
    <Modal />
    <div className="left">
      <a href="/">CAMPAWAY</a>
      <SearchBar />
    </div>
    <div className="right">
      <GreetingContainer />
    </div>
  </nav>
);

export default Nav;
