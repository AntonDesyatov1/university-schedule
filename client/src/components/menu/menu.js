import React from "react";

import "./menu.scss";
class Menu extends React.Component {
  render() {
    return (
      <section className="menu">
        <span>Profile</span>
        <span>Anything else</span>
        <span> ALO </span>
        <button onClick={this.props.toggleMenu}>Close</button>
      </section>
    );
  }
}

export default Menu;
