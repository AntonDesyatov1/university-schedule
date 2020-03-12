import React, { Component } from "react";
import LessonCard from "../lesson-card";
import { DAYS } from "../../constants";

import "./main-content.scss";

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      week: 0
    };
  }

  componentDidUpdate(prevProps) {
    const { university } = this.props.configuration;
    const { prevUniversity } = prevProps.configuration;
    if (
      prevUniversity &&
      prevUniversity.value !== university &&
      university.value
    ) {
      this.props.fetchScheduleDataAction(university.value);
    }
  }

  renderScheduleForDay = day => {
    return;
  };

  renderScheduleData = () => {
    const { data } = this.props;
    return (
      <section className="main-content">
        <span className="main-content__week-picker">
          <button onClick={() => this.setState({ week: 0 })}>week 1</button>
          <button onClick={() => this.setState({ week: 1 })}>week 2</button>
        </span>
        <div className="main-content__grid">
          {data[this.state.week].map(day => (
            <React.Fragment>
              <span className="main-content__day">{day.name}</span>
              <section className="main-content__schedule">
                Daily schedule here
              </section>
            </React.Fragment>
          ))}
        </div>
      </section>
    );
  };

  renderEmptyData = () => (
    <div className="main-content__empty-data">
      Choose your course, faculty and group to see your schedule
    </div>
  );

  render() {
    return (
      <main
        className={
          this.props.isConfigOpen
            ? "main-content__container"
            : "main-content__container-full"
        }
      >
        {this.props.data ? this.renderScheduleData() : this.renderEmptyData()}
      </main>
    );
  }
}

export default MainContent;
