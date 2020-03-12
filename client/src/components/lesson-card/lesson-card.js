import React from "react";

import "./lesson-card.scss";

class LessonCard extends React.Component {
  sendData = e => {
    this.props.openSubjectModal(this.props.data, e.target.className);
  };

  render() {
    return this.props.data ? (
      <div className="lesson-card">
        <span>Subject: {this.props.data.name}</span>
        <span>Location: {this.props.data.location}</span>
        <span>Type: {this.props.data.type}</span>
        <span>
          {this.props.data.teachers && "Teachers: "}
          {this.props.data.teachers &&
            this.props.data.teachers.map(teacher => (
              <span>{teacher.name}</span>
            ))}
        </span>
        <span onClick={this.sendData}>Details</span>
      </div>
    ) : (
      <span className="lesson-card"></span>
    );
  }
}

export default LessonCard;
