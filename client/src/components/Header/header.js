import React from "react";
import Menu from "../menu";

import "./header.scss";

class Header extends React.Component {
  state = {
    isMenuOpened: false,
  };

  openMenu = () =>
    this.setState((state) => ({
      isMenuOpened: !state.isMenuOpened,
    }));

  render() {
    const { isMenuOpened } = this.state;
    return (
      <div>
        {!isMenuOpened && (
          <button className="header__toggle-on" onClick={this.openMenu}>
            <i class="fa fa-bars"></i>
          </button>
        )}
        {isMenuOpened && <Menu />}
      </div>
    );
  }
}

export default Header;
