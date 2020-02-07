import React, { Component } from "react";
import Select from "react-select";
import "./configuration.scss";

class Configuration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      university: null,
      course: null,
      faculty: null,
      group: null,
      day: null
    };
  }

  setConfiguration = () => {
    this.props.setConfigurationAction(this.state);
  };

  renderUniversitySelector = () => (
    <div className="configuration__select-container">
      <label for="university">Select your university</label>
      <Select
        onChange={this.handleUniversityChange}
        options={this.formSelectData(this.props.data.universities)}
        placeholder="Select university"
        value={this.state.university || this.props.university}
      />
    </div>
  );

  formSelectData = data => data.map(item => ({ value: item, label: item }));

  renderCourseSelector = () => (
    <div className="configuration__select-container">
      <label for="course">University year:</label>
      <Select
        onChange={this.handleCourseChange}
        options={this.formSelectData(this.props.data.courses)}
        placeholder="Select course"
        value={this.state.course || this.props.course}
      />
    </div>
  );

  renderFacultySelector = () => {
    console.log("Rendering faculty selector");
    return (
      <div className="configuration__select-container">
        <label for="faculty">Select faculty:</label>
        <Select
          onChange={this.handleFacultyChange}
          options={this.formSelectData(this.props.data.faculties)}
          value={this.state.faculty || this.props.faculty}
        />
      </div>
    );
  };

  renderGroupSelector = () => (
    <div className="configuration__select-container">
      <label for="group">Select group:</label>
      <Select
        onChange={this.handleGroupChange}
        options={this.formSelectData(this.props.data.groups)}
        placeholder="Select group"
        value={this.state.group || this.props.group}
      />
    </div>
  );

  renderDaySelector = () => (
    <div className="configuration__select-container">
      <label for="day">Day:</label>
      <Select
        onChange={this.handleDayChange}
        options={this.formSelectData(this.props.data.days)}
        value={this.state.day || this.props.day}
      />
    </div>
  );

  handleUniversityChange = value => {
    this.setState(
      {
        university: value,
        course: null,
        faculty: null,
        group: null,
        day: null
      },
      this.setConfiguration
    );
    this.props.fetchScheduleDataAction(value);
  };

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

  render() {
    const { university, faculty, course, group } = this.state;
    const {
      university: savedUniversity,
      course: savedCourse,
      faculty: savedFaculty,
      group: savedGroup
    } = this.props;
    return (
      <section className="configuration__container">
        <form className="configuration__form">
          {this.renderUniversitySelector()}
          {(university || savedUniversity) && this.renderCourseSelector()}
          {(course || savedCourse) && this.renderFacultySelector()}
          {(faculty || savedFaculty) && this.renderGroupSelector()}
          {(group || savedGroup) && this.renderDaySelector()}
        </form>
      </section>
    );
  }
}

export default Configuration;
