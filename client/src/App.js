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
    // const { configuration } = this.props;
    // return configuration.group === prevProps.configuration.group
    //   ? null
    //   : this.setState();
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
    this.props.fetchScheduleDataAction(university);
  };

  getScheduleData = () => {
    const {
      configuration: { group }
    } = this.props;
    if (group && group.value) {
      const {
        configuration: {
          course: { value: courseValue },
          faculty: { value: facultyValue },
          group: { value: groupValue }
        },
        data
      } = this.props;

      console.log(courseValue, facultyValue, groupValue);
      return data.courses
        .find(course => course.number === courseValue)
        .faculties.find(faculty => faculty.name === facultyValue)
        .groups.find(group => group.number === groupValue).lessons;
    }
    return null;
  };

  renderMainContent = () => {
    const { loginModalOpen } = this.state;
    return (
      <React.Fragment>
        {loginModalOpen && (
          <LoginModal toggleLoginModal={this.toggleLoginModal} />
        )}
        <Header
          user={true}
          toggleLoginModal={this.toggleLoginModal}
          data={this.props.data}
        />
        <MainContent data={this.getScheduleData()} />
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
