import React, { Component } from "react";
import LessonCard from "../lesson-card";

import "./main-content.scss";

class MainContent extends Component {
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
    /*const daysNames = Object.getOwnPropertyNames(data);

    return (
      <div className="main-content__grid">
        {this.props.configuration.day ? (
          <React.Fragment>
            <span className="main-content__day">
              {this.props.configuration.day.value}
            </span>
            <section className="main-content__schedule">
              Daily schedule here
            </section>
          </React.Fragment>
        ) : (
          daysNames.map(day => (
            <React.Fragment>
              <span className="main-content__day">{day}</span>
              <section className="main-content__schedule">
                {data[day].map(lesson => (
                  <LessonCard data={lesson} />
                ))}
              </section>
            </React.Fragment>
          ))
        )}
      </div>
    );*/
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
        {this.props.configuration.group
          ? this.renderScheduleData()
          : this.renderEmptyData()}
      </main>
    );
  }
}

export default MainContent;
