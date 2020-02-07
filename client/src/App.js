import React, { Component } from "react";
import Header from "./containers/header/header";
// import MainContent from "./components/main-content";
import MainContent from "./containers/main-content/main-content";
import LoginModal from "./components/login-modal";
import { LOGIN_TOGGLE_CN } from "./constants/class-names";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginModalOpen: false
    };
  }

  componentDidMount() {
    this.props.fetchUniversitiesAction();
  }

  renderUniversityPicker() {
    console.log("rendering picker");
  }

  renderLoading() {
    console.log("rendering loading");
  }

  componentDidUpdate(prevProps) {
    const { configuration, fetchScheduleDataAction } = this.props;
    return configuration.group === prevProps.configuration.group
      ? null
      : fetchScheduleDataAction(configuration);
  }

  toggleLoginModal = e => {
    if (LOGIN_TOGGLE_CN.includes(e.target.className)) {
      this.setState({ loginModalOpen: !this.state.loginModalOpen });
    }
  };

  render() {
    const { loginModalOpen } = this.state;
    const {
      data,
      configuration: { day },
      universities
    } = this.props;
    return (
      <div className="app-wrapper">
        {universities ? this.renderUniversityPicker() : this.renderLoading()}
        {/* {loginModalOpen && (
          <LoginModal toggleLoginModal={this.toggleLoginModal} />
        )}
        <Header user={true} toggleLoginModal={this.toggleLoginModal} render />
        <MainContent /> */}
      </div>
    );
  }
}

export default App;
