import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">Hello!</div>
      // <Link to="/">
      //   <h1 className="header-container">Public Gallery</h1>
      // </Link>
    );
  }
}

export default Header;
