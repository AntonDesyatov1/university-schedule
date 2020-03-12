import React from "react";

import "./lesson-card.scss";

class LessonCard extends React.Component {
  render() {
    return this.props.data ? (
      <div className="lesson-card">
        <span>{this.props.data.name}</span>
        <span>{this.props.data.location}</span>
        <span>{this.props.data.type}</span>
        <span>
          {this.props.data.teachers &&
            this.props.data.teachers.map(teacher => (
              <span>{teacher.name}</span>
            ))}
        </span>
      </div>
    ) : null;
  }
}

export default LessonCard;
