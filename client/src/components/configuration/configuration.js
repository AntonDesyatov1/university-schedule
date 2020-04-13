import React, { Component } from "react";
import Select from "react-select";
import "./configuration.scss";

class Configuration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: null,
      faculty: null,
      group: null,
      day: null
    };
  }

  componentDidMount() {
    const { course, faculty, group } = this.props;
    this.setState({ course, faculty, group });
  }

  setConfiguration = () => {
    this.props.setConfigurationAction(this.state);
  };

  formSelectData = data => data.map(item => ({ value: item, label: item }));

  renderCourseSelector = courses => {
    return (
      <div className="configuration__select-container">
        <label for="course">University year:</label>
        <Select
          onChange={this.handleCourseChange}
          options={courses.map(course => ({
            value: course.number,
            label: course.number
          }))}
          placeholder="Select course"
          value={this.state.course || this.props.course}
        />
      </div>
    );
  };

  renderFacultySelector = faculties => {
    return (
      <div className="configuration__select-container">
        <label for="faculty">Select faculty:</label>
        <Select
          onChange={this.handleFacultyChange}
          options={faculties.map(faculty => ({
            value: faculty.name,
            label: faculty.name
          }))}
          value={this.state.faculty || this.props.faculty}
        />
      </div>
    );
  };

  renderGroupSelector = groups => {
    return (
      <div className="configuration__select-container">
        <label for="group">Select group:</label>
        <Select
          onChange={this.handleGroupChange}
          options={groups.map(group => ({
            value: group.number,
            label: group.number
          }))}
          placeholder="Select group"
          value={this.state.group || this.props.group}
        />
      </div>
    );
  };

  // renderDaySelector = () => {
  //   return (
  //     <div className="configuration__select-container">
  //       <label for="day">Day:</label>
  //       <Select
  //         onChange={this.handleDayChange}
  //         options={this.formSelectData(data.days)}
  //         value={this.state.day || day}
  //       />
  //     </div>
  //   );
  // };

  handleCourseChange = value => {
    this.setState(
      { course: value, faculty: null, group: null, day: null },
      this.setConfiguration
    );
  };

  handleFacultyChange = value =>
    this.setState(
      { faculty: value, group: null, day: null },
      this.setConfiguration
    );

  handleGroupChange = value =>
    this.setState({ group: value, day: null }, this.setConfiguration);

  handleDayChange = value =>
    this.setState({ day: value }, this.setConfiguration);

  handleReset = () => {
    this.setState(
      {
        course: null,
        faculty: null,
        group: null
      },
      this.props.resetConfiguartionAction
    );
  };

  render() {
    let { faculty, course, group } = this.state;
    const {
      faculty: savedFaculty,
      course: savedCourse,
      group: savedGroup
    } = this.props;
    const courseValue =
      (course && course.value) || (savedCourse && savedCourse.value);
    const facultyValue =
      (faculty && faculty.value) || (savedFaculty && savedFaculty.value);
    const groupValue =
      (group && group.value) || (savedGroup && savedGroup.value);
    const { data } = this.props;
    console.log(data);
    return (
      <section className="configuration__container">
        <form className="configuration__form">
          {this.renderCourseSelector(data)}
          {courseValue &&
            this.renderFacultySelector(
              data.find(course => course.number === courseValue).faculties
            )}
          {facultyValue &&
            this.renderGroupSelector(
              data
                .find(course => course.number === courseValue)
                .faculties.find(faculty => faculty.name === facultyValue).groups
            )}
          {/* {group && this.renderDaySelector()} */}
        </form>
        <button className="configuration__reset" onClick={this.handleReset}>
          Reset
        </button>
      </section>
    );
  }
}

export default Configuration;
