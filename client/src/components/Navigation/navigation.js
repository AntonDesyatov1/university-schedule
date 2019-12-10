import React from "react";
import { Link } from "react-router-dom";

import "./navigation.scss";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginModalVisible: false
    };
  }

  renderLinkToProfile() {
    return (
      <span className="navigation__link">
        <Link to="/profile">Profile</Link>
      </span>
    );
  }

  render() {
    return (
      <React.Fragment>
        <nav className="navigation">
          {this.props.user && this.props.user.login ? (
            this.renderLinkToProfile()
          ) : (
            <span className="navigation__link" onClick={this.props.toggleLoginModal}>
              Login
            </span>
          )}
          <span className="navigation__link">
            <Link to="/gallery">Gallery</Link>
          </span>
          {this.props.user && this.props.user.login ? (
            <span className="navigation__link" onClick={this.props.logout}>
              Logout
            </span>
          ) : null}
        </nav>
      </React.Fragment>
    );
  }
}

export default Navigation;
