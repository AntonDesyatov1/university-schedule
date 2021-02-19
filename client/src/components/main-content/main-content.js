import React, { Component } from "react";
import LessonCard from "../lesson-card";
import { DAYS } from "../../constants";

import "./main-content.scss";

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      week: 0,
    };
  }

  componentDidUpdate(prevProps) {}

  renderScheduleForDay = (day) => {
    return;
  };

  toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  getDayName = () => {};

  renderScheduleData = () => {
    const { data } = this.props;
    console.log(data);
    return (
      <section className="main-content">
        <div className="main-content__day-card">
          Monday
          {data.length &&
            data[0].map((lesson) => {
              console.log(lesson);
              return <LessonCard {...lesson} />;
            })}
        </div>
        <div className="main-content__day-card">Tuesday</div>
        <div className="main-content__day-card">Wednesday</div>
        <div className="main-content__day-card">Thursday</div>
        <div className="main-content__day-card">Friday</div>
        <div className="main-content__day-card">Saturday</div>
      </section>
    );
  };

  renderEmptyData = () => (
    <div className="main-content__empty-data">
      Choose your course, faculty and group to see your schedule
    </div>
  );

  render() {
    return this.renderScheduleData();
  }
}

export default MainContent;
