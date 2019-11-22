import React from "react";
import { ERRORS } from "../../constants";
import "./login-modal.scss";

class LoginModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loginInput: null,
      passwordInput: null,
      confirmPasswordInput: null
    };

    this.submitLogin = this.submitLogin.bind(this);
    this.submitSignup = this.submitSignup.bind(this);
    this.updatePasswordInput = this.updatePasswordInput.bind(this);
    this.updateLoginInput = this.updateLoginInput.bind(this);
    this.updateConfirmPasswordInput = this.updateConfirmPasswordInput.bind(
      this
    );
    this.closeModal = this.closeModal.bind(this);
  }

  updateLoginInput(e) {
    const value = e.target.value;
    this.setState({
      loginInput: value
    });
  }

  updatePasswordInput(e) {
    const value = e.target.value;
    this.setState({
      passwordInput: value
    });
  }

  updateConfirmPasswordInput(e) {
    const value = e.target.value;
    this.setState({
      confirmPasswordInput: value
    });
  }

  submitLogin(e) {
    e.preventDefault();
    const {
      createErrorAction,
      loginUser,
      toggleLoginModal,
      clearErrorsAction
    } = this.props;
    const { loginInput, passwordInput } = this.state;
    if (!loginInput) {
      return createErrorAction(ERRORS.EMPTY_LOGIN);
    }
    if (!passwordInput) {
      return createErrorAction(ERRORS.EMPTY_PASSWORD);
    }

    loginUser(loginInput, passwordInput);
    clearErrorsAction();
    toggleLoginModal();
  }

  submitSignup(e) {
    e.preventDefault();
    if (!this.state.confirmPasswordInput) {
      return this.props.createErrorAction(ERRORS.EMPTY_CONFIRM_PASSWORD);
    }

    if (this.state.passwordInput !== this.state.confirmPasswordInput) {
      return this.props.createErrorAction(ERRORS.PASSWORDS_DO_NOT_MATCH);
    }

    this.props.signupUser(this.state.loginInput, this.state.passwordInput);
    this.props.clearErrorsAction();
    this.props.toggleSignupModal();
  }

  closeModal(e) {
    if (
      e.target.className === "login-modal__background" ||
      e.target.className === "login-modal__close-button"
    ) {
      this.props.clearErrorsAction();
      this.props.closeAuthModals();
    }
  }

  renderLoginModal() {
    return (
      <div className="login-modal">
        <div className="login-modal__button-container">
          <button
            className="login-modal__close-button"
            onClick={this.closeModal}
          ></button>
        </div>
        <div className="login-modal__form-container">
          <header className="login-modal__header">
            <span>Log in to Gallery</span>
          </header>
          <form
            onSubmit={this.submitLogin}
            className="login-modal__form-content"
          >
            <div className="login-modal__form-item">
              <label for="login">Login:</label>
              <input
                type="text"
                placeholder="Enter your login"
                id="login"
                onChange={this.updateLoginInput}
              />
            </div>
            <div className="login-modal__form-item">
              <label for="password">Password:</label>
              <input
                type="password"
                placeholder="Enter your password"
                id="password"
                onChange={this.updatePasswordInput}
              />
            </div>
            <div className="login-modal__error">{this.props.error}</div>
            <input type="submit" />
          </form>
          <button onClick={this.props.toggleSignupModal}>Sign up</button>
        </div>
      </div>
    );
  }

  renderSignupModal() {
    return (
      <div className="login-modal">
        <div className="login-modal__button-container">
          <button
            className="login-modal__close-button"
            onClick={this.closeModal}
          ></button>
        </div>
        <div className="login-modal__form-container">
          <header className="login-modal__header">
            <span>Registration form</span>
          </header>
          <form
            onSubmit={this.submitSignup}
            className="login-modal__form-content"
          >
            <div className="login-modal__form-item">
              <label for="login">Login:</label>
              <input
                type="text"
                placeholder="Enter your login"
                id="login"
                onChange={this.updateLoginInput}
              />
            </div>
            <div className="login-modal__form-item">
              <label for="password">Password:</label>
              <input
                type="password"
                placeholder="Enter your password"
                id="password"
                onChange={this.updatePasswordInput}
              />
            </div>
            <div className="login-modal__form-item">
              <label for="password">Confirm password:</label>
              <input
                type="password"
                placeholder="Enter your password"
                id="password"
                onChange={this.updateConfirmPasswordInput}
              />
            </div>
            <div className="login-modal__error">{this.props.error}</div>
            <input type="submit" />
          </form>
          <button onClick={this.props.toggleLoginModal}>
            Go back to log in
          </button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="login-modal__background" onClick={this.closeModal}>
        {this.props.loginModalVisible
          ? this.renderLoginModal()
          : this.renderSignupModal()}
      </div>
    );
  }
}

export default LoginModal;
