import React from "react";

import "./lesson-card.scss";

class LessonCard extends React.Component {
  sendData = e => {
    this.props.openSubjectModal(this.props.data, e.target.className);
  };

  render() {
    return this.props.data ? (
      <span className="lesson-card">
        <div className="lesson-card__metadata">
          <span>{this.props.data.name}</span>
          <span>{this.props.data.location}</span>
          <span>{this.props.data.type}</span>
          <span className="lesson-card__teachers">
            {this.props.data.teachers && "Teachers: "}
            {this.props.data.teachers &&
              this.props.data.teachers.map(teacher => (
                <span>{teacher.name}</span>
              ))}
          </span>
        </div>
        <button onClick={this.sendData}>Details</button>
      </span>
    ) : (
      <span className="lesson-card"></span>
    );
  }
}

export default LessonCard;
