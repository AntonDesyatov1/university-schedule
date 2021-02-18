import React, { Component } from "react";
import Header from "./containers/header/header";
// import MainContent from "./components/main-content";
import MainContent from "./containers/main-content/main-content";
import LoginModal from "./components/login-modal";
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
      subjectModalMetadata: null
    };
  }

  componentDidMount() {
    this.props.fetchUniversitiesAction();
    this.setState({ isPickerVisible: true });
  }

  renderLoading() {
    console.log("rendering loading");
  }

  toggleLoginModal = e => {
    if (TOGGLE_CN.includes(e.target.className)) {
      this.setState({ loginModalOpen: !this.state.loginModalOpen });
    }
  };

  onUniversityPick = ({ target }) => {
    const { setUniversityAction, fetchScheduleDataAction } = this.props;
    const university = target.id || target.innerHTML;
    this.setState({ isPickerVisible: false });
    setUniversityAction(university);
    fetchScheduleDataAction(university);
  };

  getScheduleData = () => {
    const {
      configuration: { group }
    } = this.props;

    try {
      if (group && group.value) {
        const {
          configuration: {
            course: { value: courseValue },
            faculty: { value: facultyValue },
            group: { value: groupValue }
          },
          data
        } = this.props;

        return data
          .find(course => course.number === courseValue)
          .faculties.find(faculty => faculty.name === facultyValue)
          .groups.find(group => group.number === groupValue).lessons;
      }
    } catch (e) {
      debugger;
    }
    return null;
  };

  openSubjectModal = data => {
    const { teachers } = this.props;
    let teachersProp = [];
    data.teachers.forEach(teacherName =>
      teachers.forEach(teacher =>
        teacherName === teacher.name ? teachersProp.push(teacher) : null
      )
    );
    this.setState({
      isSubjectModalVisible: true,
      subjectModalMetadata: { ...data, teachers: teachersProp }
    });
  };

  closeSubjectModal = e => {
    if (TOGGLE_CN.includes(e.target.className)) {
      this.setState({
        isSubjectModalVisible: false
      });
    }
  };

  renderMainContent = () => {
    const {
      loginModalOpen,
      isSubjectModalVisible,
      subjectModalMetadata
    } = this.state;
    return (
      <React.Fragment>
        {loginModalOpen && (
          <LoginModal toggleLoginModal={this.toggleLoginModal} />
        )}
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
        <MainContent
          data={this.getScheduleData()}
          openSubjectModal={this.openSubjectModal}
        />
      </React.Fragment>
    );
  };

  render() {
    const { universities, university, isLoading } = this.props;
    const { isPickerVisible } = this.state;
    console.log(isPickerVisible);
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
