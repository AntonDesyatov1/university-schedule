import React from "react";
import Configuration from "../../containers/Configuration/configuration";

import "./header.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      isConfigOpen,
      user,
      closeConfigAction,
      toggleLoginModal,
      openConfigAction,
      data
    } = this.props;
    return isConfigOpen ? (
      <header className="header__container">
        <div className="header__toggle-container">
          <button onClick={closeConfigAction} className="header__toggle-off">
            close
          </button>
        </div>
        <h1 className="header__logo">University Schedule</h1>
        {user ? (
          <Configuration data={data} />
        ) : (
          <span className="header__login" onClick={toggleLoginModal}>
            Log in to see your schedule
          </span>
        )}
      </header>
    ) : (
      <button className="header__toggle-on" onClick={openConfigAction}>
        open
      </button>
    );
  }
}

export default Header;
