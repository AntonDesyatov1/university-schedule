import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Gallery from "./containers/Gallery/gallery";
import AuthModal from "./containers/LoginModal/login-modal";
import Profile from "./containers/Profile/profile";

import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      loginModalVisible: false,
      singupModalVisible: false
    };

    this.loginUser = this.loginUser.bind(this);
    this.signupUser = this.signupUser.bind(this);
    this.closeAuthModals = this.closeAuthModals.bind(this);
    this.renderAuthModal = this.renderAuthModal.bind(this);
    this.toggleLoginModal = this.toggleLoginModal.bind(this);
    this.toggleSingupModal = this.toggleSingupModal.bind(this);
  }

  componentDidMount() {
    const user = localStorage.getItem("user");
    return user ? this.props.fetchUserDataAction(user) : null;
  }

  renderAuthModal() {
    return this.state.loginModalVisible || this.state.singupModalVisible ? (
      <AuthModal
        toggleLoginModal={this.toggleLoginModal}
        toggleSignupModal={this.toggleSingupModal}
        loginModalVisible={this.state.loginModalVisible}
        user={this.props.user}
        closeAuthModals={this.closeAuthModals}
        signupUser={this.signupUser}
        loginUser={this.loginUser}
      />
    ) : null;
  }

  toggleLoginModal() {
    this.setState({
      loginModalVisible: !this.state.loginModalVisible,
      singupModalVisible: false
    });
  }

  toggleSingupModal() {
    this.setState({
      singupModalVisible: !this.state.singupModalVisible,
      loginModalVisible: false
    });
  }

  closeAuthModals() {
    this.setState({
      singupModalVisible: false,
      loginModalVisible: false
    });
  }

  loginUser(login, password) {
    this.props.loginUserAction(login, password);
  }

  signupUser(login, password) {
    console.log("Creating user!");
    this.props.signupUserAction(login, password);
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          {this.renderAuthModal()}
          <Header />
          <div className="app">
            <Navigation
              toggleLoginModal={this.toggleLoginModal}
              user={this.props.user}
              logout={this.props.logoutAction}
            />
            <div className="app__wrapper">
              <div className="app__content">
                <Switch>
                  <Route path="/profile" component={Profile} />
                  <Route path="/gallery" component={Gallery} />
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
