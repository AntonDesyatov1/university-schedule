import React, { Component } from "react";
import Header from "./containers/header/header";
// import MainContent from "./components/main-content";
import MainContent from "./containers/main-content/main-content";
import LoginModal from "./components/login-modal";
import UniversityPicker from "./components/university-picker";
import { LOGIN_TOGGLE_CN } from "./constants/class-names";

import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginModalOpen: false,
      isPickerVisible: true
    };
  }

  componentDidMount() {
    this.props.fetchUniversitiesAction();
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

  onUniversityPick = ({ target }) => {
    const university = target.querySelector("span").innerHTML;
    this.setState({ isPickerVisible: false });
    this.props.setUniversityAction(university);
  };

  renderMainContent = () => {
    const { loginModalOpen } = this.state;
    return (
      <React.Fragment>
        {loginModalOpen && (
          <LoginModal toggleLoginModal={this.toggleLoginModal} />
        )}
        <Header user={true} toggleLoginModal={this.toggleLoginModal} />
        <MainContent />
      </React.Fragment>
    );
  };

  render() {
    const {
      configuration: { day },
      universities,
      university,
      setUniversityAction
    } = this.props;
    const { isPickerVisible } = this.state;
    return (
      <div className="app-wrapper">
        {isPickerVisible && (
          <UniversityPicker
            universities={universities}
            onPick={this.onUniversityPick}
          />
        )}
        {university && this.renderMainContent()}
      </div>
    );
  }
}

export default App;
