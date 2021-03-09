import React from "react";
import Menu from "../menu";

import "./header.scss";

class Header extends React.Component {
  state = {
    isMenuOpened: false,
  };

  toggleMenu = () =>
    this.setState((state) => ({
      isMenuOpened: !state.isMenuOpened,
    }));

  render() {
    const { isMenuOpened } = this.state;
    return (
      <div>
        {!isMenuOpened && (
          <button className="header__toggle-on" onClick={this.toggleMenu}>
            <i class="fa fa-bars"></i>
          </button>
        )}
        {isMenuOpened && <Menu toggleMenu={this.toggleMenu} />}
      </div>
    );
  }
}

export default Header;
