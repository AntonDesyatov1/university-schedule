import React, { Component } from "react";
import Header from "./containers/header/header";
import MainContent from "./containers/main-content/main-content";
import LoginModal from "./containers/login-modal/login-modal";
import UniversityPicker from "./components/university-picker";
import { TOGGLE_CN, LOADER_STYLES } from "./constants/class-names";
import SubjectModal from "./components/subject-modal";
import BounceLoader from "react-spinners/BounceLoader";

import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginModalOpen: false,
      isPickerVisible: false,
      isSubjectModalVisible: false,
      subjectModalMetadata: null,
    };
  }

  componentDidMount() {
    const { loginUser, fetchUniversities } = this.props;
    if (localStorage.getItem("user")) {
      const login = localStorage.getItem("user");
      const password = localStorage.getItem("password");
      const university = localStorage.getItem("university");
      loginUser(login, password, university);
    } else {
      fetchUniversities();
      this.setState({ isPickerVisible: true });
    }
  }

  renderLoading() {
    console.log("rendering loading");
  }

  toggleLoginModal = (e) => {
    if (TOGGLE_CN.includes(e.target.className)) {
      this.setState({ loginModalOpen: !this.state.loginModalOpen });
    }
  };

  onUniversityPick = ({ target }) => {
    const { setUniversity } = this.props;
    const university = target.id || target.innerHTML;
    this.setState({ isPickerVisible: false });
    setUniversity(university);
  };

  openSubjectModal = (data) => {
    const { teachers } = this.props;
    let teachersProp = [];
    data.teachers.forEach((teacherName) =>
      teachers.forEach((teacher) =>
        teacherName === teacher.name ? teachersProp.push(teacher) : null,
      ),
    );
    this.setState({
      isSubjectModalVisible: true,
      subjectModalMetadata: { ...data, teachers: teachersProp },
    });
  };

  closeSubjectModal = (e) => {
    if (TOGGLE_CN.includes(e.target.className)) {
      this.setState({
        isSubjectModalVisible: false,
      });
    }
  };

  renderMainContent = () => {
    const { isSubjectModalVisible, subjectModalMetadata } = this.state;
    const {
      user: { loggedIn, university },
    } = this.props;
    return (
      <React.Fragment>
        {!loggedIn && <LoginModal university={university} />}
        {isSubjectModalVisible && (
          <SubjectModal
            {...subjectModalMetadata}
            closeModal={this.closeSubjectModal}
          />
        )}
        <Header
          user={true}
          toggleLoginModal={this.toggleLoginModal}
          data={this.props.data}
        />
        {loggedIn && <MainContent openSubjectModal={this.openSubjectModal} />}
      </React.Fragment>
    );
  };

  render() {
    const { universities, user, isLoading } = this.props;
    const university = user && user.university;
    const { isPickerVisible } = this.state;
    return (
      <div className="app-wrapper">
        <BounceLoader loading={isLoading} css={LOADER_STYLES} size={150} />
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
