import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

class Header extends React.Component {
  render() {
    return (
      <Link to="/">
        <h1 className="header-container">Public Gallery</h1>
      </Link>
    );
  }
}

export default Header;
