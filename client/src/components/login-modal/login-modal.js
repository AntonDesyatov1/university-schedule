import React, { Component } from "react";
import { ERRORS } from "../../constants";

import "./login-modal.scss";

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      password: null,
    };
  }

  handleIdInput = (e) => {
    this.setState({
      id: e.target.value,
    });
  };

  handlePasswordInput = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  checkInput = (e) => {
    e.preventDefault();
    const { id, password } = this.state;
    const { createErrorAction, loginUserAction } = this.props;
    if (!id) {
      createErrorAction(ERRORS.EMPTY_ID);
    }
    if (!password) {
      createErrorAction(ERRORS.EMPTY_PASSWORD);
    }

    return loginUserAction(id, password);
  };

  render() {
    const { id, password } = this.state;
    return (
      <section className="login-modal">
        <span className="login-modal__header">
          <h3 className="login-modal__header-text">
            Login into your university account
          </h3>
        </span>
        <form className="login-modal__form">
          <div className="login-modal__item">
            <label className="login-modal__label" for="studentId">
              Student ID:
            </label>
            <input
              className="login-modal__input"
              onChange={this.handleIdInput}
              name="studentId"
              placeholder="Enter your student ID"
              value={id}
            />
          </div>
          <div className="login-modal__item">
            <label className="login-modal__label" for="password">
              Student Password:
            </label>
            <input
              className="login-modal__input"
              onChange={this.handlePasswordInput}
              name="password"
              placeholder="Enter your password"
              type="password"
              value={password}
            />
          </div>

          {this.props.error && <div className="login-modal__error"></div>}

          <button className="login-modal__button" onClick={this.checkInput}>
            Log in
          </button>
        </form>
      </section>
    );
  }
}

export default LoginModal;
