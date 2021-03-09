import React, { Component } from "react";
import LessonCard from "../lesson-card";
import { DAYS } from "../../constants";

import "./main-content.scss";

class MainContent extends Component {
  toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  renderDayOff = () => {
    return (
      <div className="main-content__day-off-card">
        <div className="main-content__day-off-card-img">
          <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/partying-face_1f973.png" />
        </div>
        <span>Day off!</span>
      </div>
    );
  };

  render() {
    return (
      <section className="main-content">
        {this.props.data.map((day, index) => (
          <div className="main-content__day-card">
            {DAYS[index]}
            {day.length
              ? day.map((lesson) => <LessonCard {...lesson} />)
              : this.renderDayOff()}
          </div>
        ))}
      </section>
    );
  }
}

export default MainContent;
