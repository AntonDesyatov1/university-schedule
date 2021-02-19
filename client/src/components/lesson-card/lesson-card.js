import React from "react";

import "./lesson-card.scss";

//day lesson time location teacher
const LessonCard = ({ lesson, time, location, teacher }) => {
  return lesson ? (
    <div className="lesson-card">
      <span className="lesson-card__metadata">
        <span>{lesson}</span>
        <span>{time}</span>
        <span>{location}</span>
        <span>{teacher && <span>{teacher}</span>}</span>
      </span>
      <button onClick={this.sendData}>Details</button>
    </div>
  ) : (
    <span className="lesson-card"></span>
  );
};

export default LessonCard;
