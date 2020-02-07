import React from "react";
import Configuration from "../../containers/Configuration/configuration";

import "./header.scss";

const data = {
  universities: ["LETI", "BONCH"],
  courses: [1, 2, 3, 4, 5],
  faculties: ["FKTI", "FIBS", "GF", "ECONOM"],
  groups: [5303, 5304, 5305, 5381, 5383],
  days: ["Monday", "Tuesday", "Wendsday", "Thursday", "Friday", "Saturday"]
};

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.isConfigOpen ? (
      <header className="header__container">
        <div className="header__toggle-container">
          <button
            onClick={this.props.closeConfigAction}
            className="header__toggle-off"
          >
            close
          </button>
        </div>
        <h1 className="header__logo">University Schedule</h1>
        {this.props.user ? (
          <Configuration data={data} />
        ) : (
          <span className="header__login" onClick={this.props.toggleLoginModal}>
            Log in to see your schedule
          </span>
        )}
      </header>
    ) : (
      <button
        className="header__toggle-on"
        onClick={this.props.openConfigAction}
      >
        open
      </button>
    );
  }
}

export default Header;
