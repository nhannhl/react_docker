import React from "react";
import PropTypes from "prop-types";
import Header from "../header";
import styles from "./DefaultLayout.module.css";

function DefaultLayout(props) {
  return (
    <div>
      DefaultLayout
      <Header />
      {props.children}
    </div>
  );
}

DefaultLayout.propTypes = {};

export default DefaultLayout;
