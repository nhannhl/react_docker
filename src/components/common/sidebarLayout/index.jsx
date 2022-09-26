import React from "react";
import PropTypes from "prop-types";
import Header from "../header";
import SideBar from "../sideBar";

function SideBarLayout(props) {
  return (
    <div>
    SideBarLayout
      <Header />
      <div>
        <SideBar />
        {props.children}
      </div>
    </div>
  );
}

SideBarLayout.propTypes = {};

export default SideBarLayout;
